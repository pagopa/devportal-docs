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

export interface WriteDocsStructureManifestOptions {
  selectedPaths?: string[];
  pathsToDelete?: string[];
  existingManifestPath?: string;
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

function toLabel(entryName: string): string {
  return entryName.replace(/[-_]+/g, ' ');
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
      label: toLabel(path.basename(entry.name, '.md')),
      directory: false,
    };
  }

  return {
    label: toLabel(path.basename(dirPath)),
    directory: true,
    children,
  };
}

function createEmptyRootNode(rootDir: string): DocsStructureNode {
  return {
    label: toLabel(path.basename(rootDir)),
    directory: true,
    children: {},
  };
}

function ensureDirectoryNode(node: DocsStructureNode): DocsStructureNode {
  if (!node.directory) {
    return {
      label: node.label,
      directory: true,
      children: {},
    };
  }

  if (!node.children) {
    return {
      ...node,
      children: {},
    };
  }

  return node;
}

function cloneNode(node: DocsStructureNode): DocsStructureNode {
  if (!node.directory) {
    return {
      label: node.label,
      directory: false,
    };
  }

  const childrenEntries = Object.entries(node.children ?? {}).map(([childName, childNode]) => [
    childName,
    cloneNode(childNode),
  ]);

  return {
    label: node.label,
    directory: true,
    children: Object.fromEntries(childrenEntries),
  };
}

function mergeNodes(baseNode: DocsStructureNode, incomingNode: DocsStructureNode): DocsStructureNode {
  if (!incomingNode.directory) {
    return cloneNode(incomingNode);
  }

  const normalizedBaseNode = ensureDirectoryNode(baseNode);
  const mergedChildren: Record<string, DocsStructureNode> = {
    ...(normalizedBaseNode.children ?? {}),
  };

  for (const [childName, incomingChildNode] of Object.entries(incomingNode.children ?? {})) {
    const existingChildNode = mergedChildren[childName];

    if (!existingChildNode) {
      mergedChildren[childName] = cloneNode(incomingChildNode);
      continue;
    }

    mergedChildren[childName] = mergeNodes(existingChildNode, incomingChildNode);
  }

  return {
    label: incomingNode.label || normalizedBaseNode.label,
    directory: true,
    children: mergedChildren,
  };
}

function createNodeFromSelectedEntry(selectedAbsolutePath: string, rootDir: string): DocsStructureNode {
  const selectedPathStat = fs.statSync(selectedAbsolutePath);

  if (selectedPathStat.isDirectory()) {
    return buildDirectoryNode(selectedAbsolutePath, rootDir, []);
  }

  return {
    label: toLabel(path.basename(selectedAbsolutePath, '.md')),
    directory: false,
  };
}

function insertSelectedNode(
  rootNode: DocsStructureNode,
  relativeSegments: string[],
  selectedNode: DocsStructureNode,
) {
  const normalizedRootNode = ensureDirectoryNode(rootNode);

  if (relativeSegments.length === 0) {
    normalizedRootNode.children = {
      ...(selectedNode.children ?? {}),
    };
    normalizedRootNode.label = selectedNode.label;
    return;
  }

  let cursorNode = normalizedRootNode;

  for (let index = 0; index < relativeSegments.length - 1; index += 1) {
    const segment = relativeSegments[index];
    const existingChild = cursorNode.children?.[segment];

    const nextNode = existingChild
      ? ensureDirectoryNode(existingChild)
      : {
          label: toLabel(segment),
          directory: true,
          children: {},
        };

    if (!cursorNode.children) {
      cursorNode.children = {};
    }

    cursorNode.children[segment] = nextNode;
    cursorNode = nextNode;
  }

  const targetSegment = relativeSegments[relativeSegments.length - 1];
  const existingTargetNode = cursorNode.children?.[targetSegment];
  const mergedTargetNode = existingTargetNode
    ? mergeNodes(existingTargetNode, selectedNode)
    : cloneNode(selectedNode);

  if (!cursorNode.children) {
    cursorNode.children = {};
  }

  cursorNode.children[targetSegment] = mergedTargetNode;
}

function deleteSelectedNode(rootNode: DocsStructureNode, relativeSegments: string[]) {
  const normalizedRootNode = ensureDirectoryNode(rootNode);

  if (relativeSegments.length === 0) {
    normalizedRootNode.children = {};
    return;
  }

  let cursorNode = normalizedRootNode;

  for (let index = 0; index < relativeSegments.length - 1; index += 1) {
    const segment = relativeSegments[index];
    const nextNode = cursorNode.children?.[segment];

    if (!nextNode || !nextNode.directory) {
      return;
    }

    cursorNode = ensureDirectoryNode(nextNode);
  }

  const targetSegment = relativeSegments[relativeSegments.length - 1];

  if (!cursorNode.children?.[targetSegment]) {
    return;
  }

  delete cursorNode.children[targetSegment];
}

function mergeManifestWithSelectedPaths(
  existingManifest: DocsStructureManifest,
  selectedPaths: string[],
  pathsToDelete: string[],
  rootDir: string,
): DocsStructureManifest {
  const rootPath = path.resolve(rootDir);
  const rootName = path.basename(rootDir);
  const baseRootNode = ensureDirectoryNode(
    cloneNode(existingManifest.tree[rootName] ?? createEmptyRootNode(rootDir)),
  );

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

    if (!selectedPathStat.isDirectory() && (!selectedPathStat.isFile() || !isMarkdownFile(path.basename(absoluteSelectedPath)))) {
      throw new Error(`The path "${rawSelectedPath}" must be a Markdown file or a directory.`);
    }

    const relativePath = toPosixPath(path.relative(rootPath, absoluteSelectedPath));
    const relativeSegments = relativePath ? relativePath.split('/') : [];
    const selectedNode = createNodeFromSelectedEntry(absoluteSelectedPath, rootDir);
    insertSelectedNode(baseRootNode, relativeSegments, selectedNode);
  }

  for (const rawPathToDelete of pathsToDelete) {
    const normalizedPath = normalizeSelectedPath(rawPathToDelete);

    if (!normalizedPath || includesIgnoredDirectory(normalizedPath)) {
      continue;
    }

    const absolutePathToDelete = path.resolve(rootPath, normalizedPath);

    if (!isPathWithinRoot(rootPath, absolutePathToDelete)) {
      throw new Error(`The path "${rawPathToDelete}" must stay within "${DOCS_DIR}/".`);
    }

    const relativePath = toPosixPath(path.relative(rootPath, absolutePathToDelete));
    const relativeSegments = relativePath ? relativePath.split('/') : [];
    deleteSelectedNode(baseRootNode, relativeSegments);
  }

  return {
    version: 1,
    tree: {
      [rootName]: baseRootNode,
    },
  };
}

export function parseRequestedDocsPaths(rawValue: string | undefined): string[] {
  if (!rawValue) {
    return [];
  }

  const trimmedValue = rawValue.trim();

  if (!trimmedValue) {
    return [];
  }

  try {
    const parsedValue = JSON.parse(trimmedValue) as unknown;

    if (Array.isArray(parsedValue)) {
      return parsedValue
        .map((entry) => `${entry}`.trim())
        .filter((entry) => entry.length > 0);
    }
  } catch {
    // Fall back to simple text parsing for workflow_dispatch input values.
  }

  return trimmedValue
    .split(/\r?\n|,/)
    .map((entry) => entry.trim())
    .filter((entry) => entry.length > 0);
}

export function readDocsStructureManifest(
  manifestPath: string = DOCS_STRUCTURE_FILE,
  rootDir: string = DOCS_DIR,
): DocsStructureManifest {
  const rootName = path.basename(rootDir);
  const fallbackManifest: DocsStructureManifest = {
    version: 1,
    tree: {
      [rootName]: createEmptyRootNode(rootDir),
    },
  };

  if (!fs.existsSync(manifestPath)) {
    return fallbackManifest;
  }

  try {
    const fileContent = fs.readFileSync(manifestPath, 'utf8');
    const parsedManifest = JSON.parse(fileContent) as Partial<DocsStructureManifest>;
    const tree = parsedManifest.tree ?? {};
    const parsedRootNode = tree[rootName];

    return {
      version: 1,
      tree: {
        [rootName]: parsedRootNode
          ? ensureDirectoryNode(cloneNode(parsedRootNode))
          : createEmptyRootNode(rootDir),
      },
    };
  } catch {
    return fallbackManifest;
  }
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
  options: WriteDocsStructureManifestOptions = {},
): DocsStructureManifest {
  const selectedPaths = options.selectedPaths ?? [];
  const pathsToDelete = options.pathsToDelete ?? [];
  const manifest = selectedPaths.length > 0 || pathsToDelete.length > 0
    ? mergeManifestWithSelectedPaths(
        readDocsStructureManifest(options.existingManifestPath ?? outputPath, rootDir),
        selectedPaths,
        pathsToDelete,
        rootDir,
      )
    : collectDocsData(rootDir).manifest;

  fs.writeFileSync(outputPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
  return manifest;
}
