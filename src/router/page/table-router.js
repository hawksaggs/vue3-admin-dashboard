export default [
    {
        path: '/table',
        component: () => import('@/layouts/main/layout-bar.vue'),
        children: [
            {
                path: '',
                name: 'Table',
                component: () => import('@/views/table-view.vue')
            }
        ]
    }
]