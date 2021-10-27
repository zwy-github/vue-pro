import Vue from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import router from './router'
import store from './store'
import create from './utils/create';
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false

Vue.use(Antd);
// 通过create挂载自定义的component到body上，如弹窗、通知；
Vue.prototype.$create = create;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
