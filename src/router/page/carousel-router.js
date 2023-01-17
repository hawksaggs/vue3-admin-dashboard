export default [
    {
        path: '/carousel',
        component: () => import('@/layouts/main/layout-bar.vue'),
        children: [
            {
                path: '',
                name: 'Carousel',
                component: () => import('@/views/carousel-view.vue')
            }
        ]
    }
]