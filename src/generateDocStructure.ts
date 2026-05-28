import * as fs from 'fs';
import {
  DOCS_DIR,
  DOCS_STRUCTURE_FILE,
  writeDocsStructureManifest,
} from './docsStructure';

function generateDocStructure() {
  console.log(`🔍 Generating a manifest for the "${DOCS_DIR}" directory...`);

  if (!fs.existsSync(DOCS_DIR)) {
    console.error(`❌ Error: The directory "${DOCS_DIR}" does not exist.`);
    process.exit(1);
  }

  let manifest: ReturnType<typeof writeDocsStructureManifest>;
  try {
    manifest = writeDocsStructureManifest();
  } catch (error) {
    console.error('❌ Error while generating the manifest:', error);
    process.exit(1);
  }
  console.log(`✅ Updated ${DOCS_STRUCTURE_FILE}.`);

  if (!manifest.tree.docs) {
    console.warn('⚠️ Generated manifest without a "docs" root node.');
  }
}

generateDocStructure();
