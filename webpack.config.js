var path = require('path');
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, "dist/"),
        filename: 'app.js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
}