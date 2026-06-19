import * as fs from 'fs';
import {
  DIR_NAMES_URL,
  DOCS_DIR,
  DOCS_STRUCTURE_FILE,
  fetchDirNamesPaths,
  parseBooleanFlag,
  parseRequestedDocsPaths,
  writeDocsStructureManifest,
} from './docsStructure';

async function generateDocStructure() {
  console.log(`🔍 Generating a manifest for the "${DOCS_DIR}" directory...`);

  if (!fs.existsSync(DOCS_DIR)) {
    console.error(`❌ Error: The directory "${DOCS_DIR}" does not exist.`);
    process.exit(1);
  }

  const requestedSelectedPaths = parseRequestedDocsPaths(process.env.PATHS_TO_UPLOAD);
  const pathsToDelete = parseRequestedDocsPaths(process.env.PATHS_TO_DELETE);
  const uploadAll = parseBooleanFlag(process.env.UPLOAD_ALL);

  if (!uploadAll && requestedSelectedPaths.length === 0 && pathsToDelete.length === 0) {
    console.error(
      '❌ Nothing to do: provide paths to upload, paths to delete, or enable the "upload all" option.',
    );
    process.exit(1);
  }

  let selectedPaths = requestedSelectedPaths;
  let rebuildFromSelectedPaths = false;

  if (uploadAll) {
    console.log(`🌐 Fetching dirNames from ${DIR_NAMES_URL}...`);
    try {
      selectedPaths = await fetchDirNamesPaths();
    } catch (error) {
      console.error('❌ Error while fetching dirNames:', error);
      process.exit(1);
    }

    if (selectedPaths.length === 0) {
      console.error('❌ The dirNames payload is empty; refusing to rebuild an empty manifest.');
      process.exit(1);
    }

    rebuildFromSelectedPaths = true;
    console.log(`📥 Received ${selectedPaths.length} path(s) from dirNames.`);
  }

  let manifest: ReturnType<typeof writeDocsStructureManifest>;
  try {
    manifest = writeDocsStructureManifest(DOCS_STRUCTURE_FILE, DOCS_DIR, {
      selectedPaths,
      pathsToDelete,
      existingManifestPath: DOCS_STRUCTURE_FILE,
      rebuildFromSelectedPaths,
    });
  } catch (error) {
    console.error('❌ Error while generating the manifest:', error);
    process.exit(1);
  }

  if (rebuildFromSelectedPaths) {
    console.log(`🧱 Rebuilt manifest from ${selectedPaths.length} dirNames path(s).`);
  } else if (requestedSelectedPaths.length > 0) {
    console.log(
      `🎯 Incrementally updated manifest from ${requestedSelectedPaths.length} selected path(s).`,
    );
  }

  if (pathsToDelete.length > 0) {
    console.log(`🗑️ Removed ${pathsToDelete.length} selected path(s) from manifest.`);
  }

  console.log(`✅ Updated ${DOCS_STRUCTURE_FILE}.`);

  if (!manifest.tree.docs) {
    console.warn('⚠️ Generated manifest without a "docs" root node.');
  }
}

generateDocStructure().catch((error) => {
  console.error('❌ Unexpected error while generating the manifest:', error);
  process.exit(1);
});
