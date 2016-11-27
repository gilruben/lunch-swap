//var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: "./src/App.js",
  output: {
    path: "./scripts",
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        //what problem is this solving?
        //what is regex?
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
          //transpiling & compilation
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css'//ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
      },
      {
        test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file'
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ["", ".js", ".jsx" ]
  },
  // plugins: [new ExtractTextPlugin('styles.css')]
};
