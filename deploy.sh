#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

rm -rf docs/

cp -R dist/. docs/
