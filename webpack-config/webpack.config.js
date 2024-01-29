const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

module.exports = {
    mode: "development", //Define o mode, development ou production;
    entry: "./src/principal.js", //Define o arquivo de entrada.
    output: { //Define o output de saida aonde sera armazenado os arquivos compilados.
        filename: "principal.js",
        path: __dirname + "/public",
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    module: { //Configra os loader de arquivos, css, scss, img etc.
        rules: [
            {
                test: /\.s?[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader', //interpreta @import, url() e mais.
                    'sass-loader',  
                ]
            }
        ],
    },
}