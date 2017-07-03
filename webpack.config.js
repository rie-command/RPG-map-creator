/**
 * Created by sinires on 18.07.16.
 */
    var path = require('path');
    var webpack = require('webpack');

    var autoprefixer = require('autoprefixer');
    var precss = require('precss');

    module.exports = {
        //указываем какой сорс мап нужен для отладки кода
        devtool: 'eval-source-map',

        entry: {
            tableman: ["./src/index", 'webpack-hot-middleware/client', 'babel-polyfill'],
        },

        //куда генерировать
        output: {
            path: path.join(__dirname, './'),
            filename: '[name].bundle.js',
            publicPath: '/'
        },
        plugins: [
            new webpack.DefinePlugin({
                DEVELOPMENT: true
            }),
            new webpack.HotModuleReplacementPlugin(),
        ],
        module: {
            loaders: [ //добавили babel-loader
                {
                    test: /\.ts$/,
                    loader: 'ts'
                },
                {
                    test: /\.json$/,
                    loader: "json"
                },
                {
                    //все js файлы в src директории будут обрабатываться babel-loader'ом
                    loaders: ['react-hot', 'babel-loader'],
                    include: [
                        path.resolve(__dirname, "src"),
                    ],
                    test: /\.js$/,
                    plugins: ['transform-runtime'],
                },

                {
                    test: /\.less$/,
                    loader: "style!css!less"
                },
                {
                    test: /\.css$/,
                    loader: "style-loader!css-loader!postcss-loader"
                },
                {
                    test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                    loader: 'file-loader',
                },
                {
                    test: /\.(jpe?g|png|gif|svg)$/i,
                    loaders: [
                        'file?hash=sha512&digest=hex&name=[hash].[ext]',
                        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                    ]
                }
            ],
            postcss: function () {
                return [autoprefixer, precss];
            }
        }
    };
