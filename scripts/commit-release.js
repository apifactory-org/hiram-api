// scripts/commit-release.js
/**
 * Flujo Opción 1 (dos commits):
 *  1) standard-version crea commit de release + tag
 *  2) Tu commit con sufijo de versión: "… - [vX.Y.Z]"
 *
 * Uso: npm run publish -- "TYPE(scope): descripción"
 */

const fs = require("fs");
const { spawnSync } = require("child_process");

function run(cmd, args = []) {
  const res = spawnSync(cmd, args, { stdio: "inherit", shell: false });
  if (res.status !== 0) {
    throw new Error(`${cmd} ${args.join(" ")} failed with code ${res.status}`);
  }
}

const message = process.argv[2];
if (!message) {
  console.error("Error: Debes proporcionar un mensaje de commit");
  console.error('Uso: npm run publish -- "tu mensaje"');
  process.exit(1);
}

async function main() {
  // 1) Release primero con la API (evita problemas de npx/.cmd)
  let standardVersion;
  try {
    standardVersion = require("standard-version");
  } catch (e) {
    console.error("No se encontró 'standard-version'. Instálalo con:");
    console.error("  npm i -D standard-version");
    process.exit(1);
  }

  console.log("Running standard-version via API...");
  await standardVersion({
    /* puedes pasar opciones aquí si usas .versionrc */
  });

  // 2) Leer versión resultante
  const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
  const version = pkg.version;

  // 3) Tu commit con la versión en el mensaje (solo si hay cambios para comitear)
  run("git", ["add", "."]);
  const diffStatus = spawnSync("git", ["diff", "--cached", "--quiet"]).status;
  const hasStaged = diffStatus !== 0; // 0 = no hay cambios stageados

  if (hasStaged) {
    const fullMsg = `${message} - [v${version}]`;
    console.log(`Committing your changes as: "${fullMsg}"`);
    run("git", ["commit", "-m", fullMsg]);
  } else {
    console.log("No hay cambios para comitear. Saltando commit del usuario.");
  }

  // 4) Push commits y tags
  run("git", ["push"]);
  run("git", ["push", "--tags"]);

  console.log(`✓ Done! Release v${version} creado y commit del usuario añadido.`);
}

main().catch((err) => {
  console.error("✗ Error:", err && err.message ? err.message : err);
  process.exit(1);
});
