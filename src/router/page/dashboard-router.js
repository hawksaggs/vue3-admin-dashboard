export default [
    {
        path: '/',
        component: () => import('@/layouts/main/layout-bar.vue'),
        children: [
            {
              path: '',
              name: 'Dashboard',
              // route level code-splitting
              // this generates a separate chunk (about.[hash].js) for this route
              // which is lazy-loaded when the route is visited.
              component: () => import(/* webpackChunkName: "home" */ '@/views/dashboard-view.vue'),
            },
        ],
    }
]