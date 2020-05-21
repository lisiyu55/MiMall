<template>
  <div>
    <order-header></order-header>
    cart
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import NavFooter from './../components/NavFooter';
import OrderHeader from './../components/OrderHeader';
export default {
  name: 'cart',
  components: {
    NavFooter,
    OrderHeader,
  },
};
</script>
