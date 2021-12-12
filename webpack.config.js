const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");

dotenv.config({
  path: './env/production.env',
});

// dotenv.config({
//   path: './env/development.env'
// });

const config = {
  entry: {
    app: "/src/index.js",
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "build"),
  },
  mode: "development",
  // mode: "production",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.BannerPlugin({
      banner: "banner",
    }),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      favicon: "public/favicon.ico",
    }),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.REACT_APP_API_URL': JSON.stringify(process.env.REACT_APP_API_URL)
    }),
  ],
  devServer: {
    hot: true,
    overlay: {
      warnings: true,
      errors: true,
    },
    contentBase: path.join(__dirname, "public/"),
    host: "localhost",
    port: "3000",
    open: true,
  },
};

module.exports = config;
