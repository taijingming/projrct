const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'index.js',
        path: resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    // [css-loader](/loaders/css-loader)
                    {
                      loader: 'css-loader',
                      options: {
                        modules: true
                      }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
              }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin()
    ],

    mode: 'development',

    // 开发服务器
    devServer: {
        contentBase: resolve(__dirname, 'dist'),
        compress: true, // 启动gzip压缩
        port: 3000,
        open: true
    }
}