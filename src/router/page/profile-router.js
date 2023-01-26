export default [
    {
        path: '/profile',
        component: () => import('@/layouts/main/layout-bar.vue'),
        meta: {
            title: 'Profile Page'
        },
        children: [
            {
                path: '',
                name: 'Profile Component',
                component: () => import('@/views/profile-view.vue')
            }
        ]
    }
]