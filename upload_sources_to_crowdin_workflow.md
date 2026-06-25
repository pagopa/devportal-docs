# `upload_sources_to_crowdin` Workflow

This document explains the [.github/workflows/upload_sources_to_crowdin.yml](.github/workflows/upload_sources_to_crowdin.yml) workflow, the scripts it runs, and how data flows between them.

The workflow uploads Markdown source files from `docs/` (plus a `docs-structure.json` manifest) to Crowdin so translators can work on them. The docs themselves do **not** live in this repository's default branch — they are kept on a separate branch (`docs/from-gitbook`, overridable via the `CHECKOUT_BRANCH` repo variable) that the workflow checks out at runtime.

It supports:

- a **targeted upload** limited to user-selected paths (with optional deletions from the structure manifest);
- a **full upload** that, instead of blindly re-uploading every doc, now uploads only what changed in `docs/` since the previous full upload — a **diff-based optimisation** backed by a marker file. The first ever full upload (no marker yet) still uploads everything.

---

## 1. High-level overview

```mermaid
flowchart TD
    A[Trigger: workflow_dispatch] --> B[Checkout tooling repo]
    B --> C["Checkout docs/from-gitbook into docs-source/<br/>(fetch-depth: 0, full history)"]
    C --> P[Plan upload<br/>decide mode & effective paths]
    P -->|run_crowdin == false| Z[Skip everything — nothing to do]
    P -->|run_crowdin == true| D[Move docs into workspace root]
    D --> E[Setup Node.js + npm ci]
    E --> F[generate_doc_structure<br/>updates docs-structure.json]
    F --> H[generate_file<br/>writes crowdin.yml]
    H --> I["crowdin/github-action<br/>uploads sources"]
    I --> G[Commit docs-structure.json to docs/from-gitbook<br/>if changed]
    G -->|update_marker == true| J[Update full-upload marker<br/>push meta/latest-upload-all.json]
```

The behaviour is driven by the **presence** of the two inputs plus, for full uploads, the **Plan upload** step:

- `paths_to_upload` — optional list of docs-relative paths to add/refresh.
- `paths_to_delete` — optional list of docs-relative paths to remove from the manifest.

Both inputs accept comma-separated, newline-separated, or JSON array values (see [`parseRequestedDocsPaths`](src/docsStructure.ts)). The combination selects the mode:

| `paths_to_upload` | `paths_to_delete` | Mode |
|---|---|---|
| set | empty | Targeted upload of the selected paths. |
| set | set | Targeted upload of the selected paths **and** deletion of the listed nodes. |
| empty | set | Delete only — listed nodes are removed; no `.md` sources are uploaded. |
| empty | empty | **Full upload** — handled by the diff-based optimisation (see §3.2). |

For the three **targeted** rows the workflow behaves as before: the inputs are passed straight to the scripts and the marker file is left untouched.

For the **full upload** row (both inputs empty) the `Plan upload` step decides what actually runs by comparing the current state of `docs/` against the last full upload — see §3.2.

When the scripts do receive empty `PATHS_TO_UPLOAD` and `PATHS_TO_DELETE` (only the very first full upload, or a fallback when the marker is unusable), they fetch the canonical path list from <https://static-contents.developer.pagopa.it/it/dirNames.json> (the `dirNames` array) via `fetchDirNamesPaths` and rebuild `docs-structure.json` from scratch. In every other full-upload run the Plan step has already turned the request into an explicit per-file path list, so the scripts run in incremental mode.

---

## 2. Trigger, inputs, and secrets/variables

```mermaid
flowchart LR
    M[Manual run<br/>workflow_dispatch] --> J[Job: upload-sources-to-crowdin]
    J --> V[(Repo variables:<br/>CHECKOUT_BRANCH<br/>CROWDIN_PROJECT_ID)]
    J --> S[(Secrets:<br/>GH_PAT<br/>CROWDIN_PERSONAL_TOKEN)]
```

- The workflow is triggered manually via `workflow_dispatch`; a maintainer can optionally fill `paths_to_upload` / `paths_to_delete` (leaving both empty triggers the diff-based full upload).
- `permissions: contents: write` plus the `GH_PAT` secret are required because the job commits `docs-structure.json` and the marker file back to the `docs/from-gitbook` branch.
- **Repo variables**: `CHECKOUT_BRANCH` (the docs branch, defaults to `docs/from-gitbook`) and `CROWDIN_PROJECT_ID`.
- **Secrets**: `GH_PAT` (push access to the docs branch), `CROWDIN_PERSONAL_TOKEN`, and the automatic `GITHUB_TOKEN` (used to read the docs branch).
- A workflow-level `env.UPLOAD_ALL_MARKER` (`meta/latest-upload-all.json`) names the marker file path on the docs branch.

---

## 3. Step-by-step breakdown

### 3.1 Checkouts

```yaml
- uses: actions/checkout@de0fac2e4500dabe0009e67214ff5f5447ce83dd
  with:
    persist-credentials: false

- uses: actions/checkout@de0fac2e4500dabe0009e67214ff5f5447ce83dd
  with:
    ref: ${{ vars.CHECKOUT_BRANCH || 'docs/from-gitbook' }}
    path: docs-source
    token: ${{ secrets.GITHUB_TOKEN }}
    persist-credentials: false
    fetch-depth: 0
```

Two checkouts run:

1. The **tooling repo** (the branch that triggered the run) into the workspace root — this provides the TypeScript scripts and `package.json`.
2. The **docs branch** (`docs/from-gitbook`) into `docs-source/`, with `fetch-depth: 0` so the full commit history is available. The history is required so the Plan step can `git diff` the current `docs/` state against the commit recorded by the previous full upload.

The actual `docs/` tree is moved to the workspace root later (§3.3), only when the run is going to upload.

### 3.2 Plan upload (diff-based full-upload optimisation)

```yaml
- name: Plan upload
  id: plan
  env:
    INPUT_PATHS_TO_UPLOAD: ${{ inputs.paths_to_upload || '' }}
    INPUT_PATHS_TO_DELETE: ${{ inputs.paths_to_delete || '' }}
  run: | ...
```

This step computes the **effective** paths and a set of step outputs that gate everything downstream:

- `run_crowdin` — whether the build/upload steps run at all.
- `update_marker` — whether the marker is rewritten after a successful upload (only ever `true` together with `run_crowdin`).
- `paths_to_upload` / `paths_to_delete` — the effective path lists handed to the scripts.
- `initial_sha` — the commit SHA to record in the marker.
- `is_full_upload` — informational.

#### How it decides

```mermaid
flowchart TD
    A[Plan upload] --> B{Explicit inputs<br/>provided?}
    B -- Yes --> T[Targeted run:<br/>pass inputs through<br/>run_crowdin=true, update_marker=false]
    B -- No --> M{Marker file<br/>exists?}
    M -- No --> F[Complete upload:<br/>empty inputs → dirNames rebuild<br/>run_crowdin=true, update_marker=true]
    M -- Yes --> R{PREV_SHA readable<br/>& in history?}
    R -- No --> F2[Fallback complete upload<br/>run_crowdin=true, update_marker=true]
    R -- Yes --> S{PREV_SHA == latest<br/>docs/ commit?}
    S -- Yes --> N1[Nothing to do<br/>run_crowdin=false, update_marker=false]
    S -- No --> DIFF[git diff PREV..DOCS_SHA -- docs/]
    DIFF --> MD{Any .md changes<br/>after filtering?}
    MD -- No --> N2[Nothing to do<br/>run_crowdin=false, update_marker=false]
    MD -- Yes --> U[Incremental upload/delete<br/>run_crowdin=true, update_marker=true]
```

Key points:

- **Anchor on the latest commit that touched `docs/`, not HEAD.** The current side of the comparison is `git log -1 --format=%H -- docs/`, not `git rev-parse HEAD`. The workflow's own commits (manifest + marker) advance HEAD *without* changing `docs/`, so anchoring on the last docs-touching commit keeps the "nothing changed" comparison meaningful across runs. (If `docs/` somehow has no history, it falls back to HEAD.)
- **The marker file** `meta/latest-upload-all.json` (on the docs branch) records the `commit_sha` covered by the previous full upload. Its absence ⇒ first run ⇒ complete upload. A missing/unreadable/no-longer-in-history `commit_sha` ⇒ fallback complete upload.
- **Two distinct "nothing to do" cases**:
  1. `PREV_SHA == DOCS_SHA` — no commit has touched `docs/` since the last full upload.
  2. The diff is non-empty but contains no translatable `.md` changes (e.g. a commit that only changed images or `.gitbook/` files) — those are filtered out.
- **Diff classification** (`git diff --name-status --no-renames PREV_SHA DOCS_SHA -- docs/`):
  - only `.md` files are considered; paths under `.gitbook/` are skipped;
  - the leading `docs/` is stripped from each path;
  - `D` (deleted) → `paths_to_delete`; everything else (`A`/`M`, and — thanks to `--no-renames` — the new side of a rename) → `paths_to_upload`. A rename therefore yields a delete of the old path plus an upload of the new one.
- Deletions **must** be routed to `paths_to_delete`: the upload scripts throw on a non-existent path, so a deleted file passed as an upload would fail the run.

The effective `paths_to_upload` / `paths_to_delete` outputs are written as multi-line values, and consumed as `PATHS_TO_UPLOAD` / `PATHS_TO_DELETE` by the two generation steps.

### 3.3 Move docs into workspace root

```yaml
- name: Move docs into workspace root
  if: steps.plan.outputs.run_crowdin == 'true'
  run: |
    rm -rf docs
    rm -f docs-structure.json
    mv docs-source/docs docs
    if [ -f docs-source/docs-structure.json ]; then mv docs-source/docs-structure.json docs-structure.json; fi
```

Gated on `run_crowdin`. It relocates the docs tree (and any existing manifest) from `docs-source/` to the workspace root, where the scripts expect to find `docs/`. Moving `docs/` out of `docs-source/` leaves its `.git` intact, which is why later commits to that working tree only stage the specific file they add (see §3.8 / §3.9).

All subsequent build/upload steps (Node setup, `npm ci`, both generation steps, and the Crowdin action) carry the same `if: steps.plan.outputs.run_crowdin == 'true'` guard, so a "nothing to do" plan skips the entire pipeline.

### 3.4 Setup Node + install

```yaml
- uses: actions/setup-node@48b55a011bda9f5d6aeb4c2d9c7362e8dae4041e
  with:
    node-version: 24
    cache: 'npm'
- run: npm ci
```

Set up Node.js 24 (pinned by SHA). The `cache: 'npm'` option enables the built-in npm cache keyed on `package-lock.json`. `npm ci` installs the exact dependency tree required by the TypeScript scripts (`ts-node`, `typescript`, `js-yaml`, `@types/*`).

### 3.5 Generate the docs structure manifest

```yaml
- name: Generate docs structure manifest
  if: steps.plan.outputs.run_crowdin == 'true'
  env:
    PATHS_TO_UPLOAD: ${{ steps.plan.outputs.paths_to_upload }}
    PATHS_TO_DELETE: ${{ steps.plan.outputs.paths_to_delete }}
  run: npm run generate_doc_structure
```

Note the env values come from the **Plan step outputs**, not the raw workflow inputs.

`npm run generate_doc_structure` is defined in [package.json](package.json) as:

```text
ts-node-script --project tsconfig.json src/generateDocStructure.ts
```

It runs [src/generateDocStructure.ts](src/generateDocStructure.ts), which:

1. Verifies `docs/` exists.
2. Parses `PATHS_TO_UPLOAD` and `PATHS_TO_DELETE` via [`parseRequestedDocsPaths`](src/docsStructure.ts) (accepts JSON array, CSV, or newline list).
3. If both are empty, calls [`fetchDirNamesPaths`](src/docsStructure.ts) to download the canonical path list from `dirNames.json` and flags the run as a rebuild-from-scratch (`rebuildFromSelectedPaths: true`). Aborts with a non-zero exit code if the payload is malformed or empty. Otherwise it performs an incremental upload and/or deletion of the listed paths.
4. Calls [`writeDocsStructureManifest`](src/docsStructure.ts) with the resolved `selectedPaths`, `pathsToDelete`, and rebuild flag.
5. Logs a summary and exits non-zero on failure.

> In the optimised full-upload path the env vars hold the explicit per-file list produced by the diff, so step 3 takes the incremental branch. The dirNames rebuild only happens for the very first full upload or the unusable-marker fallback.

#### What `writeDocsStructureManifest` does

```mermaid
flowchart TD
    A[writeDocsStructureManifest] --> B{rebuildFromSelectedPaths?}
    B -- Yes --> R[Start from empty root node<br/>tree.docs = empty]
    B -- No --> C[readDocsStructureManifest<br/>load existing JSON]
    R --> D[mergeManifestWithSelectedPaths<br/>using dirNames paths]
    C --> D2[mergeManifestWithSelectedPaths<br/>using effective paths]
    D --> E[insert/update selected nodes<br/>+ delete requested nodes]
    D2 --> E
    E --> G[Build manifest object<br/>version + tree.docs]
    G --> H[Write docs-structure.json]
```

Note: `collectDocsData` (a full rescan of `docs/`) is still exported but is no longer reached by this workflow — the manifest is always driven by an explicit list of paths (the effective paths or the `dirNames` fallback).

Key helpers in [docsStructure.ts](src/docsStructure.ts):

- [`buildDirectoryNode`](src/docsStructure.ts) — recursively walks a directory and produces a node tree where each entry has a human-readable `label` (dashes/underscores turned into spaces) and a `directory` flag. Markdown filenames are added to a flat `mdFiles` list.
- [`fetchDirNamesPaths`](src/docsStructure.ts) — downloads `dirNames.json` and returns the validated `dirNames` array; throws on non-string or empty entries so a malformed payload fails the workflow fast.
- [`readDocsStructureManifest`](src/docsStructure.ts) — loads the existing JSON, falling back to an empty root node when the file is missing or malformed.
- [`mergeManifestWithSelectedPaths`](src/docsStructure.ts) — for each selected path:
  - Normalizes the path, strips a leading `docs/`, rejects empty / ignored (`.gitbook`) entries.
  - Validates the path stays inside `docs/` and points to a `.md` file or a directory.
  - Builds a node from the filesystem ([`createNodeFromSelectedEntry`](src/docsStructure.ts)) and inserts it into the existing tree via [`insertSelectedNode`](src/docsStructure.ts), creating missing intermediate directory nodes on the fly and merging children via [`mergeNodes`](src/docsStructure.ts).
  - For deletions, [`deleteSelectedNode`](src/docsStructure.ts) walks down the tree and removes the targeted child.
- Finally `JSON.stringify(manifest, null, 2)` is written to `docs-structure.json` with a trailing newline.

#### Manifest shape

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

### 3.6 Generate `crowdin.yml`

```yaml
- name: Generate crowdin file
  id: extract_files
  if: steps.plan.outputs.run_crowdin == 'true'
  env:
    PATHS_TO_UPLOAD: ${{ steps.plan.outputs.paths_to_upload }}
    PATHS_TO_DELETE: ${{ steps.plan.outputs.paths_to_delete }}
  run: npm run generate_file
```

On a delete-only run (`paths_to_upload` empty, `paths_to_delete` set) the step still writes `crowdin.yml`, but with no `.md` sources — only the refreshed `docs-structure.json` — so the follow-up Crowdin upload just publishes the updated manifest.

`npm run generate_file` runs [src/generateCrowdinConfig.ts](src/generateCrowdinConfig.ts):

```mermaid
flowchart TD
    A[Start] --> B{PATHS_TO_UPLOAD<br/>provided?}
    B -- Yes --> C[collectSelectedMarkdownFiles<br/>expand dirs to .md leaves]
    B -- No --> U{PATHS_TO_DELETE<br/>provided?}
    U -- Yes --> X[No .md sources<br/>delete-only run]
    U -- No --> N[fetchDirNamesPaths<br/>download dirNames.json]
    N --> C
    C --> E[Compose files list:<br/>docs-structure.json<br/>+ buildCrowdinFileEntries]
    X --> E
    E --> F[yaml.dump → crowdin.yml]
    F --> G{GITHUB_OUTPUT set?}
    G -- Yes --> H[Append found_files=JSON<br/>step output]
    G -- No --> I[Skip output<br/>local run]
```

If `dirNames` is unreachable, malformed, or empty the script aborts with a non-zero exit code, so the Crowdin upload never runs against an undefined source set.

Highlights:

- [`collectSelectedMarkdownFiles`](src/docsStructure.ts) walks each path (effective path or coming from `dirNames`): if it points to a directory it recurses (skipping `.gitbook`), if it points to a `.md` file it just adds it. Paths are normalized so callers can pass `docs/foo/bar.md` or `foo/bar.md` interchangeably.
- [`buildCrowdinFileEntries`](src/docsStructure.ts) maps each source path to a translation path by injecting `%locale%` after `docs/`. The result looks like:

  ```yaml
  - source: docs/soluzioni/asilo-nido/README.md
    translation: docs/%locale%/soluzioni/asilo-nido/README.md
  ```

- An extra entry is prepended unconditionally for the manifest itself:

  ```yaml
  - source: docs-structure.json
    translation: docs/%locale%/_meta/docs-structure.json
  ```

  This is what gives translators access to the readable `label` strings for each folder/file.

- The whole config is serialized with `js-yaml` (`lineWidth: -1` to avoid line wrapping) into [crowdin.yml](crowdin.yml).
- When running on GitHub Actions, the script also appends `found_files=<JSON array>` to `$GITHUB_OUTPUT`, exposing it as `steps.extract_files.outputs.found_files`. Locally that env var is absent and the script just logs an info message.

### 3.7 Upload to Crowdin

```yaml
- name: crowdin action
  if: steps.plan.outputs.run_crowdin == 'true'
  uses: crowdin/github-action@52aa776766211d83d975df51f3b9c53c2f8ba35f
  with:
    upload_sources: true
    upload_translations: false
    download_translations: false
    create_pull_request: false
    base_url: 'https://pagopa.crowdin.com'
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    CROWDIN_PROJECT_ID: ${{ vars.CROWDIN_PROJECT_ID }}
    CROWDIN_PERSONAL_TOKEN: ${{ secrets.CROWDIN_PERSONAL_TOKEN }}
```

The official Crowdin action (pinned by commit SHA) reads the freshly generated `crowdin.yml` and:

- Uploads every file listed under `files:` as a source string set.
- Does **not** upload/download translations or open PRs in this workflow — that responsibility lives in a separate workflow.
- Authenticates against the PagoPA Crowdin instance using `CROWDIN_PROJECT_ID` (a repo variable) and the `CROWDIN_PERSONAL_TOKEN` secret.

### 3.8 Commit the manifest (if changed)

```bash
if [ -n "$(git status --porcelain -- docs-structure.json)" ]; then
  cp docs-structure.json docs-source/docs-structure.json
  cd docs-source
  git config user.name  "devportal-portalsandtools-github-bot"
  git config user.email "180539351+devportal-portalsandtools-github-bot@users.noreply.github.com"
  git config --unset-all http.https://github.com/.extraheader || true
  git remote set-url origin https://x-access-token:${GH_PAT}@github.com/pagopa/devportal-docs.git
  git add docs-structure.json
  if git diff --cached --quiet -- docs-structure.json; then
    echo "docs-structure.json already up to date in docs-source. Nothing to commit."
  else
    git commit -m "chore: update docs structure manifest"
    git push origin HEAD:${{ vars.CHECKOUT_BRANCH || 'docs/from-gitbook' }}
  fi
fi
```

Runs **after** the Crowdin upload, so the manifest is committed only once the sources it describes have actually reached Crowdin. Like the marker step (§3.9), the bare `if:` implicitly requires `success()`, so a failed upload skips the commit and the next run regenerates and re-uploads consistently. The regenerated `docs-structure.json` is copied back into the `docs-source/` checkout and committed/pushed to the **docs branch** (not the tooling repo) using `GH_PAT` and the bot identity. The push only happens when the manifest actually changed, avoiding empty commits. Only `docs-structure.json` is staged, so the moved-away `docs/` working-tree state is not committed.

### 3.9 Update the full-upload marker

```yaml
- name: Update full-upload marker
  if: steps.plan.outputs.update_marker == 'true'
  env:
    GH_PAT: ${{ secrets.GH_PAT }}
    INITIAL_SHA: ${{ steps.plan.outputs.initial_sha }}
    RUN_ID: ${{ github.run_id }}
  run: | ...
```

This step writes `meta/latest-upload-all.json` into the `docs-source/` checkout and pushes it to the docs branch (bot identity + `GH_PAT`, same pattern as §3.8). The marker contains:

```jsonc
{
  "commit_sha": "<latest docs/ commit covered by this upload>",
  "timestamp": "<ISO-8601 UTC>",
  "workflow_run_id": "<github.run_id>"
}
```

Two guard mechanisms combine here:

- A custom `if:` without a status function implicitly requires `success()`, so the step runs **only when every previous step succeeded — the Crowdin upload included**. If the upload fails, the marker is not advanced.
- `update_marker == 'true'` is only ever emitted alongside `run_crowdin == 'true'` (full bootstrap, fallback, or a diff with real `.md` changes). So the marker SHA advances **only after sources were actually uploaded**, and it always points at the last `docs/` commit whose content reached Crowdin. "Nothing to do" and targeted runs never touch it.

---

## 4. End-to-end data flow

```mermaid
sequenceDiagram
    participant U as User (workflow_dispatch)
    participant GA as GitHub Actions runner
    participant PL as Plan step
    participant DS as generateDocStructure.ts
    participant DN as dirNames.json (static bucket)
    participant FS as Filesystem (docs/)
    participant G as docs/from-gitbook branch
    participant CC as generateCrowdinConfig.ts
    participant CR as Crowdin

    U->>GA: Trigger (optionally with paths_to_upload / paths_to_delete)
    GA->>GA: Checkout tooling repo + docs branch (full history)
    GA->>PL: Plan upload
    alt Targeted run (explicit inputs)
        PL-->>GA: pass inputs through, marker untouched
    else Full upload, no/unusable marker
        PL-->>GA: empty paths (dirNames rebuild), update_marker=true
    else Full upload, marker present
        PL->>G: read meta/latest-upload-all.json (PREV_SHA)
        PL->>G: latest docs/ commit (DOCS_SHA)
        alt PREV_SHA == DOCS_SHA or no .md changes
            PL-->>GA: run_crowdin=false → job skips the rest
        else .md changes found
            PL->>G: git diff PREV..DOCS_SHA -- docs/
            PL-->>GA: effective upload/delete paths, update_marker=true
        end
    end
    GA->>DS: npm run generate_doc_structure (effective paths)
    alt empty inputs
        DS->>DN: fetchDirNamesPaths()
        DN-->>DS: dirNames array
    end
    DS->>FS: Write docs-structure.json
    GA->>CC: npm run generate_file (effective paths)
    alt empty inputs
        CC->>DN: fetchDirNamesPaths()
        DN-->>CC: dirNames array
    end
    CC->>FS: Collect .md files reachable from those paths
    CC->>FS: Write crowdin.yml
    GA->>CR: crowdin-action uploads sources from crowdin.yml
    GA->>G: Commit + push manifest (after a successful upload, only if changed)
    GA->>G: Push meta/latest-upload-all.json (only on a successful full upload)
```

---

## 5. Reference

| Concern | Location |
| --- | --- |
| Workflow definition | [.github/workflows/upload_sources_to_crowdin.yml](.github/workflows/upload_sources_to_crowdin.yml) |
| Manifest entry point | [src/generateDocStructure.ts](src/generateDocStructure.ts) |
| Crowdin config entry point | [src/generateCrowdinConfig.ts](src/generateCrowdinConfig.ts) |
| Shared helpers (tree walk, merge, parsing) | [src/docsStructure.ts](src/docsStructure.ts) |
| Generated manifest | `docs-structure.json` (on `docs/from-gitbook`) |
| Full-upload marker | `meta/latest-upload-all.json` (on `docs/from-gitbook`) |
| Generated Crowdin config | `crowdin.yml` |
| npm scripts | [package.json](package.json) |
