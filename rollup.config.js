/* eslint-disable no-console */
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';
import svgr from '@svgr/rollup';
import commonjs from 'rollup-plugin-commonjs';
import fs from 'fs-extra';
import path from 'path';
import pkg from './package.json';

console.info('Prebuild...');
fs.removeSync(path.join(__dirname, './lib/'));
fs.mkdirSync(path.join(__dirname, './lib/'));
fs.copySync(
  path.join(__dirname, './src/styles'),
  path.join(__dirname, './lib/styles')
);
console.info('Done');

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    url(),
    svgr(),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve({ extensions: ['.mjs', '.js', '.json', '.node', '.jsx'] }),
    commonjs()
  ]
};
