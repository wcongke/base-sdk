<style lang="stylus" scoped>
.instal-component
  &__desc
    margin-bottom 10px
</style>

<template>
  <div>
    <base-anchor :title="title" h2></base-anchor>
    <p class="instal-component__desc">{{desc}}</p>
    <base-code lang="auto" bg>{{ code }}</base-code>
  </div>
</template>
<script>
import BaseAnchor from '../../anchor/src/main.vue'
import BaseCode from '../../code/src/main.vue'

export default {
  name: 'base-install-component',
  components: {
    BaseAnchor,
    BaseCode
  },
  props: {
    title: {
      type: String,
      default: '单独引用'
    },
    desc: {
      type: String,
      default: '假如只用到该一个或几个组件，建议使用单独引用方式达到减少代码体积。'
    },
    code: {
      type: String,
      default: ''
    }
  }
}
</script>
