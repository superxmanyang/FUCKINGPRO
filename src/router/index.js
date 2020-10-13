import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../pages/index.vue'
import login from '../components/login.vue'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


const router = new VueRouter({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/components/login.vue'], resolve),

    },

    {
      path: '/index',
      name: 'index',
      component: resolve => require(['@/pages/index.vue'], resolve),
      children: [
        {
          path: '/aggList',
          name: 'aggList',
          component: resolve => require(['@/pages/goods/aggList.vue'], resolve)
        },
        {
          path: '/map',
          name: 'map',
          component: resolve => require(['@/pages/goods/map.vue'], resolve),

        },
        {
          path: '/hfive',
          name: 'hfive',
          component: resolve => require(['@/pages/goods/hfive.vue'], resolve),

        },
      ],

    },
  ]
})
// 挂载路由导航守卫

router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next 是一个函数，表示放行
  //     next()  放行    next('/login')  强制跳转

  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.localStorage.getItem('token')
  console.log(tokenStr);
  if (!tokenStr) return next('/login')
  next()
})
export default router

