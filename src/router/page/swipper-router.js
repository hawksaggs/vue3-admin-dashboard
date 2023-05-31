export default [
    {
        path: '/swipper',
        component: () => import('@/layouts/main/layout-bar.vue'),
        meta: {
            title: 'Swipper Slider'
        },
        children: [
            {
                path: '',
                name: 'Swipper Slider',
                component: () => import('@/views/swipper-view.vue')
            }
        ]
    }
]