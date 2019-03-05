/**
 * 菜单数据
 * @type {Object}
 */
export default (data = {}) => ({
  bc: [],
  components: [
    {
      name: 'form',
      text: 'Form',
      disabled: true
    },
    {
      name: 'components.install-component',
      text: 'install-component 组件安装说明',
      disabled: false
    }
    // {
    //   name: 'components.radio',
    //   text: 'Radio 单选框',
    //   disabled: false
    // }
  ],
  utils: []
})
