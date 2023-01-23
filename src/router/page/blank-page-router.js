export default [
    {
        path: '/blank-page',
        component: () => import('@/layouts/main/layout-bar.vue'),
        meta: {
            title: 'Swing :: Blank Page'
        },
        children: [
            {
                path: '',
                name: 'Blank Page',
                component: () => import('@/views/blank-page-view.vue')
            }
        ]
    }
]