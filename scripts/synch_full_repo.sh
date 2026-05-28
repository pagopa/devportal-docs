#!/bin/bash
set -e

# --- Configuration ---
# Replace this URL with the actual endpoint
JSON_URL="https://static-contents.developer.pagopa.it/it/dirNames.json"

# Base paths (ensure the script is run from the repository root, or update the paths accordingly)
PRIVATE_DOCS_DIR="./private_repo/docs"
PUBLIC_DOCS_DIR="./public_repo/docs"

echo "Downloading JSON file from $JSON_URL..."
JSON_CONTENT=$(curl -s "$JSON_URL")

echo "Extracting the path list..."
# Extracts strings between quotes, ignores the "dirNames" key, and removes the quotes
PATHS=$(echo "$JSON_CONTENT" | grep -o '"[^"]*"' | grep -v '"dirNames"' | tr -d '"')

echo "Cleaning up the directory $PUBLIC_DOCS_DIR..."
# Create the directory if it doesn't exist, otherwise empty its contents without deleting the root folder
mkdir -p "$PUBLIC_DOCS_DIR"
rm -rf "${PUBLIC_DOCS_DIR:?}/"*

echo "Starting file copy..."
for PATH_NAME in $PATHS; do
    SRC_DIR="$PRIVATE_DOCS_DIR/$PATH_NAME"
    DEST_DIR="$PUBLIC_DOCS_DIR/$PATH_NAME"

    # Check if the directory in the private repo actually exists
    if [ -d "$SRC_DIR" ]; then
        # Create the destination directory structure
        mkdir -p "$DEST_DIR"

        # Copy all contents recursively (preserving permissions)
        cp -a "$SRC_DIR/." "$DEST_DIR/"

        echo "Copied: $PATH_NAME"
    else
        echo "Warning: Directory $SRC_DIR does not exist. Skipping..."
    fi
done

echo "Operation completed successfully!"