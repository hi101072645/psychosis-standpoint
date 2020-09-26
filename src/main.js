import Vue from 'vue'
import router from './router';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'bootstrap'; // Import js file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import css file
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import './bus'
Vue.use(ElementUI);
Vue.use({router:VueRouter});

library.add(fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  render: h => h(App),

});
