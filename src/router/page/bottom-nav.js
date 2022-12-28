export default [
    {
        path: '/bottom-nav',
        component: () => import('@/layouts/main/layout-bar.vue'),
        children: [
            {
                path: '',
                name: 'Bottom Navigation',
                component: () => import('@/views/bottom-nav-view.vue')
            }
        ]
    }
]