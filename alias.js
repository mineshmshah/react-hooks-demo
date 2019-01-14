const path = require('path');

const app = path.join(__dirname, '.', 'src/appRouter');
const UI = path.join(__dirname, '.', 'src/UI');
const runicVariables = path.join(__dirname, '.', 'src/runic_variables');
const store = path.join(__dirname, '.', 'src/store');
const api = path.join(__dirname, '.', 'src/api');
const validations = path.join(__dirname, '.', 'src/validations');

module.exports = {
  '@app': app,
  '@UI': UI,
  '@runic_variables': runicVariables,
  '@store': store,
  '@api': api,
  '@validations': validations,
  'styled-components': path.resolve('./node_modules/styled-components'),
  'react': path.resolve('./node_modules/react'),
  'react-dom': path.resolve('./node_modules/react-dom'),
  'mobx': path.resolve('./node_modules/mobx'),
  'mobx-react': path.resolve('./node_modules/mobx-react')
};
