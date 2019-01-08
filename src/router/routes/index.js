import components from './components'
import utils from './utils'

export default [
  ...components,
  ...utils,
  {
    path: '/404',
    name: '404',
    component: () => import('../../views/not-found/index.vue')
  },
  {
    path: '*',
    redirect: '/404'
  }
]
