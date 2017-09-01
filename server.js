'use strict'

const path = require('path')
const express = require('express')
const compression = require('compression')
const isDeveloping = process.env.NODE_ENV !== 'production'
const port = isDeveloping ? 3000 : process.env.PORT

var webpack = require('webpack')
var webpackDevServer = require('webpack-dev-server')
var webpackConfig = require('./webpack.dev.conf')

var compiler = webpack(webpackConfig)

var server = new webpackDevServer(compiler, {
  clientLogLevel: "none",
  contentBase: __dirname,
  publicPath: "http://localhost:" + port,
  historyApiFallback: true,
  noInfo: true,
  port: port,
  watchContentBase: true
})

server.listen(port, "127.0.0.1", function () {
  console.log(`Project is running at http://localhost:${port}`)
})

// const app = express()

// app.use(compression())

// app.use(express.static(__dirname))
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, './index.html'))
// })

// app.listen(port, '0.0.0.0', (err) => {
//   if (err) {
//     console.log(err)
//   }
//   console.info(`Listening on port ${port}`)
// })