# devportal-docs – source scripts

This directory contains the TypeScript scripts that power the `upload_sources_to_crowdin` GitHub Actions workflow. They are responsible for keeping a `docs-structure.json` manifest up to date and for regenerating the `crowdin.yml` configuration file before every upload.

---

## High-level workflow

```
Trigger (manual / called workflow)
  └─ generate_doc_structure   →  writes / updates docs-structure.json
       └─ git commit + push   (only when the file actually changed)
  └─ generate_file            →  writes crowdin.yml
       └─ crowdin-action      →  uploads sources to Crowdin
```

The two workflow inputs that control behaviour are:

- `paths_to_upload` – optional list of docs-relative paths whose sources should be added/refreshed.
- `paths_to_delete` – optional list of docs-relative paths whose nodes should be removed from the manifest.

Both inputs accept a JSON array, a comma-separated list, or one path per line.

---

## Scripts

### `npm run generate_doc_structure`

Entry point: [`generateDocStructure.ts`](generateDocStructure.ts)

Reads `PATHS_TO_UPLOAD` and `PATHS_TO_DELETE` from the environment and writes `docs-structure.json`.

- **Full scan** (no paths provided): walks the entire `docs/` tree and rebuilds the manifest from scratch.
- **Incremental update** (`PATHS_TO_UPLOAD` set): loads the existing manifest and merges only the selected nodes into it, creating any missing intermediate directory nodes.
- **Deletion** (`PATHS_TO_DELETE` set): loads the existing manifest and removes the targeted nodes.

The script exits with a non-zero code if `docs/` does not exist or if the manifest cannot be written.

### `npm run generate_file`

Entry point: [`generateCrowdinConfig.ts`](generateCrowdinConfig.ts)

Reads `PATHS_TO_UPLOAD` from the environment and writes `crowdin.yml`.

- When `PATHS_TO_UPLOAD` is set, only the `.md` files under the selected paths are included.
- When it is empty, all `.md` files under `docs/` are included.
- `docs-structure.json` is always prepended to the files list so translators can translate folder/file labels.
- When running on GitHub Actions (`GITHUB_OUTPUT` is set), the script also exposes a `found_files` step output containing a JSON array of the collected markdown paths.

---

## Shared helpers – `docsStructure.ts`

All tree-walking, merging, and path-normalisation logic lives in [`docsStructure.ts`](docsStructure.ts). Key exports:

| Export | Purpose |
|---|---|
| `buildDirectoryNode` | Recursively walks a directory and builds a node tree. Dashes and underscores in names are converted to spaces for the `label`. |
| `collectDocsData` | Full scan of `docs/`; returns the manifest tree and the flat list of all `.md` paths. |
| `collectSelectedMarkdownFiles` | Expands a list of selected paths to individual `.md` files, recursing into directories and skipping `.gitbook`. |
| `readDocsStructureManifest` | Loads `docs-structure.json`; falls back to an empty root node when the file is missing or malformed. |
| `writeDocsStructureManifest` | Orchestrates reading, merging, and writing the manifest. |
| `mergeManifestWithSelectedPaths` | Inserts or updates nodes for selected paths in the existing tree. |
| `deleteSelectedNode` | Removes a node (and its subtree) from the manifest. |
| `buildCrowdinFileEntries` | Maps source `.md` paths to Crowdin `source`/`translation` pairs, injecting `%locale%` after `docs/`. |
| `parseRequestedDocsPaths` | Parses a JSON array, CSV, or newline-separated string into a `string[]`. |

---

## Translation manifest (`docs-structure.json`)

The manifest is uploaded to Crowdin alongside the Markdown sources so translators can provide localised names for each directory and file. A downstream repository consumes the translated copy to rename directories and files when assembling the localised site.

### Schema

Object keys are the original filesystem names (stable across locales). Only `label` values are translated.

**Directory node**

```jsonc
"soluzioni": {
  "label": "soluzioni",   // translatable
  "directory": true,
  "children": { /* nested nodes */ }
}
```

**File node**

```jsonc
"README.md": {
  "label": "README",      // translatable
  "directory": false
}
```

**Full example**

```jsonc
{
  "version": 1,
  "tree": {
    "docs": {
      "label": "docs",
      "directory": true,
      "children": {
        "soluzioni": {
          "label": "soluzioni",
          "directory": true,
          "children": {
            "asilo-nido": {
              "label": "asilo nido",
              "directory": true,
              "children": {
                "README.md": { "label": "README", "directory": false }
              }
            }
          }
        }
      }
    }
  }
}
```

---

## Workflow dispatch inputs

When triggering `.github/workflows/upload_sources_to_crowdin.yml` manually from the GitHub UI:

| Input | Description |
|---|---|
| `paths_to_upload` | Paths to add/refresh. Resolved from `docs/`, so `app-io/guide/1.0` expands to all `.md` files under `docs/app-io/guide/1.0`. Explicit `.md` files are also accepted with or without the `docs/` prefix. |
| `paths_to_delete` | Paths whose nodes should be removed from the manifest. Same format as `paths_to_upload`. |

Provide values as one path per line or a comma-separated list. `.gitbook` directories are always ignored.
