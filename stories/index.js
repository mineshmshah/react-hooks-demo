import 'regenerator-runtime/runtime';

/**
Use require.context (Webpack) to
search subdirectories for absolute paths.

require.context returns a require function,
and contains a keys property with a
value of an array of string paths to the files

Each string path can be required with the returned
function
**/

const req = require.context('./', true, /index\.js$/);

export default req.keys().forEach(req);
