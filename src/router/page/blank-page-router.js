export default [
    {
        path: '/blank-page',
        component: () => import('@/layouts/main/layout-bar.vue'),
        children: [
            {
                path: '',
                name: 'Blank Page',
                component: () => import('@/views/blank-page-view.vue')
            }
        ]
    }
]