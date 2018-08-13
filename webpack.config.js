const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

module.exports = {
    entry: ["./src/index.js", "./src/style.sass"],
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js'
    },
    watch: true,
    mode: "development",
    devtool: "source-map",
    module: {
        rules: [
            {   //babel, used to translate from ES6
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["react"]
                    }
                }
            },
            {   //autoprefixing css, and extracting it to bundle.css
                test: /\.(sass|css)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins: function () {
                                    return [
                                        require("autoprefixer")
                                    ];
                                }
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
            {   //url-loader, used to load fonts in css
                test: /\.(woff|woff2|eot|ttf)$/, 
                loader: 'url-loader?limit=100000' 
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                  'file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      bypassOnDebug: true, // webpack@1.x
                      disable: true, // webpack@2.x and newer
                    },
                  },
                ],
              }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "bundle.css"
        }),
    ]
}