const path = require('path');
const alias = require('../alias');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          require.resolve('sass-loader')
        ],
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, '../'),
        use: [
          {
            loader: 'style-loader'
          }, 
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoader: 1,
              modules: false,
              localIdentName: '[name]_[local]__[hash:base64:5]'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg|png)$/,
        use: 'url-loader'
      }
    ]
  },
  resolve: {
    alias
  }
}
