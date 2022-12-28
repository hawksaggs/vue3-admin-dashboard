export default [
    {
        path: '/alert',
        component: () => import('@/layouts/main/layout-bar.vue'),
        children: [
            {
                path: '',
                name: 'Alert',
                component: () => import('@/views/alert-view.vue')
            }
        ]
    }
]