export default [
    {
        path: '/badge',
        component: () => import('@/layouts/main/layout-bar.vue'),
        meta: {
            title: 'Swing :: Badge Component'
        },
        children: [
            {
                path: '',
                name: 'Badge',
                component: () => import('@/views/bagde-view.vue')
            }
        ]
    }
]