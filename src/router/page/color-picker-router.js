export default [
    {
        path: '/color-picker',
        component: () => import('@/layouts/main/layout-bar.vue'),
        meta: {
            title: 'Swing :: Color Picker Component'
        },
        children: [
            {
                path: '',
                name: 'Color Picker',
                component: () => import('@/views/color-picker-view.vue')
            }
        ]
    }
]