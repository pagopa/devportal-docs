#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Fetch inputs (accepts environment variables or positional parameters)
PATHS_TO_ADD="${1:-$PATHS_TO_ADD}"
PATHS_TO_REMOVE="${2:-$PATHS_TO_REMOVE}"

# File to store the list of copied files
MODIFIED_FILES_LIST="MODIFIED_FILES_LIST.txt"
: > "$MODIFIED_FILES_LIST" # Empty or create the file on startup

validate_path() {
    local p="$1"
    # Reject traversal (..), home directory (~), double slashes (//), and absolute paths (leading /)
    if [[ "$p" == *".."* ]] || [[ "$p" == *"~"* ]] || [[ "$p" == *"//"* ]] || [[ "$p" == /* ]]; then
        echo "   [ERROR] Security violation. Unsafe path detected: '$p'."
        echo "   Paths cannot contain '..', '~', '//', or start with '/'."
        exit 1 # Abort the entire script to prevent accidental deletions
    fi
}

# Set internal field separator to comma (,) to split inputs into arrays
IFS=',' read -r -a add_array <<< "$PATHS_TO_ADD"
IFS=',' read -r -a remove_array <<< "$PATHS_TO_REMOVE"

echo "=== Processing paths to ADD (paths_to_add) ==="
for path in "${add_array[@]}"; do
    # Remove leading/trailing whitespaces (trim)
    path=$(echo "$path" | xargs)

    # Skip iteration if the path is empty
    if [[ -z "$path" ]]; then continue; fi

    validate_path "$path"

    # Strip leading './' or '/' if present
    path="${path#./}"
    path="${path#/}"

    # Handle 'docs' prefix safely
    if [[ "$path" == "docs" || "$path" == "docs/" ]]; then
        path="docs"
    elif [[ "$path" != docs/* ]]; then
        path="docs/$path"
    fi

    echo "-> Handling path: $path"

    # 1. Search inside public_repo; if found, delete recursively
    if [[ -e "public_repo/$path" ]]; then
        echo "   Found in public_repo. Deleting..."
        rm -rf "public_repo/$path"
    fi

    # 2. Search inside private_repo, explore recursively and copy files
    if [[ -e "private_repo/$path" ]]; then
        echo "   Found in private_repo. Copying files..."

        # Enter private_repo so 'find' returns easy-to-use relative paths
        (
            cd private_repo || exit 1
            # Find only files (-type f) to exactly recreate the folder structure
            find "$path" -type f | while read -r file; do

                # Create the destination folder structure in public_repo
                mkdir -p "../public_repo/$(dirname "$file")"

                # Copy the single file
                cp "$file" "../public_repo/$file"

                # Register the file in the list (saving the relative path)
                echo "$file" >> "../$MODIFIED_FILES_LIST"
            done
        )
    else
        echo "   Warning: Path '$path' does not exist in private_repo."
    fi
done

echo ""
echo "=== Processing paths to REMOVE (paths_to_remove) ==="
for path in "${remove_array[@]}"; do
    path=$(echo "$path" | xargs)
    if [[ -z "$path" ]]; then continue; fi
    validate_path "$path"
    if [[ "$path" != docs/* ]]; then
      path="docs/$path"
    fi
    echo "-> Handling path: $path"
    if [[ -e "public_repo/$path" ]]; then
        echo "   Deleting $path from public_repo..."
        find "public_repo/$path" -type f | sed 's|^public_repo/||' >> "$MODIFIED_FILES_LIST"
        rm -rf "public_repo/$path"
    else
         echo "   Path '$path' is not present in public_repo (nothing to do)."
    fi
done

echo ""
echo "=== Operation Completed. List of copied files: ==="
if [[ -s "$MODIFIED_FILES_LIST" ]]; then
    cat "$MODIFIED_FILES_LIST"
else
    echo "No files modified."
fi

# Write the multiline output for GitHub Actions
if [[ -n "$GITHUB_OUTPUT" ]]; then
    echo "Setting GitHub Actions output 'modified_files'..."
    # Using the EOF syntax to safely pass multiline strings to GITHUB_OUTPUT
    echo "modified_files<<EOF" >> "$GITHUB_OUTPUT"
    cat "$MODIFIED_FILES_LIST" >> "$GITHUB_OUTPUT"
    echo "EOF" >> "$GITHUB_OUTPUT"
fi
