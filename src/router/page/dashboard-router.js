export default [
    {
        path: '/dashboard',
        component: () => import('@/layouts/main/layout-bar.vue'),
        // children: [
        //     {
        //       path: '',
        //       name: 'Home',
        //       // route level code-splitting
        //       // this generates a separate chunk (about.[hash].js) for this route
        //       // which is lazy-loaded when the route is visited.
        //       component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
        //     },
        //   ],
    }
]