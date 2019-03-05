<style lang="stylus" scoped>
.components-index
  display block
</style>

<template>
  <div class="components-index">
    <h1>业务组件</h1>
    <base-install-component class="base__mt40" desc="通过以下代码安装此插件" title="安装" :code="code.code"></base-install-component>
    <base-install-component class="base__mt20" desc="在 main.js 中写入以下内容：" title="完整引入" :code="code.demo"></base-install-component>
  </div>
</template>

<script>
import code from './code'

export default {
  data () {
    return {
      code
    }
  }
}
</script>
