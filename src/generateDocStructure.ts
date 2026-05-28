import * as fs from 'fs';
import {
  DOCS_DIR,
  DOCS_STRUCTURE_FILE,
  parseRequestedDocsPaths,
  writeDocsStructureManifest,
} from './docsStructure';

function generateDocStructure() {
  console.log(`🔍 Generating a manifest for the "${DOCS_DIR}" directory...`);

  if (!fs.existsSync(DOCS_DIR)) {
    console.error(`❌ Error: The directory "${DOCS_DIR}" does not exist.`);
    process.exit(1);
  }

  const selectedPaths = parseRequestedDocsPaths(process.env.PATHS_TO_UPLOAD);
  const pathsToDelete = parseRequestedDocsPaths(process.env.PATHS_TO_DELETE);

  let manifest: ReturnType<typeof writeDocsStructureManifest>;
  try {
    manifest = writeDocsStructureManifest(DOCS_STRUCTURE_FILE, DOCS_DIR, {
      selectedPaths,
      pathsToDelete,
      existingManifestPath: DOCS_STRUCTURE_FILE,
    });
  } catch (error) {
    console.error('❌ Error while generating the manifest:', error);
    process.exit(1);
  }

  if (selectedPaths.length > 0) {
    console.log(`🎯 Incrementally updated manifest from ${selectedPaths.length} selected path(s).`);
  }

  if (pathsToDelete.length > 0) {
    console.log(`🗑️ Removed ${pathsToDelete.length} selected path(s) from manifest.`);
  }

  console.log(`✅ Updated ${DOCS_STRUCTURE_FILE}.`);

  if (!manifest.tree.docs) {
    console.warn('⚠️ Generated manifest without a "docs" root node.');
  }
}

generateDocStructure();
