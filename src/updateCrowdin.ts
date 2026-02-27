import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';
import * as os from 'os'; // Aggiungi questo import per gestire i fine riga

// --- COSTANTI DI CONFIGURAZIONE ---
const DOCS_DIR = 'docs';
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
  console.log(`🔍 Scansione della cartella "${DOCS_DIR}" in corso...`);

  if (!fs.existsSync(DOCS_DIR)) {
    console.error(`❌ Errore: La cartella "${DOCS_DIR}" non esiste.`);
    process.exit(1);
  }

  const mdFiles = findMdFiles(DOCS_DIR);

  if (mdFiles.length === 0) {
    console.warn(`⚠️ Nessun file .md trovato in "${DOCS_DIR}".`);
    return;
  }

  // --- 1. Generazione e salvataggio crowdin.yml (LOGICA ESISTENTE) ---
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
    } catch (e) { console.error('❌ Errore lettura crowdin.yml esistente.', e); }
  }

  const filesJsonString = JSON.stringify(crowdinFiles, null, 4);
  let finalOutput = `"base_path": "."\n\n"preserve_hierarchy": true\n\n`;
  for (const key in otherConfigProps) {
    finalOutput += `"${key}": ${JSON.stringify(otherConfigProps[key])}\n\n`;
  }
  finalOutput += `"files": ${filesJsonString}`;

  try {
    fs.writeFileSync(CONFIG_FILE, finalOutput, 'utf8');
    console.log(`✅ File ${CONFIG_FILE} aggiornato.`);
  } catch (e) { console.error('❌ Errore salvataggio crowdin.yml', e); }

  // --- 2. LOGICA PER GITHUB ACTIONS OUTPUT (NUOVA PARTE) ---

  // Questa variabile esiste SOLO se lo script gira su GitHub Actions
  const githubOutputPath = process.env.GITHUB_OUTPUT;

  if (githubOutputPath) {
    // Trasformiamo l'array in una stringa JSON semplice (es: ["docs/a.md","docs/b.md"])
    const pathsJson = JSON.stringify(mdFiles);

    // Scriviamo nel file speciale di GitHub usando il formato key=value
    // Usiamo os.EOL per essere sicuri di andare a capo correttamente
    try {
      fs.appendFileSync(githubOutputPath, `found_files=${pathsJson}${os.EOL}`);
      console.log(`🚀 Output 'found_files' inviato a GitHub Actions.`);
    } catch (error) {
      console.error('❌ Impossibile scrivere su GITHUB_OUTPUT:', error);
    }
  } else {
    console.log('ℹ️ GITHUB_OUTPUT non rilevato (stai eseguendo in locale?), salto questo passaggio.');
  }
}

updateCrowdinConfig();