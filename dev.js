const express = require('express')
const devMiddleware = require('webpack-dev-middleware')
const hotMiddleware = require('webpack-hot-middleware')
const lessMiddleware = require('less-middleware')
const webpack = require('webpack')

const config = (() => {
  const defaultConfig = require('./webpack.config.js')

  const entry = Object.assign({}, defaultConfig.entry)

  entry.bundle = [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true'
  ].concat(entry.bundle)

  const output = Object.assign({}, defaultConfig.output, {path: '/'})

  return Object.assign({}, defaultConfig, {
    entry,
    output,
    devtool: 'cheap-inline-source-map',
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"development"'
        }
      })
    ]
  })
})()

const compiler = webpack(config)

console.log('DEV mode')

module.exports = app => {
  app.use('/images', express.static('images'))
  app.use(devMiddleware(compiler, {
    stats: {
      colors: true
    },
    noInfo: true
  }))
  app.use(hotMiddleware(compiler))
  app.use(lessMiddleware('css', {dest: 'public'}))
}
