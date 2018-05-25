/**
 * Created by syzx9801@163.com on 2017/12/11.
 */
const path = require('path');
const fs = require('fs');
const pkg = require('../package.json');
const webpack = require('webpack');
const notifier = require('node-notifier');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpack = require('extract-text-webpack-plugin');
const StyleLintPllugin = require('stylelint-webpack-plugin');
const devServer = require('./devServer');
const utils = require('./utils');

const APP_PATH = path.resolve(__dirname, '../src');
const BUILD_PATH = path.resolve(__dirname, '../dist');
const BASE_PATH = path.resolve(__dirname);

const config = {
  entry: {
  //  app: path.resolve(APP_PATH,'./js/index.js')
    app: path.resolve(APP_PATH,'./js/react-main.js')
  },
  output: {
    path: BUILD_PATH,
    filename: '[name]-[hash:5].js',
    chunkFilename: '[name].[chunkhash:5].min.js'
  },
  module: {
    rules: [
      {
        test: /\.css/,
        loader: ExtractTextWebpack.extract({
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
            }
          ]
        })
      },
      {
        test: /\.less/,
        loader: ExtractTextWebpack.extract({
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'less-loader',
            },
            {
              loader: 'postcss-loader',
            }
          ]
        })
      },
      {
        test: /\.scss/,
        loader: ExtractTextWebpack.extract({
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
            },
            {
              loader: 'postcss-loader',
            }
          ]
        })
      },
      {
        test: /\.ejs/,
        use: [
          'html-loader',
          'ejs-html-loader'
        ]
      },
      {
        test: /\.html/,
        use: [
          'html-loader'
        ]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        include: [APP_PATH],
        loader: "eslint-loader",
        options: {
          formatter: require("eslint-friendly-formatter"),
        }
      },
      {
        test: /\.(jsx?|es6|babel)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.otf|ttf|woff2?|eot(\?\S*)?$/,
        loader: 'url-loader',
        options: {
          limit: 2048,
          name: 'fonts/[name].[ext]'
        }
      },
      {
        test: /\.(gif|png|jpe?g|svg)(\?\S*)?$/,
        loader: 'url-loader',
        options: {
          limit: 2048,
          name: 'images/[name].[ext]'
        }
      },
      {
        test: /\.(mp3|wav|mp4)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'media/[name].[ext]'
        }
      },
      {
        test: /\.json/,
        use: [
          'json-loader'
        ]
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),   //webpack内置热更新方法
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: [`服务启动成功，请访问 http://${devServer.host}:${devServer.port}`],
      },
      onErrors: (severity, errors)=>{
        if (severity !== 'error') {
          return;
        }
        const error = errors[0];
        notifier.notify({
          title: pkg.name,
          message: severity + ': ' + error.name,
          subtitle: ''
        });
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(APP_PATH,'index.ejs')
    }),
   /* new HtmlWebpackPlugin({
      filename: 'html.html',
      template: path.resolve(APP_PATH,'html.html')
    }),*/
    new ExtractTextWebpack('[name].css'),
    new StyleLintPllugin({
      context: 'src',
      configFile: path.resolve(BASE_PATH,'../stylelint.config.js'),
      files: ['**/*.scss', '**/*.less'],
      cache: true
    })
  ],
  devServer
}

module.exports = config;
