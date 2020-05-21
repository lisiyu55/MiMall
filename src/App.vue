<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import storage from './storage/index';
export default {
  name: 'App',
  components: {},
  data() {
    return {};
  },
  mounted() {
    // storage.clear('abc', 'user');
    // storage.setItem('loginName', 'lisiyu', 'login');
    console.log(storage.getItem('password', 'login'));
  },
};
</script>

<style></style>
