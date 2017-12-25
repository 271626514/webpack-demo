/**
 * Created by syzx9801@163.com on 2017/12/11.
 */
const devServer = {
  historyApiFallback: true,
  hot: true,
  host: 'localhost',
  port: '7777',
  open: true,
  overlay: {
    warnings: false,
    errors: true,
  },
  publicPath: '/',
  quiet: true,
  watchOptions: {
    poll: false,
  }
}

module.exports = devServer;