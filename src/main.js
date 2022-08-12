import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.config.productionTip = false
import router from './assets/js/router.js'

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
import { Icon } from 'vant';
Vue.use(Icon);
import { Col, Row } from 'vant';
Vue.use(Col);
Vue.use(Row);
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')