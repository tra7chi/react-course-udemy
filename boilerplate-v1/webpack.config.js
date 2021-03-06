/**
 * task 1: specify entry point
 * task 2: specify output file
 */

const path = require('path');

// the way to expose something
module.exports = {    
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
            test: /\.s?css$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, "public")
      }
};

// entry: './src/components/IndecisionApp.js',