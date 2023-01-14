export default [
    {
        path: '/banner',
        component: () => import('@/layouts/main/layout-bar.vue'),
        children: [
            {
                path: '',
                name: 'Banner Component',
                component: () => import('@/views/banner-view.vue')
            }
        ]
    }
]