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

// task任务组件
import listTask from "./components/components/listTask.vue";
Vue.component("listTask",listTask);

// task任务组件
import listTaskThin from "./components/components/listTaskThin.vue";
Vue.component("listTaskThin",listTaskThin);


// 修改任务组件
import editTask from "./components/components/editTask.vue";
Vue.component("editTask",editTask);

// 添加任务组件
import addTask from "./components/components/addTask.vue";
Vue.component("addTask",addTask);




new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
