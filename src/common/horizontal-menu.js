/**
 * 菜单数据
 * @type {Object}
 */
export default (data = {}) => ({
  ...data,
  list: [
    {
      name: 'components',
      page: 'components.index',
      text: '业务组件'
    },
    {
      name: 'utils',
      page: 'utils.index',
      text: '工具'
    }
  ]
})
