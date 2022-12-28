export default [
    {
        path: '/avatar',
        component: () => import('@/layouts/main/layout-bar.vue'),
        children: [
            {
                path: '',
                name: 'Avatar',
                component: () => import('@/views/avatar-view.vue')
            }
        ]
    }
]