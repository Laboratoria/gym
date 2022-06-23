const fs = require('fs');
const packageJson = require('../package.json');

const [,,,action] = process.argv;

const possibleActions = ['--on', '--off'];

if (!action || !possibleActions.includes(action)) {
  throw new Error('no action defined, must be --on or --off');
}

if (action === '--on') {
  packageJson.type = 'module';
} else if (action === '--off') {
  delete packageJson.type;
}

fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2));
