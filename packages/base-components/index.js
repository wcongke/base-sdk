import HorizontalMenu from './horizontal-menu/index'
import VerticalMenu from './vertical-menu/index'
import Anchor from './anchor/index'
import Code from './code/index'
import InstallComponent from './install-component/index'

const components = [
  HorizontalMenu,
  VerticalMenu,
  Anchor,
  Code,
  InstallComponent
]

const install = (Vue) => {
  if (install.installed) return
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}

if (typeof global !== 'undefined' && global.Vue) {
  install(global.Vue)
}

export default {
  install
}
