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
      path: '/index',
      name: 'landing-page',
      component: require('@/components/index').default
    },
    {
      path: '/mini',
      name: 'miniPage',
      component: require('@/components/pages/listPage.vue').default
    },

  
  ]
})
