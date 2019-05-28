/* eslint-disable no-console */

const path = require('path');
const fs = require('fs-extra');

try {
  console.info('Cleaning ./lib folder...');
  fs.removeSync(path.join(__dirname, './lib/'));
  fs.mkdirSync(path.join(__dirname, './lib/'));
  console.log('Copying Styles...');
  fs.copySync(
    path.join(__dirname, './src/styles'),
    path.join(__dirname, './lib/styles')
  );
  console.info('Prebuild Completed without any errors.');
} catch (exception) {
  console.error('Failed Prebuild.');
  console.error(exception);
  process.exit(1);
}

process.exit(0);
