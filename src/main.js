import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './assets/styles/index.css'
import axios from 'axios'
import qs from 'qs'
import './assets/styles/public.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false



Vue.prototype.$http = axios
Vue.prototype.qs = qs

const webroot = window.location.protocol + "//" + window.location.host;

if (webroot == "http://192.168.0.186:8082") {
  axios.defaults.baseURL = 'http://192.168.0.177:99/index.php';
  // axios.defaults.baseURL = 'http://devapi.samhotele.com';
  // axios.defaults.baseURL = 'http://192.168.0.177:99/index.php/admin/ProductAggregation';

} else if (webroot == "http://localhost:8083" || webroot == "http://localhost:8081" || webroot == "http://localhost:8080" || webroot == "http://127.0.0.1:8080"||webroot == "http://192.168.1.51:8080") {
  // axios.defaults.baseURL = 'http://192.168.0.177:99/index.php';
  axios.defaults.baseURL = 'http://devapi.samhotele.com';//要放上测试记得打开这个
  // axios.defaults.baseURL = 'https://api.samhotele.com';
  // axios.defaults.baseURL = 'http://192.168.0.170/sanhe_mobile_admin/public/index.php';//开启Apachec
  // axios.defaults.baseURL = 'http://master:8888/public/index.php';//开启MAMP pro
} else if (webroot == 'http://devadmin.samhotele.com') {
  axios.defaults.baseURL = 'http://devapi.samhotele.com';

} else {
  axios.defaults.baseURL = 'https://api.samhotele.com';
  // axios.defaults.baseURL = 'http://devapi.samhotele.com';
}

new Vue({
  el: '#app',

  router,
  store,
  render: h => h(App)
}).$mount('#app')
