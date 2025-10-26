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
 *   1. Hace git add . (agrega todos los cambios pendientes)
 *   2. Commitea con el mensaje en convención
 *   3. Ejecuta standard-version (incrementa VERSION, package.json, crea CHANGELOG)
 *   4. Ejecuta sync-version.js via hook precommit (sincroniza openapi.yaml)
 *   5. Hace git push (sube commits y tags a GitHub)
 *
 * Nota: No edita openapi.yaml. Eso lo hace sync-version.js automáticamente
 */

// Importar módulo para ejecutar comandos del sistema
const { execSync } = require("child_process");

// Obtener el mensaje del commit del argumento pasado
// Ejemplo: npm run publish -- "feat(validator): mi función"
// process.argv[2] = "feat(validator): mi función"
const message = process.argv[2];

// Validar que se proporcionó un mensaje
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
  // Paso 1: Agregar todos los cambios al staging
  console.log("Adding files...");
  execSync("git add .", { stdio: "inherit" });

  // Paso 2: Hacer commit con el mensaje proporcionado
  console.log("Committing...");
  execSync(`git commit -m "${message}"`, { stdio: "inherit" });

  // Paso 3: Ejecutar standard-version
  // Esto:
  // - Detecta commits (feat, fix, etc.)
  // - Incrementa versión en VERSION y package.json
  // - Crea/actualiza CHANGELOG.md
  // - Ejecuta sync-version.js como precommit hook
  // - Hace commit automático de cambios
  console.log("Releasing...");
  execSync("npx standard-version", { stdio: "inherit" });

  // Paso 4: Hacer push de commits y tags a GitHub
  console.log("Pushing...");
  execSync("git push && git push --tags", { stdio: "inherit" });

  console.log("✓ Done!");
} catch (error) {
  console.error("✗ Error:", error.message);
  process.exit(1);
}
