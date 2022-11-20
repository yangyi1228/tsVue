import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/LoginView.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    redirect: 'goods',
    children: [
      {
        path: '/goods',
        name: 'goods',
        meta: {
          isShow: true,
          title: '商品列表',
        },
        component: () =>
          import(/* webpackChunkName: "goods" */ '../views/GoodsView.vue'),
      },
      {
        path: '/user',
        name: 'user',
        meta: {
          isShow: true,
          title: '用户列表',
        },
        component: () =>
          import(/* webpackChunkName: "user" */ '../views/UserView.vue'),
      },
      {
        path: '/role',
        name: 'role',
        meta: {
          isShow: true,
          title: '角色列表',
        },
        component: () =>
          import(/* webpackChunkName: "user" */ '../views/RoleView.vue'),
      },
      {
        path: '/authority/:id/:authority',
        name: 'authority',
        meta: {
          isShow: false,
          title: '权限列表',
        },
        component: () =>
          import(/* webpackChunkName: "user" */ '../views/AuthorityView.vue'),
      },
    ],
  },
  {
    path: '/',
    redirect: '/login',
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const token: string | null = localStorage.getItem('token')
  if (!token && to.path !== '/login') {
    next('/login')
  } else {
    next()
  }
})

export default router
