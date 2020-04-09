import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/mini'
    },
    {
      // 大屏主页
      path: '/index',
      name: 'indexPage',
      component: require('@/components/index').default,
      children: [
        // index页面默认页
        { path: "/index", redirect: "/index/allTask" },
        { path: '/index/allTask', name: "allTask", component: require("@/components/pages/index-allTask.vue").default },
        { path: '/index/detailTask', name: "detailTask", component: require("@/components/pages/index-detailTask.vue").default }
      ]
    },
    {
      // 小屏任务列表
      path: '/mini',
      name: 'miniPage',
      component: require('@/components/pages/listPage.vue').default
    },


  ]
})
