const path = require('path');
const webpack = require('webpack');
const ROOT_PATH = path.resolve(__dirname);
const DEV_PATH = path.resolve(ROOT_PATH, 'src');
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {

  entry: {
    main: path.resolve(DEV_PATH, 'main.js')
  },

  output: {
    path: BUILD_PATH,
    publicPath: '/build/',
    filename: 'build.js'
  },

  devtool: 'eval-source-map',

  devServer: {
    historyApiFallback: true,
    compress: true,
    noInfo: true,
    port: 8888
  },

  module: {

    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader'
          },
          postcss: [require('autoprefixer')({ browsers: ['last 2 versions', '> 1% in CN'] })]
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: 'url-loader?limit=40000'
      }
    ]
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },

};

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map';
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}