const path = require('path');

module.exports = {
  entry: {
    path: path.resolve(__dirname, '/src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js|jsx/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  externals:{ react: 'React', 'react-dom': 'ReactDOM' }
};
