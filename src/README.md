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

The behaviour is driven entirely by the **presence** of the two workflow inputs:

- `paths_to_upload` – optional list of docs-relative paths whose sources should be added/refreshed.
- `paths_to_delete` – optional list of docs-relative paths whose nodes should be removed from the manifest.

Both inputs accept a JSON array, a comma-separated list, or one path per line.

The combination of the two inputs selects the mode:

| `paths_to_upload` | `paths_to_delete` | Mode |
|---|---|---|
| set | empty | **Filtered upload** – only the `.md` files under the selected paths are uploaded. |
| set | set | **Filtered upload + delete** – the selected paths are uploaded and the listed nodes are removed from the manifest. |
| empty | empty | **Full upload** – the manifest and the upload are rebuilt from the canonical `dirNames` list. |
| empty | set | **Delete only** – the listed nodes are removed from the manifest; no `.md` sources are uploaded. |

When both inputs are empty, both scripts use the canonical path list published at <https://static-contents.developer.pagopa.it/it/dirNames.json> (the `dirNames` array). That list is treated as the source of truth: `docs-structure.json` is rebuilt from those paths and the Crowdin upload is limited to the `.md` files reachable from them. The `docs/` directory is never scanned wholesale anymore.

In delete-only mode the targeted nodes are removed from `docs-structure.json` and only the refreshed manifest is sent to Crowdin (no `.md` sources are added).

---

## Scripts

### `npm run generate_doc_structure`

Entry point: [`generateDocStructure.ts`](generateDocStructure.ts)

Reads `PATHS_TO_UPLOAD` and `PATHS_TO_DELETE` from the environment and writes `docs-structure.json`.

- **dirNames rebuild** (both `PATHS_TO_UPLOAD` and `PATHS_TO_DELETE` empty): fetches `dirNames.json` and rebuilds the manifest from scratch using only those paths. The existing manifest is discarded so anything no longer listed in `dirNames` is dropped.
- **Incremental update** (`PATHS_TO_UPLOAD` set): loads the existing manifest and merges only the selected nodes into it, creating any missing intermediate directory nodes.
- **Deletion** (`PATHS_TO_DELETE` set): loads the existing manifest and removes the targeted nodes (runs in addition to the incremental update when `PATHS_TO_UPLOAD` is also set).

The script exits with a non-zero code if `docs/` does not exist or if the manifest cannot be written.

### `npm run generate_file`

Entry point: [`generateCrowdinConfig.ts`](generateCrowdinConfig.ts)

Reads `PATHS_TO_UPLOAD` and `PATHS_TO_DELETE` from the environment and writes `crowdin.yml`.

- When `PATHS_TO_UPLOAD` is set, the `.md` files under the selected paths are included. Each selected **directory** becomes a single glob entry (`docs/<dir>/**/*.md`) rather than one entry per file, and an explicit `.md` file stays a literal entry. Enumerating every file made `crowdin.yml` grow to thousands of blocks on a full upload, which the Crowdin CLI cannot process reliably (it stops part-way); the glob is expanded natively by the CLI and keeps the config small. A directory with no `.md` files is skipped so Crowdin never receives an empty glob.
- The glob's `translation` uses Crowdin's `**` and `%original_file_name%` placeholders (`docs/%locale%/<dir>/**/%original_file_name%`), which reproduce the previous per-file layout (`docs/<dir>/<sub>/foo.md` → `docs/%locale%/<dir>/<sub>/foo.md`). Each glob also carries an `ignore` for `.gitbook` subtrees.
- When `PATHS_TO_UPLOAD` is empty but `PATHS_TO_DELETE` is set (delete-only run), no `.md` sources are included; only the refreshed `docs-structure.json` is written to the config.
- When both are empty, the script fetches `dirNames.json` and includes the `.md` files reachable from those paths (one glob per `dirNames` entry).
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
| `buildCrowdinSourceEntries` | Maps selected paths to Crowdin `source`/`translation` entries: one glob per directory (`docs/<dir>/**/*.md`), a literal entry per explicit `.md` file. Skips empty/`.gitbook` directories. |
| `readDocsStructureManifest` | Loads `docs-structure.json`; falls back to an empty root node when the file is missing or malformed. |
| `writeDocsStructureManifest` | Orchestrates reading, merging, and writing the manifest. |
| `mergeManifestWithSelectedPaths` | Inserts or updates nodes for selected paths in the existing tree. |
| `deleteSelectedNode` | Removes a node (and its subtree) from the manifest. |
| `buildCrowdinFileEntries` | Prepends the source entries with the `docs-structure.json` `source`/`translation` pair. |
| `parseRequestedDocsPaths` | Parses a JSON array, CSV, or newline-separated string into a `string[]`. |
| `fetchDirNamesPaths` | Fetches the canonical `dirNames` array from `DIR_NAMES_URL` and returns it as `string[]`. |

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

Leaving **both** inputs empty rebuilds the manifest and uploads from the canonical `dirNames` list (full upload). See the table under [High-level workflow](#high-level-workflow) for every combination.

Provide values as one path per line or a comma-separated list. `.gitbook` directories are always ignored.
