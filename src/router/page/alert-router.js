export default [
    {
        path: '/alert',
        component: () => import('@/layouts/main/layout-bar.vue'),
        meta: {
            title: 'Swing :: Alert Component'
        },
        children: [
            {
                path: '',
                name: 'Alert',
                component: () => import('@/views/alert-view.vue')
            }
        ]
    }
]