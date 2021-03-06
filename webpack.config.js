const webpack = require('webpack')
const fs = require('fs')

const defaultBabelConfig = JSON.parse(fs.readFileSync('.babelrc', {encoding: 'utf8'}))

// webpack 2 resolves es2015 imports
const presets = [
  ['es2015', {modules: false}]
].concat(defaultBabelConfig.presets.filter(v => v !== 'es2015'))

const babelConfig = Object.assign({}, defaultBabelConfig, {babelrc: false, presets})

module.exports = {
  entry: {
    bundle: ['babel-polyfill', './src/index.js'],
    worker: ['./src/worker/index.js']
  },
  output: {
    path: './public',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: babelConfig
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({sourceMap: true})
  ]
}
