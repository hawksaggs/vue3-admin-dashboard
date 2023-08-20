export default [
    {
        path: '/products',
        component: () => import('@/layouts/main/layout-bar.vue'),
        meta: {
            title: 'Swing :: Products'
        },
        children: [
            {
                path: '',
                name: 'Products',
                component: () => import('@/views/products/product-view.vue')
            }
        ]
    }
]