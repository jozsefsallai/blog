const path                    = require('path');
const webpack                 = require('webpack');
const MiniCSSExtractPlugin    = require('mini-css-extract-plugin');
const TerserJSPlugin          = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const extractSass = new MiniCSSExtractPlugin({
  filename: '[name].css',
  disable: false
});

const plugins = [
  extractSass
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: '"production"' }
    })
  );
}

const devtool = process.env.NODE_ENV === 'production'
  ? 'source-map'
  : 'eval-source-map';

const mode = process.env.NODE_ENV === 'production'
  ? 'production'
  : 'development';

module.exports = {
  mode,
  entry: './src/index.js',
  devtool,
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, '..', 'source', 'dist'),
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [ 'babel-preset-env' ]
        }
      },
      {
        test: /\.(ttf|woff|woff2|eot|jpg|png|svg)$/,
        use: [ 'file-loader' ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCSSExtractPlugin.loader,
          'css-loader',
          'resolve-url-loader',
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      }
    ]
  },
  plugins,
  resolve: {
    extensions: [ '.js', '.json' ],
    modules: [ 'node_modules', path.resolve(__dirname, 'src') ]
  },
  performance: {
    hints: false
  },
  optimization: {
    minimize: process.env.NODE_ENV === 'production',
    minimizer: [
      new TerserJSPlugin({}),
      new OptimizeCSSAssetsPlugin({})
    ]
  }
};
