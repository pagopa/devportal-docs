# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo does

This is a TypeScript tooling repo that manages translation uploads for the PagoPA Developer Portal. It:
1. Maintains `docs-structure.json` — a manifest of docs filenames/labels used by Crowdin translators.
2. Generates `crowdin.yml` — a Crowdin config listing which Markdown files to upload.
3. Exposes these as a GitHub Actions workflow (`upload_sources_to_crowdin.yml`) that accepts path inputs and pushes results to Crowdin.

The actual docs live in a separate branch (`docs/from-gitbook`, configurable via the `CHECKOUT_BRANCH` repo variable), not in `main`. In CI, that branch is checked out into `docs-source/` and its `docs/` folder is moved to the workspace root before the scripts run.

## Commands

```sh
# Run scripts directly (ts-node-script; no compile step needed)
PATHS_TO_UPLOAD="app-io/guide/1.0" npm run generate_doc_structure
PATHS_TO_UPLOAD="app-io/guide/1.0" npm run generate_file

# Full upload: leave both PATHS_TO_UPLOAD and PATHS_TO_DELETE unset
# (fetches canonical path list from the remote URL and rebuilds from scratch)
npm run generate_doc_structure
npm run generate_file

# Delete-only mode
PATHS_TO_DELETE="some/old/path" npm run generate_doc_structure

npm install   # install deps
```

There are no tests (`npm test` always exits non-zero).

## Architecture

All tree and manifest logic lives in `src/docsStructure.ts`. The two entry points are thin orchestrators:

- **`src/generateDocStructure.ts`** — reads `PATHS_TO_UPLOAD`, `PATHS_TO_DELETE` from env and writes/updates `docs-structure.json`.
- **`src/generateCrowdinConfig.ts`** — reads `PATHS_TO_UPLOAD`, `PATHS_TO_DELETE` from env and writes `crowdin.yml`. Also writes a `found_files` output to `$GITHUB_OUTPUT` when running on GitHub Actions.

### `src/docsStructure.ts` key exports

| Export | Role |
|---|---|
| `writeDocsStructureManifest` | Top-level: reads existing manifest, applies merges/deletes/rebuilds, writes JSON. |
| `buildDirectoryNode` | Recursively walks a directory, building a `DocsStructureNode` tree. |
| `mergeManifestWithSelectedPaths` | Inserts or removes nodes from an existing manifest. |
| `collectSelectedMarkdownFiles` | Expands path list to individual `.md` files (skips `.gitbook`). |
| `buildCrowdinFileEntries` | Maps `.md` source paths to Crowdin `source`/`translation` pairs (`docs/%locale%/…`). |
| `fetchDirNamesPaths` | Fetches canonical path list from `DIR_NAMES_URL`. |
| `parseRequestedDocsPaths` | Parses JSON array, CSV, or newline-separated string into `string[]`. |

### `docs-structure.json` schema

Keys are filesystem names (stable across locales); only `label` values are translated. Directory nodes have `directory: true` and a `children` record; file nodes have `directory: false`.

## GitHub Actions

- **`upload_sources_to_crowdin.yml`** — main workflow. Can be triggered manually (`workflow_dispatch`) or called by other workflows (`workflow_call`). Inputs: `paths_to_upload`, `paths_to_delete`. Their presence selects the mode: upload-only (upload set), upload+delete (both set), delete-only (only delete set), or full upload (both empty). Checks out docs from `docs/from-gitbook`, runs both scripts, commits `docs-structure.json` back to that branch using `GH_PAT`, then uploads to Crowdin.
  - **Full-upload optimisation (diff-based).** A full upload (both inputs empty) no longer always re-uploads every doc. A `Plan upload` step reads a marker file `meta/latest-upload-all.json` on `docs/from-gitbook` recording the commit SHA covered by the previous full upload. The current side is the **latest commit that touched `docs/`** (`git log -1 -- docs/`), not HEAD — the workflow's own marker/manifest commits advance HEAD without changing `docs/`, so anchoring on the last docs-touching commit keeps the comparison meaningful. First run (no marker) → complete upload. Otherwise it diffs the stored commit against that docs commit (`fetch-depth: 0` enables this): same commit (nothing touched `docs/`) → job skipped; changed `.md` files under `docs/` (`.gitbook` excluded) are split into `paths_to_upload` (added/modified/renamed-to) and `paths_to_delete` (deleted/renamed-from), with the `docs/` prefix stripped; if a docs commit only touched non-`.md`/`.gitbook` files the diff is empty and the job is skipped. All build/upload steps are gated on `steps.plan.outputs.run_crowdin == 'true'`. After a successful Crowdin upload, the `Update full-upload marker` step (gated on `update_marker == 'true'`, which only ever pairs with a real upload) writes the marker with that docs-commit SHA, an ISO-8601 timestamp, and `github.run_id`, and pushes it to `meta/` on the source branch via `GH_PAT`. The marker SHA only advances when sources were actually uploaded, so it always points at the last docs commit whose content reached Crowdin.
- **`show_edited_folders.yaml`** — posts a PR comment listing modified `docs/` subfolders when PRs target the `traduzioni` branch.
- **`push_on_public_repo.yml`** — placeholder, not yet implemented.

## Important constraints

- `.gitbook` directories are always ignored everywhere.
- Symlinks in `docs/` must resolve within `docs/`; symlinks pointing outside throw an error.
- When both `PATHS_TO_UPLOAD` and `PATHS_TO_DELETE` are empty, `generateDocStructure` rebuilds the manifest from scratch (discards existing content) from the canonical `dirNames` list. Any provided path triggers an incremental update and/or deletion instead.
- The canonical source of truth for which paths exist is `https://static-contents.developer.pagopa.it/it/dirNames.json` (the `dirNames` array).
- `docs-structure.json` is always prepended to the Crowdin files list so translators can translate directory/file labels.
