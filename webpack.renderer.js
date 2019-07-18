/**
 * courtesy of @fabiospampinato
 * via:https://github.com/notable/notable/blob/master/webpack.renderer.js
 */

/* IMPORT */

const base = require("./webpack.base")

/* CONFIG */

const config = base({ target: "renderer" })

/* EXPORT */

module.exports = config
