export default [
    {
        path: '/badge',
        component: () => import('@/layouts/main/layout-bar.vue'),
        children: [
            {
                path: '',
                name: 'Badge',
                component: () => import('@/views/bagde-view.vue')
            }
        ]
    }
]