//根据跨域方式不同，如果使用的是proxy代理，就不需要这个文件了，main.js里面的baseURL就直接写'/api'就可以，需要改不同的开发环境的话，改vue.config.js里面的target就可以
let baseURL;
//根据不同的环境输入不同的url地址
switch (process.env.NODE_ENV) {
  case 'development':
    baseURL = 'http://dev-mall-pre.springboot.cn/api';
    break;
  case 'test':
    baseURL = 'http://test-mall-pre.springboot.cn/api';
    break;
  case 'production':
    baseURL = 'http://mall-pre.springboot.cn/api';
    break;
  default:
    baseURL = 'http://mall-pre.springboot.cn/api';
    break;
}
export default {
  baseURL,
};
