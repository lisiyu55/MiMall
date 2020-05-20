//整个webpack的配置表，node遵循的是CommonJs规范
//只有在本地开发的时候使用代理跨域，在部署项目的时候，使用的是nginx服务器做代理
module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://www.imooc.com',
        changeOrigin: true,
        pathRewrite: {
          '/api': '/api',
        },
      },
    },
  },
};
