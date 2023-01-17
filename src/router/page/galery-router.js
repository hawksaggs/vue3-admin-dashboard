export default [
    {
        path: '/galery',
        component: () => import('@/layouts/main/layout-bar.vue'),
        children: [
            {
                path: '',
                name: 'Galery',
                component: () => import('@/views/galery-view.vue')
            }
        ]
    }
]