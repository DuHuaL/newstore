// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// 根组件
import App from './App';
import router from './router';
// 导入bootstrap样式
import 'bootstrap/dist/css/bootstrap.css';
// 导入css样式
import '@/assets/css/index.css';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
