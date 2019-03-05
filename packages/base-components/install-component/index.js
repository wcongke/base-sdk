import InstallComponent from './src/main.vue'

InstallComponent.install = (Vue) => {
  Vue.component(InstallComponent.name, InstallComponent)
}

export default InstallComponent
