/**
 * courtesy of @fabiospampinato
 * via:https://github.com/notable/notable/blob/master/scripts/build/hook_after_pack.js
 */

/* IMPORT */

const fixLinuxSandbox = require("./fix_linux_sandbox")

/* AFTER PACK */

async function afterPack({ targets, appOutDir }) {
  await fixLinuxSandbox(targets, appOutDir)
}

/* EXPORT */

module.exports = afterPack
