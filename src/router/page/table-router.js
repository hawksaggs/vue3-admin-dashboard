export default [
    {
        path: '/table',
        component: () => import('@/layouts/main/layout-bar.vue'),
        meta: {
            title: 'Swing :: Table Component'
        },
        children: [
            {
                path: '',
                name: 'Table',
                component: () => import('@/views/table-view.vue')
            }
        ]
    }
]