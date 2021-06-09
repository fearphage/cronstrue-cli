#!/usr/bin/env node

const cronstrue = require('cronstrue');
const { docopt } = require('docopt');

const pkg = require('./package.json');

const usage = `
Usage: cronstrue [options] <expression>

Options:
  -l --locale LANG     locale [default: en]
  -m --military        Use 24-hour time (default: false)
  -v --verbose         verbose (default: false)
  -z --zero            dayOfWeekStartIndexZero (default: false based on locale)
`;

const args = docopt(usage, {
  argv: process.argv.slice(2),
  version: `cronstrue-cli v${pkg.version}`,
});

console.log(cronstrue.toString(args['<expression>'], args));
