<style lang="stylus" scoped>
.components-calendar
  display block

  .mt10
    margin-top 10px

  .mt40
    margin-top 40px

  .calendar-container
    // width 300px
    background-color #eee
    padding 10px
    margin-top 20px
</style>

<template>
  <div class="components-calendar">
    <h2>calendar 日历</h2>
    <p class="color-grey1 mt10">选择日期</p>
    <el-row class="mt40">
      <el-col :span="24">
        <h3>基础用法</h3>
        <!-- <p class="color-grey1 mt10">由于选项默认可见，不宜过多。</p> -->
      </el-col>
    </el-row>
    <el-row class="mt10">
      <el-col :span="24">
        <div class="calendar-container">
          <base-calendar v-model="date1" :day-color="dayColor" :show-footer="true"/>
        </div>
      </el-col>
    </el-row>
    <el-row class="mt10">
      <el-col :span="24">
        <div class="calendar-container">
          <base-calendar v-model="date2" :show-footer="false"/>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      /**
       * 日期
       * @type {Date}
       */
      date1: null,
      /**
       * 日期
       * @type {Date}
       */
      date2: null
    }
  },
  methods: {
    dayColor (item) {
      const day = item.getDay()

      if (day === 1) {
        return 'green'
      } else if (day === 2) {
        return 'yellow'
      } else {
        return 'red'
      }
    }
  }
}
</script>
