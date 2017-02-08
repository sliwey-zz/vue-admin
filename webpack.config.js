const path = require("path");
const webpack = require("webpack");
const HtmlwebpackPlugin = require('html-webpack-plugin');
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'app');
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');
const TEM_PATH = path.resolve(APP_PATH, 'templates');

module.exports = {

  entry: {
    app: path.resolve(APP_PATH, "app.js")
  },

  output: {
    path: BUILD_PATH,
    filename: "bundle.js"
  },

  // devtool: 'eval-source-map',

  devServer: {
    historyApiFallback: true,
    // hot: true,
    compress: true,
    port: 8888
  },

  module: {

    rules: [
      {
        test: /\.jsx?$/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        include: APP_PATH
      },
      {
        test: /\.(png|jpg)$/,
        use: "url-loader?limit=40000"
      }
    ]
  },

  resolve: {
    extensions: [".js", ".jsx"]
  },

  plugins: [

    // new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new HtmlwebpackPlugin({
      template: path.resolve(APP_PATH, "index.html"),
      inject: "body"
    })
  ]
};