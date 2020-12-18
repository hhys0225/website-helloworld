import Vue from 'vue'
import VueRouter from "vue-router";


Vue.use(VueRouter);

export default new VueRouter({
  routes:[
    {
      path: '/',
      name:'Search',
      component: resolve => require(['../components/Search.vue'], resolve)
    },
    {
      path:'/Search',
      name:'Search',
      // component: content
      component: resolve => require(['../components/Search.vue'], resolve)
    },
    {
      path:'/SearchPage',
      name:'SearchPage',
      component: resolve => require(['../components/SearchPage'], resolve)
    },

  ]
})
