import webpack from 'webpack';
import path from 'path';

const config = {
  stats: "verbose",
  devtool: 'source-map',
  entry: './client/src/app',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'client/src'),
        exclude: ['node_modules'],
        use: [
          { loader: 'babel-loader',
            options: {
              presets: ["env", "stage-0", "react"]
            }
          }
        ]
      }
    ]
  }
};

export default config;
