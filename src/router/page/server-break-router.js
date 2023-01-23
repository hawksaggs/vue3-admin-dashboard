export default [
    {
        path: '/500',
        component: () => import('@/views/500-view.vue'),
        meta: {
            title: 'Swing :: Error Server Break'
        },
    }
]