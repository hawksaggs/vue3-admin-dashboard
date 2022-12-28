export default [
    {
        path: '/default-layout',
        component: () => import('@/layouts/main/layout-bar.vue'),
        children: [
            {
                path: '',
                name: 'Default Layout',
                component: () => import('@/views/default-layout-view.vue')
            }
        ]
    }
]