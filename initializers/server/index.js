/* eslint-disable */

var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');

var config = require('../../webpack.config.js');

var host = 'localhost',
    port = 3000;

new webpackDevServer(webpack(config), {
  hot: true,
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
}).listen(port, host, (err) => {
  //err ? console.log(err) : console.log('Listening at ', host, ' on port ', port);
  if (err) {
    console.log(err);
  }
  console.log('Listening on port:', port);
});
