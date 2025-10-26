// scripts/sync-version.js
const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

const versionFile = path.join(__dirname, "../VERSION");
const packageFile = path.join(__dirname, "../package.json");
const openapiFile = path.join(__dirname, "../specs/openapi.yaml");

// Leer VERSION
const version = fs.readFileSync(versionFile, "utf8").trim();

// Actualizar openapi.yaml
try {
  const doc = yaml.load(fs.readFileSync(openapiFile, "utf8"));
  doc.info.version = version;
  fs.writeFileSync(openapiFile, yaml.dump(doc));
  console.log(`✓ openapi.yaml synced: ${version}`);
} catch (error) {
  console.error(`✗ Error updating openapi.yaml:`, error.message);
}

console.log(`✓ All versions synced: ${version}`);
