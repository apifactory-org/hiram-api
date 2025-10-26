const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

const versionFile = path.join(__dirname, "../VERSION");
const packageFile = path.join(__dirname, "../package.json");
const openapiFile = path.join(__dirname, "../specs/openapi.yaml");

const version = fs.readFileSync(versionFile, "utf8").trim();

// Actualizar package.json
const pkg = JSON.parse(fs.readFileSync(packageFile, "utf8"));
pkg.version = version;
fs.writeFileSync(packageFile, JSON.stringify(pkg, null, 2) + "\n");

// Actualizar openapi.yaml (SEGURO)
const doc = yaml.load(fs.readFileSync(openapiFile, "utf8"));
doc.info.version = version;
fs.writeFileSync(openapiFile, yaml.dump(doc));

console.log(`✓ All versions synced: ${version}`);
