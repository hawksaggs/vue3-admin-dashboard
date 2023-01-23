export default [
    {
        path: '/carousel',
        component: () => import('@/layouts/main/layout-bar.vue'),
        meta: {
            title: 'Swing :: Carousel Component'
        },
        children: [
            {
                path: '',
                name: 'Carousel',
                component: () => import('@/views/carousel-view.vue')
            }
        ]
    }
]