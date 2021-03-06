import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './utils/rem.js'
// 主题切换scss.js
import '@/assets/theme/common.scss'
import '@/assets/theme/theme.js'

import {get,post,put} from '@/request/http.js'
Vue.prototype.$get = get
Vue.prototype.$put = put
Vue.prototype.$post = post   
Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
