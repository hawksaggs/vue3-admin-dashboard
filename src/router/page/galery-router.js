export default [
    {
        path: '/galery',
        component: () => import('@/layouts/main/layout-bar.vue'),
        meta: {
            title: 'Swing :: Galery Component'
        },
        children: [
            {
                path: '',
                name: 'Galery',
                component: () => import('@/views/galery-view.vue')
            }
        ]
    }
]