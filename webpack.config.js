// {
//     module: {
//       rules: [
//         { test: /\.hbs$/, exclude: /node_modules/, use: "handlebars-loader" }
//       ]
//     }
//   }

  const path = require('path');

module.exports = {
    entry: './javascripts/index.js',
    output: {
    filename: 'mybundle.js',
    path: path.resolve(__dirname),
  }
};