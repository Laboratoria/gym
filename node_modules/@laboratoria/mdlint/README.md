# @laboratoria/mdlint

CLI tool to lint your **markdown** files using the
[markdownlint](https://github.com/DavidAnson/markdownlint) module.

[![Node.js CI](https://github.com/Laboratoria/mdlint/actions/workflows/nodejs.yml/badge.svg)](https://github.com/Laboratoria/mdlint/actions/workflows/nodejs.yml)

## Installation

Globally:

```sh
npm i -g @laboratoria/mdlint
```

In your project:

```sh
npm i --save-dev @laboratoria/mdlint
```

Once you have installed it in your project you can add a task in your
`package.json` to run the linter:

```json
{
  "name": "your-package",
  "version": "0.0.0",
  "scripts": {
    "lint": "mdlint ."
  },
  "devDependencies": {
    "@laboratoria/mdlint": "^1.0.2"
  }
}
```

This will allow you to run the linter like this:

```sh
npm run lint
```

## Usage

```sh
$ mdlint --help
Usage:

  mdlint [path1] [path2] ...

Options:

  -c, --config   Path to config file. Default: '.mdlintrc'
  -i, --ignore   Path to file with patterns to ignore. Default: '.mdlintignore'
  -v, --verbose  Show verbose output.
  -h, --help     Show this help.
  -V, --version  Show mdlint version.

Laboratoria 2017
```

## Configuration

## `.mdlintrc`

```json
{
  "default": true,
  "ul-style": { "style": "sublist" },
  "no-duplicate-header": false
}
```

## `.mdlintignore`

```txt
node_modules/
bower_components/
```
