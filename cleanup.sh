#!/bin/bash

echo "Cleaning up repository..."

# Remove build artifacts from root
echo "Removing build artifacts from root directory..."
rm -f *.js *.js.map *.css *.css.map
rm -f webpack-* chunk-map.json
rm -f component-* app-* framework-* polyfill-*
rm -f a9a7754c-* cb1608f2-* styles-*

# Remove duplicate docs directory (since we have the source now)
echo "Removing duplicate docs directory..."
rm -rf docs/

# Remove old HTML files (we have React components now)
echo "Removing old HTML files..."
rm -f help.html

# Keep the original style.css as backup
echo "Keeping original style.css as backup..."
mv style.css style.css.backup

echo "Repository cleaned up!"
echo ""
echo "Next steps:"
echo "1. Run 'npm install' to install dependencies"
echo "2. Run 'npm run develop' to start development server"
echo "3. Run 'npm run build' to build for production" 