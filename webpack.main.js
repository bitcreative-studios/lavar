/**
 * courtesy of @fabiospampinato
 * via:https://github.com/notable/notable/blob/master/webpack.main.js
 */

/* IMPORT */

const base = require("./webpack.base")

/* CONFIG */

const config = base({ target: "main" })

/* EXPORT */

module.exports = config
