export default [
    {
        path: '/404',
        component: () => import('@/views/404-view.vue'),
        meta: {
            title: 'Swing :: Error Not Found'
        },
    }
]