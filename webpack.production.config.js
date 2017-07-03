/**
 * Created by nfedorov on 29.03.17.
 */

var config = require('./webpack.config'),
    webpack = require('webpack'),
    path = require('path');

// config.output.filename = 'tableman.min.js';
config.output = {
    path: path.join(__dirname, './dist'),
        filename: '[name].bundle.js',
        publicPath: '/users/'
};
config.plugins[0] = new webpack.DefinePlugin({
    DEVELOPMENT: false
});
// config.plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true}));
config.entry.tableman = ["./src/index", 'babel-polyfill'];

module.exports = config;
