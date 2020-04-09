import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'



import ElementUI  from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))



Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

// index的右侧页面
import listTask from "./components/components/listTask.vue";
Vue.component("listTask",listTask);


// 修改任务组件
import editTask from "./components/components/editTask.vue";
Vue.component("editTask",editTask);



new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
