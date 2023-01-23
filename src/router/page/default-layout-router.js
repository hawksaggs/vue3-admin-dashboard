export default [
    {
        path: '/default-layout',
        component: () => import('@/layouts/main/layout-bar.vue'),
        meta: {
            title: 'Swing :: Default Layout'
        },
        children: [
            {
                path: '',
                name: 'Default Layout',
                component: () => import('@/views/default-layout-view.vue')
            }
        ]
    }
]