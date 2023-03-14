const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './src/index.tsx',
  mode: isDevelopment ? 'development' : 'production',
  plugins: [
    new ESLintPlugin({
      extensions: ['.tsx', '.ts'],
    }),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './public/template.html',
      favicon: './public/favicon.svg',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3000,
    hot: true,
  },
};
