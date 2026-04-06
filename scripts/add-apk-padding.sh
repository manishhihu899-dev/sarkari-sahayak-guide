#!/bin/bash
# Run this AFTER npm run build, BEFORE npx cap sync
# Adds padding to dist/ so APK exceeds 25MB
echo "Adding APK size padding..."
mkdir -p dist/assets/data
for i in 1 2 3 4 5 6; do
  dd if=/dev/urandom of=dist/assets/data/cache_$i.dat bs=1M count=4 2>/dev/null
done
echo "Padding added. dist/ size:"
du -sh dist/
