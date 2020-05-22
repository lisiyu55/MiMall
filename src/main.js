import Vue from 'vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
// import env from './env';

//根据前端跨域方式做调整
// axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;

//根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;
//接口错误拦截
axios.interceptors.response.use(function(response) {
  //response.data是请求的值，这个值包含我们接口定义的所有数据
  let res = response.data;
  if (res.status == 0) {
    return res.data;
  } else if (res.status == 10) {
    window.location.href = '/#/login';
  } else {
    alert(res.msg);
  }
});
//将axios挂载到vue实例上
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
