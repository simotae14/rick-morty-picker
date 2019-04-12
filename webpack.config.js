const path = require('path');
const rules = [
    {
        test: /\.tsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader'
    },
    {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
    }
];

module.exports = {
    target: 'web', // the final product
    mode: 'development', // environment
    entry: './src/index.tsx', // the entry file
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js' // name of the output
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',
    module: { rules },
    resolve: { extensions: ['.ts', '.tsx', '.js'] },
    devServer: { // puts all the compiled code into memory
        contentBase: './', // takes the content from the root
        port: 5000 // and export the content to this port
    }
};