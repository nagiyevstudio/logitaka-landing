#!/bin/bash

# Script to remove macOS artifact files from current directory and subdirectories

echo "🧹 Cleaning up macOS artifacts..."

# Remove all ._* files
find . -name "._*" -type f -delete
echo "✅ Removed ._* files"

# Remove .DS_Store files
find . -name ".DS_Store" -type f -delete
echo "✅ Removed .DS_Store files"

# Remove .AppleDouble directories
find . -name ".AppleDouble" -type d -exec rm -rf {} + 2>/dev/null || true
echo "✅ Removed .AppleDouble directories"

# Remove .LSOverride files
find . -name ".LSOverride" -type f -delete
echo "✅ Removed .LSOverride files"

echo "🎉 Cleanup complete!"
