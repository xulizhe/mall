const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          new CompressionPlugin({
            test: /\.(js|css)(\?.*)?$/i, // 需要压缩的文件正则
            threshold: 10240, // 文件大小大于这个值时启用压缩
            deleteOriginalAssets: false// 压缩后保留原文件
          })
        ]
      }
    }
  }
}
