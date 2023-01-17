export default [
    {
        path: '/chart',
        component: () => import('@/layouts/main/layout-bar.vue'),
        children: [
            {
                path: '',
                name: 'Chart',
                component: () => import('@/views/chart-view.vue')
            }
        ]
    }
]