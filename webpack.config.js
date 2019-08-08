const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  context: __dirname,
  target: "node",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "service-entity-models.js",
    publicPath: "/dist/",
    library: "service-entity-models",
    globalObject: "this",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  externals: {
    'next-core-model': {
      commonjs: 'next-core-model',
      commonjs2: 'next-core-model',
      amd: 'next-core-model',
      root: 'next-core-model'
    }
  },
  stats: "errors-only",
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(require("./package.json").version)
    })
  ]
};
