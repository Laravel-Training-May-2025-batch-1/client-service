#!/bin/sh

# Ensure script uses Unix line endings
dos2unix /usr/local/bin/entrypoint.sh 2>/dev/null || true

# Check if node_modules is empty, and install dependencies if necessary
if [ ! -d "node_modules" ] || [ -z "$(ls -A node_modules)" ]; then
  echo "Installing dependencies..."
  npm install
fi

# Start the Vite development server
exec npm run dev