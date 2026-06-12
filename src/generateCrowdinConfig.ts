import * as fs from 'fs';
import * as yaml from 'js-yaml';
import * as os from 'os';
import {
  buildCrowdinFileEntries,
  collectSelectedMarkdownFiles,
  CONFIG_FILE,
  DIR_NAMES_URL,
  DOCS_DIR,
  fetchDirNamesPaths,
  parseRequestedDocsPaths,
  type CrowdinFileEntry,
} from './docsStructure';

interface CrowdinConfig {
  base_path?: string;
  preserve_hierarchy?: boolean;
  files: CrowdinFileEntry[];
}

async function generateCrowdinConfig() {
  console.log(`🔍 Scanning the "${DOCS_DIR}" directory...`);

  if (!fs.existsSync(DOCS_DIR)) {
    console.error(`❌ Error: The directory "${DOCS_DIR}" does not exist.`);
    process.exit(1);
  }

  const requestedPathsToUpload = parseRequestedDocsPaths(process.env.PATHS_TO_UPLOAD);
  let pathsToUpload = requestedPathsToUpload;
  let usingDirNames = false;

  if (pathsToUpload.length === 0) {
    console.log(`🌐 Fetching dirNames from ${DIR_NAMES_URL}...`);
    try {
      pathsToUpload = await fetchDirNamesPaths();
    } catch (error) {
      console.error('❌ Error while fetching dirNames:', error);
      process.exit(1);
    }

    if (pathsToUpload.length === 0) {
      console.error('❌ The dirNames payload is empty; nothing to upload.');
      process.exit(1);
    }

    usingDirNames = true;
    console.log(`📥 Received ${pathsToUpload.length} path(s) from dirNames.`);
  } else {
    console.log(`🎯 Limiting the upload to ${pathsToUpload.length} selected path(s).`);
  }

  const mdFiles = collectSelectedMarkdownFiles(pathsToUpload);

  if (mdFiles.length === 0) {
    console.warn(
      usingDirNames
        ? `⚠️ No .md files found under the paths declared in dirNames.`
        : `⚠️ No .md files found under the selected paths.`,
    );
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
    process.exit(1);
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

generateCrowdinConfig().catch((error) => {
  console.error('❌ Unexpected error while generating crowdin.yml:', error);
  process.exit(1);
});
