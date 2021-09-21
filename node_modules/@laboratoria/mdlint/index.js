#! /usr/bin/env node


const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const minimist = require('minimist');
const glob = require('glob');
const chalk = require('chalk');
const markdownlint = require('markdownlint');
const pkg = require('./package.json');


const resolvePaths = paths => paths
  .map(p => path.resolve(p))
  .reduce(
    (memo, p) => {
      const parent = memo.find(item => p.indexOf(item) === 0);
      const children = memo.filter(item => item.indexOf(p) === 0);
      if (parent) {
        return memo;
      }
      if (children) {
        return [...memo, p].filter(item => !children.includes(item));
      }
      return [...memo, p];
    },
    [],
  );


const readConfig = file => promisify(markdownlint.readConfig)(file)
  .catch(() => ({ default: true }));


const readIgnore = file => promisify(fs.exists)(file)
  .then(exists => (
    !exists
      ? []
      : promisify(fs.readFile)(file, 'utf8')
        .then(data => data.trim().split('\n'))
        .catch(() => [])
  ));


const hasKnownExtension = fname => [
  'markdown',
  'mdown',
  'mkdn',
  'mkd',
  'md',
].indexOf(fname.split('.').pop()) >= 0;


const readFiles = (paths, opts) => Promise.all(
  paths.map(p => promisify(fs.stat)(p).then(stats => (
    stats.isDirectory()
      ? promisify(glob)(path.join(p, '**', '**'), {
        ignore: opts.ignore.map(i => path.join(p, i, '**')),
      })
      : p
  ))),
)
  .then(results => results.reduce(
    (memo, item) => memo.concat(item),
    [],
  ))
  .then(files => files.filter(hasKnownExtension));


const sortResults = (a, b) => (
  (a.lineNumber > b.lineNumber && 1)
  || (a.lineNumber < b.lineNumber && -1)
  || 0
);


const printResults = (results, verbose) => {
  const rulesUrl = 'https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md';
  const stats = { files: 0, total: 0 };
  Object.keys(results).forEach((key) => {
    if (!results[key].length) {
      return;
    }
    stats.files += 1;
    console.log(chalk.underline(key));
    results[key].sort(sortResults).forEach((result) => {
      stats.total += 1;
      stats[result.ruleAlias] = (stats[result.ruleAlias] + 1) || 1;
      console.log([
        chalk.grey(`  ${result.lineNumber}`),
        (result.errorRange && chalk.grey(`:${result.errorRange[0]}`)) || '',
        chalk.yellow(` ${result.ruleNames[1]} [${result.ruleNames[0]}]`),
        chalk.bold.blue(` ${result.ruleDescription}`),
        result.errorDetail ? ` [${result.errorDetail}]` : '',
        result.errorContext ? chalk.italic(` "${result.errorContext}"`) : '',
        (verbose && chalk.dim(` ${rulesUrl}#${result.ruleNames[0].toLowerCase()}`)),
      ].join(''));
    });
  });
  console.log('\nSummary:');
  console.log(`${stats.total} issues in ${stats.files} file(s)`);
  Object.keys(stats)
    .filter(k => ['total', 'files'].indexOf(k) < 0)
    .forEach(k => console.log(` - ${chalk.yellow(k)} ${stats[k]}`));

  process.exit(stats.total ? 1 : 0);
};


const printError = (err) => {
  console.error(err);
  process.exit(1);
};


const help = () => console.log(`Usage:

  mdlint [path1] [path2] ...

Options:

  -c, --config   Path to config file. Default: '.mdlintrc'
  -i, --ignore   Path to file with patterns to ignore. Default: '.mdlintignore'
  -v, --verbose  Show verbose output.
  -h, --help     Show this help.
  -V, --version  Show ${pkg.name} version.

${pkg.author.name} ${(new Date()).getFullYear()}`);


module.exports = (paths, opts = {}) => readFiles(resolvePaths(paths), opts)
  .then(files => promisify(markdownlint)({ files, config: opts.config }));


if (require.main === module) {
  const { _: paths, ...opts } = minimist(process.argv.slice(2));

  if (opts.V || opts.version) {
    console.log(pkg.version);
    process.exit(0);
  }

  if (!paths.length || opts.h || opts.help) {
    help();
    process.exit(0);
  }

  Promise.all([
    readConfig(opts.c || opts.config || '.mdlintrc'),
    readIgnore(opts.i || opts.ignore || '.mdlintignore'),
  ])
    .then(([config, ignore]) => module.exports(paths, { config, ignore }))
    .then(printResults)
    .catch(printError);
}
