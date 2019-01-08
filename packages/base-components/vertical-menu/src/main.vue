<style lang="stylus" scoped>
.vertical-menu
  display block

  .el-menu
    border none
</style>

<template>
  <div class="vertical-menu">
    <el-menu
      :default-active="active"
      @select="handleSelect">
      <el-menu-item v-for="(item, index) in menu[firstRouterName]" :key="index" :index="item.name" :disabled="item.disabled">
        <span slot="title">{{item.text}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'base-vertical-menu',
  props: {
    /**
     * 菜单
     * {
     *    bc: [],
     *    components: [
     *        {
     *           name: 'form',
     *           text: 'Form',
     *           disabled: true
     *        },
     *    ]
     * }
     * @type {Array}
     */
    menu: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    /**
     * 一级路由名称
     * @return {String}
     */
    firstRouterName () {
      return this.$route.meta.module
    },
    /**
     * 当前菜单
     * @returns {String}
     */
    active () {
      return this.$route.name
    }
  },
  methods: {
    /**
     * 处理菜单选择
     * @param {String} name -路由名称
     */
    handleSelect (name) {
      this.$router.push({
        name
      })
    }
  }
}
</script>
