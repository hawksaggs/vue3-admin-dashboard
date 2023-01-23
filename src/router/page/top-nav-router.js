export default [
    {
        path: '/top-nav',
        component: () => import('@/layouts/main/layout-bar.vue'),
        meta: {
            title: 'Swing :: Top Navigation'
        },
        children: [
            {
                path: '',
                name: 'Top Nav',
                component: () => import('@/views/top-nav-view.vue')
            }
        ]
    }
]