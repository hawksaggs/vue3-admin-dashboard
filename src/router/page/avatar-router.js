export default [
    {
        path: '/avatar',
        component: () => import('@/layouts/main/layout-bar.vue'),
        meta: {
            title: 'Swing :: Avatar Component'
        },
        children: [
            {
                path: '',
                name: 'Avatar',
                component: () => import('@/views/avatar-view.vue')
            }
        ]
    }
]