# ita_documentation

## Translation manifest

Before uploading sources to Crowdin, the workflow now generates a `docs-structure.json` manifest.

The manifest is meant to be translated together with the markdown sources and later consumed by the downstream repository to rename translated directories and files.

### Schema

The schema keeps the source folder and file names in object keys so they remain stable across locales. Only the `label` values are meant to be translated.

Directory nodes expose:

- `label`: the source name to translate.
- `directory`: `true`.
- `children`: nested directory and file entries.

File nodes expose:

- `label`: the source basename to translate.
- `directory`: `false`.

### Scripts

- `npm run generate_doc_structure`: generates `docs-structure.json`.
- `npm run generate_file`: regenerates `crowdin.yml`, including the manifest upload entry.

### Workflow dispatch input

When manually running `.github/workflows/upload_sources_to_crowdin.yml`, you can optionally set `paths_to_upload` to limit the uploaded markdown files.

- Paths are resolved from `docs/` by default, so `app-io/manuale-gruppi-io/1.0` expands to every `.md` file under `docs/app-io/manuale-gruppi-io/1.0`.
- Explicit markdown files are still supported, with or without the `docs/` prefix.
- Provide one path per line or a comma-separated list.
- `.gitbook` directories are ignored.
