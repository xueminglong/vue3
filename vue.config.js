module.exports={
    devServer: {
      proxy: {
        '/api': {
            target: "https://www.wumeili.top/",
            ws: true, // 如果要代理 websockets
            changOrigin: true,
            pathRewrite: {
                '^/api': 'https://www.wumeili.top/'
            }
        }
      }
    }
  }