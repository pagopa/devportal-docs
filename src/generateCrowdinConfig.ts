
import * as fs from 'fs';
import * as yaml from 'js-yaml';
import * as os from 'os';
import {
  buildCrowdinFileEntries,
  collectDocsData,
  collectSelectedMarkdownFiles,
  CONFIG_FILE,
  DOCS_DIR,
  type CrowdinFileEntry,
} from './docsStructure';

interface CrowdinConfig {
  base_path?: string;
  preserve_hierarchy?: boolean;
  files: CrowdinFileEntry[];
}

function parseRequestedDocsPaths(rawValue: string | undefined): string[] {
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

function generateCrowdinConfig() {
  console.log(`🔍 Scanning the "${DOCS_DIR}" directory...`);

  if (!fs.existsSync(DOCS_DIR)) {
    console.error(`❌ Error: The directory "${DOCS_DIR}" does not exist.`);
    process.exit(1);
  }

  const pathsToUpload = parseRequestedDocsPaths(process.env.PATHS_TO_UPLOAD);
  const mdFiles = pathsToUpload.length > 0
    ? collectSelectedMarkdownFiles(pathsToUpload)
    : collectDocsData().mdFiles;

  if (pathsToUpload.length > 0) {
    console.log(`🎯 Limiting the upload to ${pathsToUpload.length} selected path(s).`);
  }

  if (mdFiles.length === 0) {
    console.warn(`⚠️ No .md files found in "${DOCS_DIR}".`);
  }

  const files: CrowdinFileEntry[] = buildCrowdinFileEntries(mdFiles);

  const nextConfig: CrowdinConfig = {
    base_path: '.',
    preserve_hierarchy: true,
    files,
  };

  try {
    const serializedConfig = yaml.dump(nextConfig, {
      lineWidth: -1,
      noRefs: true,
      sortKeys: false,
    });
    fs.writeFileSync(CONFIG_FILE, serializedConfig, 'utf8');
    console.log(`✅ Updated ${CONFIG_FILE}.`);
  } catch (error) {
    console.error('❌ Error saving crowdin.yml.', error);
  }

  const githubOutputPath = process.env.GITHUB_OUTPUT;

  if (githubOutputPath) {
    const pathsJson = JSON.stringify(mdFiles);

    try {
      fs.appendFileSync(githubOutputPath, `found_files=${pathsJson}${os.EOL}`);
      console.log("🚀 Sent the 'found_files' output to GitHub Actions.");
    } catch (error) {
      console.error('❌ Unable to write to GITHUB_OUTPUT:', error);
    }
  } else {
    console.log('ℹ️ GITHUB_OUTPUT not detected (are you running locally?). Skipping this step.');
  }
}

generateCrowdinConfig();
