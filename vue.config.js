module.exports = {
  // ...

  configureWebpack(config) {
      // ...

      config.externals = {
          'AMap': 'AMap' // 高德地图配置
      }
  },
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    https: false,
    // 跨域解决方案
    proxy: {
      '/': {
        target: 'http://api.heclouds.com/',
        pathRewrite: {
          '^/': ''
        }
      }
    }
  },
}