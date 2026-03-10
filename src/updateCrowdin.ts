import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';
import * as os from 'os';

const DOCS_DIR = 'docs/8jU9vbiLbvbIk0DuJMvd';
const CONFIG_FILE = 'crowdin.yml';

interface CrowdinFileEntry {
  source: string;
  translation: string;
}

interface CrowdinConfig {
  base_path?: string;
  preserve_hierarchy?: boolean;
  files: CrowdinFileEntry[];
  [key: string]: any;
}

function findMdFiles(dir: string, fileList: string[] = []): string[] {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      findMdFiles(filePath, fileList);
    } else {
      if (path.extname(file) === '.md') {
        fileList.push(filePath.replace(/\\/g, '/'));
      }
    }
  });
  return fileList;
}

function updateCrowdinConfig() {
  console.log(` --- Searching for "${DOCS_DIR}" ---`);

  if (!fs.existsSync(DOCS_DIR)) {
    console.error(`--- Error: "${DOCS_DIR}" not found. ---`);
    process.exit(1);
  }

  const mdFiles = findMdFiles(DOCS_DIR);

  if (mdFiles.length === 0) {
    console.warn(` --- No file found in  "${DOCS_DIR}". ---`);
    return;
  }

  const crowdinFiles: CrowdinFileEntry[] = mdFiles.map((sourcePath) => {
    const translationPath = sourcePath.replace(`${DOCS_DIR}/`, `${DOCS_DIR}/%locale%/`);
    return { source: sourcePath, translation: translationPath };
  });

  let otherConfigProps: any = {};
  if (fs.existsSync(CONFIG_FILE)) {
    try {
      const existingContent = fs.readFileSync(CONFIG_FILE, 'utf8');
      const loadedConfig = yaml.load(existingContent) as CrowdinConfig;
      if (loadedConfig) {
        const { files, base_path, preserve_hierarchy, ...rest } = loadedConfig;
        otherConfigProps = rest;
      }
    } catch (e) { console.error(' --- Error, crowdin.yaml not found ---', e); }
  }

  const filesJsonString = JSON.stringify(crowdinFiles, null, 4);
  let finalOutput = `"base_path": "."\n\n"preserve_hierarchy": true\n\n`;
  for (const key in otherConfigProps) {
    finalOutput += `"${key}": ${JSON.stringify(otherConfigProps[key])}\n\n`;
  }
  finalOutput += `"files": ${filesJsonString}`;

  try {
    fs.writeFileSync(CONFIG_FILE, finalOutput, 'utf8');
    console.log(` --- ${CONFIG_FILE} updated.`);
  } catch (e) { console.error(' --- There was an error saving crowdin.yaml ---', e); }

  const githubOutputPath = process.env.GITHUB_OUTPUT;

  if (githubOutputPath) {
    const pathsJson = JSON.stringify(mdFiles);
    try {
      fs.appendFileSync(githubOutputPath, `found_files=${pathsJson}${os.EOL}`);
      console.log(` --- Found files written to GITHUB_OUTPUT: ${pathsJson} ---`);
    } catch (error) {
      console.error(' --- Unable to write on GITHUB_OUTPUT ---', error);
    }
  } else {
    console.log(' --- GITHUB_OUTPUT environment variable not set. Skipping output to GitHub Actions. ---');
  }
}

updateCrowdinConfig();