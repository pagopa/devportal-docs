#!/bin/bash
set -e

JSON_URL="https://static-contents.developer.pagopa.it/it/dirNames.json"

echo "Downloading path list from $JSON_URL..."
PATHS=$(curl -s "$JSON_URL" | grep -o '"[^"]*"' | grep -v '"dirNames"' | tr -d '"')

echo "Syncing directories..."
for PATH_NAME in $PATHS; do
    SRC="./source_repo/docs/$PATH_NAME"
    DEST="./target_repo/$PATH_NAME"

    if [ -d "$SRC" ]; then
        rm -rf "$DEST"
        cp -r "$SRC" "$DEST"
        echo "Synced: $PATH_NAME"
    else
        echo "Warning: $SRC does not exist. Skipping..."
    fi
done

echo ""
echo "=== Operation Completed ==="
