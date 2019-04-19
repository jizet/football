import Vue from 'vue'
import App from './App.vue'
import ApiService from "./common/api.service"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(ElementUI);

ApiService.init();
ApiService.setHeader();

new Vue({
  render: h => h(App),
}).$mount('#app')
