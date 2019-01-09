import Vue from 'vue';
import Framework7 from 'framework7/framework7.esm.bundle';
import 'framework7/css/framework7.css';
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle';
import { Plugins } from '@capacitor/core';
import App from './app/app.vue';
import 'framework7-icons';
import 'material-icons/iconfont/material-icons.css';

Vue.config.productionTip = false;

Framework7.use(Framework7Vue);

export default new Vue({
  el: '#app',
  render: c => c(App),
  mounted() {
    this.$f7ready(() => {
      Plugins.SplashScreen.hide().catch(() => {});
    });
  },
});
