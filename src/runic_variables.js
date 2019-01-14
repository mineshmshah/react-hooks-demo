// Exports all runic variables NOT camelcased.
// E.g. $runic-dark-0 is import as runic-dark-0
export default require('sass-extract-loader?{"plugins": [{plugin: "sass-extract-js", options: {camelCase: false} }]}!runic/style/runic.main.scss'); // eslint-disable-line
