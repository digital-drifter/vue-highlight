const semVer = require('semver')
const pkg = require('../package.json')

const ver = semVer.coerce(pkg.version)

const next = semVer.minor(ver)

console.log(next)
