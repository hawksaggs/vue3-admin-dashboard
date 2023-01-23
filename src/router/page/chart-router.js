export default [
    {
        path: '/chart',
        component: () => import('@/layouts/main/layout-bar.vue'),
        meta: {
            title: 'Swing :: Chart Component'
        },
        children: [
            {
                path: '',
                name: 'Chart',
                component: () => import('@/views/chart-view.vue')
            }
        ]
    }
]