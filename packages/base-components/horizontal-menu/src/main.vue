<style lang="stylus" scoped>
.horizontal-menu
  display block

  .el-menu
    border-bottom none
</style>

<template>
  <div class="horizontal-menu">
    <el-menu :default-active="active" class="el-menu-demo" mode="horizontal">
      <el-menu-item v-for="(item, index) in menu" :key="index" :index="item.name" @click="handleSelect(item.page)">{{item.text}}</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'base-horizontal-menu',
  props: {
    /**
     * 菜单
     * {
     *    name: 'bc',
     *    page: 'bc.index',
     *    text: '基础'
     * }
     * @type {Array}
     */
    menu: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    /**
     * 当前菜单
     * @returns {String}
     */
    active () {
      return this.$route.meta.module
    }
  },
  methods: {
    /**
     * 处理菜单选择
     * @param {String} page -页面
     */
    handleSelect (page) {
      this.$router.push({
        name: page
      })
    }
  }
}
</script>
