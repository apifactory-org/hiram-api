// scripts/commit-release.js
/**
 * Flujo con 2 commits:
 *  1) Tu commit (feat/fix/docs...)
 *  2) Commit de release automático de standard-version + tag
 *
 * Uso: npm run publish -- "TYPE(scope): descripción"
 */

const { spawnSync } = require("child_process");

function run(cmd, args = []) {
  const res = spawnSync(cmd, args, { stdio: "inherit", shell: false });
  if (res.status !== 0) {
    const msg = `${cmd} ${args.join(" ")} failed with code ${res.status}`;
    throw new Error(msg);
  }
}

const message = process.argv[2];
if (!message) {
  console.error("Error: Debes proporcionar un mensaje de commit");
  console.error('Uso: npm run publish -- "tu mensaje"');
  process.exit(1);
}

try {
  // 1) add y commit de TU cambio (solo si hay algo para comitear)
  console.log("Adding files...");
  run("git", ["add", "."]);

  // ¿Hay algo staged?
  const diffCheck = spawnSync("git", ["diff", "--cached", "--quiet"], { shell: false });
  const hasStagedChanges = diffCheck.status !== 0; // status 0 = sin cambios

  if (hasStagedChanges) {
    console.log("Committing your changes...");
    run("git", ["commit", "-m", message]);
  } else {
    console.log("No hay cambios para comitear. Saltando commit del usuario.");
  }

  // 2) standard-version hace SU commit de release + tag
  console.log("Running standard-version (release commit + tag)...");
  run("npx", ["standard-version"]);

  // 3) push de commits y tags
  console.log("Pushing commits and tags...");
  run("git", ["push"]);
  run("git", ["push", "--tags"]);

  console.log("✓ Done! (dos commits: tu cambio y chore(release))");
} catch (err) {
  console.error("✗ Error:", err.message || err);
  process.exit(1);
}
