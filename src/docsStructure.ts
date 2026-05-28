import * as fs from 'fs';
import * as path from 'path';

export const DOCS_DIR = 'docs';
export const CONFIG_FILE = 'crowdin.yml';
export const DOCS_STRUCTURE_FILE = 'docs-structure.json';
export const DOCS_STRUCTURE_TRANSLATION_PATH = `${DOCS_DIR}/%locale%/_meta/docs-structure.json`;

const IGNORED_DIRECTORY_NAMES = new Set(['.gitbook']);

export interface CrowdinFileEntry {
  source: string;
  translation: string;
}

export interface DocsStructureNode {
  label: string;
  directory: boolean;
  children?: Record<string, DocsStructureNode>;
}

export interface DocsStructureManifest {
  version: number;
  tree: Record<string, DocsStructureNode>;
}

function toPosixPath(filePath: string): string {
  return filePath.replace(/\\/g, '/');
}

function isMarkdownFile(entryName: string): boolean {
  return path.extname(entryName) === '.md';
}

function shouldIgnoreDirectory(entryName: string): boolean {
  return IGNORED_DIRECTORY_NAMES.has(entryName);
}

function isPathWithinRoot(rootPath: string, candidatePath: string): boolean {
  const relativePath = path.relative(rootPath, candidatePath);
  return relativePath === '' || (!relativePath.startsWith('..') && !path.isAbsolute(relativePath));
}

function toCrowdinSourcePath(entryPath: string, rootDir: string): string {
  const rootPath = path.resolve(rootDir);
  const absoluteEntryPath = path.resolve(entryPath);
  const relativePath = toPosixPath(path.relative(rootPath, absoluteEntryPath));
  return toPosixPath(path.join(DOCS_DIR, relativePath));
}

function normalizeSelectedPath(selectedPath: string): string {
  const normalizedPath = toPosixPath(selectedPath.trim()).replace(/^\.\//, '');

  if (normalizedPath === DOCS_DIR) {
    return '';
  }

  if (normalizedPath.startsWith(`${DOCS_DIR}/`)) {
    return normalizedPath.slice(DOCS_DIR.length + 1);
  }

  return normalizedPath;
}

function includesIgnoredDirectory(candidatePath: string): boolean {
  const segments = toPosixPath(candidatePath).split('/');
  return segments.some((segment) => IGNORED_DIRECTORY_NAMES.has(segment));
}

function listDirectoryEntries(dirPath: string): fs.Dirent[] {
  return fs
    .readdirSync(dirPath, { withFileTypes: true })
    .sort((left, right) => left.name.localeCompare(right.name));
}

function collectMarkdownFilesFromDirectory(
  dirPath: string,
  rootDir: string,
  collectedFiles: Set<string>,
) {
  for (const entry of listDirectoryEntries(dirPath)) {
    if (entry.isDirectory()) {
      if (shouldIgnoreDirectory(entry.name)) {
        continue;
      }

      collectMarkdownFilesFromDirectory(path.join(dirPath, entry.name), rootDir, collectedFiles);
      continue;
    }

    if (!entry.isFile() || !isMarkdownFile(entry.name)) {
      continue;
    }

    collectedFiles.add(toCrowdinSourcePath(path.join(dirPath, entry.name), rootDir));
  }
}

function buildDirectoryNode(
  dirPath: string,
  rootDir: string,
  mdFiles: string[],
): DocsStructureNode {
  const children: Record<string, DocsStructureNode> = {};

  for (const entry of listDirectoryEntries(dirPath)) {
    const entryPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      if (shouldIgnoreDirectory(entry.name)) {
        continue;
      }

      children[entry.name] = buildDirectoryNode(entryPath, rootDir, mdFiles);
      continue;
    }

    if (!entry.isFile() || !isMarkdownFile(entry.name)) {
      continue;
    }

    mdFiles.push(toCrowdinSourcePath(entryPath, rootDir));
    children[entry.name] = {
      label: path.basename(entry.name, '.md').replace(/[-_]+/g, ' '),
      directory: false,
    };
  }

  return {
    label: path.basename(dirPath).replace(/[-_]+/g, ' '),
    directory: true,
    children,
  };
}

export function collectDocsData(rootDir: string = DOCS_DIR): {
  manifest: DocsStructureManifest;
  mdFiles: string[];
} {
  if (!fs.existsSync(rootDir)) {
    throw new Error(`The directory "${rootDir}" does not exist.`);
  }

  const mdFiles: string[] = [];
  const rootName = path.basename(rootDir);
  const rootNode = buildDirectoryNode(rootDir, rootDir, mdFiles);

  return {
    manifest: {
      version: 1,
      tree: {
        [rootName]: rootNode,
      },
    },
    mdFiles,
  };
}

export function collectSelectedMarkdownFiles(
  selectedPaths: string[],
  rootDir: string = DOCS_DIR,
): string[] {
  if (!fs.existsSync(rootDir)) {
    throw new Error(`The directory "${rootDir}" does not exist.`);
  }

  const rootPath = path.resolve(rootDir);
  const collectedFiles = new Set<string>();

  for (const rawSelectedPath of selectedPaths) {
    const normalizedPath = normalizeSelectedPath(rawSelectedPath);

    if (!normalizedPath || includesIgnoredDirectory(normalizedPath)) {
      continue;
    }

    const absoluteSelectedPath = path.resolve(rootPath, normalizedPath);

    if (!isPathWithinRoot(rootPath, absoluteSelectedPath)) {
      throw new Error(`The path "${rawSelectedPath}" must stay within "${DOCS_DIR}/".`);
    }

    if (!fs.existsSync(absoluteSelectedPath)) {
      throw new Error(`The path "${rawSelectedPath}" does not exist within "${DOCS_DIR}/".`);
    }

    const selectedPathStat = fs.statSync(absoluteSelectedPath);

    if (selectedPathStat.isDirectory()) {
      collectMarkdownFilesFromDirectory(absoluteSelectedPath, rootDir, collectedFiles);
      continue;
    }

    if (!selectedPathStat.isFile() || !isMarkdownFile(path.basename(absoluteSelectedPath))) {
      throw new Error(`The path "${rawSelectedPath}" must be a Markdown file or a directory.`);
    }

    collectedFiles.add(toCrowdinSourcePath(absoluteSelectedPath, rootDir));
  }

  return Array.from(collectedFiles).sort((left, right) => left.localeCompare(right));
}

export function buildCrowdinFileEntries(mdFiles: string[]): CrowdinFileEntry[] {
  const markdownEntries = mdFiles.map((sourcePath) => ({
    source: sourcePath,
    translation: sourcePath.replace(`${DOCS_DIR}/`, `${DOCS_DIR}/%locale%/`),
  }));

  return [
    ...markdownEntries,
    {
      source: DOCS_STRUCTURE_FILE,
      translation: DOCS_STRUCTURE_TRANSLATION_PATH,
    },
  ];
}

export function writeDocsStructureManifest(
  outputPath: string = DOCS_STRUCTURE_FILE,
  rootDir: string = DOCS_DIR,
): DocsStructureManifest {
  const { manifest } = collectDocsData(rootDir);
  fs.writeFileSync(outputPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
  return manifest;
}
