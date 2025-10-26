// scripts/commit-release.js
/**
 * Script para hacer commit, release y push automático
 *
 * Uso: npm run publish -- "TYPE(scope): descripción"
 *
 * Ejemplos:
 *   npm run publish -- "feat(validator): agregar validación de tipos"
 *   npm run publish -- "fix(parser): corregir error en parsing YAML"
 *   npm run publish -- "docs(readme): actualizar instrucciones"
 *
 * Automáticamente:
 *   1. Hace git add .
 *   2. Commitea con el mensaje
 *   3. Ejecuta standard-version (incrementa versión, crea CHANGELOG)
 *   4. Hace git push (commits y tags)
 */

const { execSync } = require("child_process");

const message = process.argv[2];

if (!message) {
  console.error("Error: Debes proporcionar un mensaje de commit");
  console.error('Uso: npm run publish -- "tu mensaje"');
  console.error("");
  console.error("Ejemplos:");
  console.error('  npm run publish -- "feat(validator): nueva funcionalidad"');
  console.error('  npm run publish -- "fix(parser): arreglar bug"');
  console.error('  npm run publish -- "docs(api): actualizar documentación"');
  process.exit(1);
}

try {
  console.log("Adding files...");
  execSync("git add .", { stdio: "inherit" });

  console.log("Committing...");
  execSync(`git commit -m "${message}"`, { stdio: "inherit" });

  console.log("Releasing...");
  execSync("npx standard-version", { stdio: "inherit" });

  console.log("Pushing...");
  execSync("git push && git push --tags", { stdio: "inherit" });

  console.log("✓ Done!");
} catch (error) {
  console.error("✗ Error:", error.message);
  process.exit(1);
}
