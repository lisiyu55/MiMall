<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import storage from './storage/index';
export default {
  name: 'App',
  components: {},
  data() {
    return {
      res: {},
    };
  },
  mounted() {
    // storage.clear('abc', 'user');
    // storage.setItem('loginName', 'lisiyu', 'login');
    // console.log(storage.getItem('password', 'login'));
    //演示使用本地mock的json数据
    this.axios.get('/mock/user/login.json').then((res) => {
      this.res = res;
    });
  },
};
</script>

<style></style>
