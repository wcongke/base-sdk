export default [{
  path: '/',
  component: () => import('@/views/components/index.vue'),
  children: [
    {
      name: 'components.index',
      path: '',
      meta: {
        title: '业务组件',
        module: 'components'
      },
      component: () => import('@/views/components/index/index.vue')
    },
    {
      name: 'components.install-component',
      path: 'install-component',
      meta: {
        title: '组件安装说明',
        module: 'components'
      },
      component: () => import('@/views/components/install-component/index.vue')
    }
  ]
}]
