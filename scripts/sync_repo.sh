#!/bin/bash

set -e

PATHS_TO_ADD="${1:-$PATHS_TO_ADD}"
PATHS_TO_REMOVE="${2:-$PATHS_TO_REMOVE}"

validate_path() {
    local p="$1"
    if [[ "$p" == *".."* ]] || [[ "$p" == *"~"* ]] || [[ "$p" == *"//"* ]] || [[ "$p" == /* ]]; then
        echo "   [ERROR] Security violation. Unsafe path detected: '$p'."
        echo "   Paths cannot contain '..', '~', '//', or start with '/'."
        exit 1
    fi
}

IFS=',' read -r -a add_array <<< "$PATHS_TO_ADD"
IFS=',' read -r -a remove_array <<< "$PATHS_TO_REMOVE"

echo "=== Processing paths to ADD ==="
for path in "${add_array[@]}"; do
    path=$(echo "$path" | xargs)
    if [[ -z "$path" ]]; then continue; fi
    validate_path "$path"

    path="${path#./}"
    path="${path#/}"

    if [[ "$path" == "docs" || "$path" == "docs/" ]]; then
        path="docs"
    elif [[ "$path" != docs/* ]]; then
        path="docs/$path"
    fi

    # Path in target_repo has no docs/ prefix
    if [[ "$path" == "docs" ]]; then
        target_path="."
    else
        target_path="${path#docs/}"
    fi

    echo "-> Handling path: $path (target_repo: $target_path)"

    if [[ -e "target_repo/$target_path" ]]; then
        echo "   Found in target_repo. Deleting..."
        rm -rf "target_repo/$target_path"
    fi

    if [[ -e "private_repo/$path" ]]; then
        echo "   Found in private_repo. Copying..."
        mkdir -p "target_repo/$(dirname "$target_path")"
        cp -r "private_repo/$path" "target_repo/$target_path"
    else
        echo "   Warning: Path '$path' does not exist in private_repo."
    fi
done

echo ""
echo "=== Processing paths to REMOVE ==="
for path in "${remove_array[@]}"; do
    path=$(echo "$path" | xargs)
    if [[ -z "$path" ]]; then continue; fi
    validate_path "$path"

    path="${path#./}"
    path="${path#/}"

    if [[ "$path" == "docs" || "$path" == "docs/" ]]; then
        path="docs"
    elif [[ "$path" != docs/* ]]; then
        path="docs/$path"
    fi

    if [[ "$path" == "docs" ]]; then
        target_path="."
    else
        target_path="${path#docs/}"
    fi

    echo "-> Handling path: $path (target_repo: $target_path)"
    if [[ -e "target_repo/$target_path" ]]; then
        echo "   Deleting $target_path from target_repo..."
        rm -rf "target_repo/$target_path"
    else
        echo "   Path '$target_path' is not present in target_repo (nothing to do)."
    fi
done

echo ""
echo "=== Operation Completed ==="