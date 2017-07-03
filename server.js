/**
 * Created by sinires on 18.07.16.
 */
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')

//вызывает обновления модулей приложения
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config.js')

var app = new (require('express'))();
var port = 3000;
var serveStatic = require('serve-static');
const path = require('path');

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));
app.use("/public", serveStatic(path.join(__dirname, '/img')));

app.get("/map", function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.listen(port, function (error) {
    if (error) {
        console.error(error)
    } else {
        console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
    }
})