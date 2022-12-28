export default [
    {
        path: '/top-nav',
        component: () => import('@/layouts/main/layout-bar.vue'),
        children: [
            {
                path: '',
                name: 'Top Nav',
                component: () => import('@/views/top-nav-view.vue')
            }
        ]
    }
]