<style lang="stylus" scoped>
@import './index.stylus'
</style>

<template>
  <div class="calendar">
    <div class="calendar__header">
      <div class="calendar__header--left">
        <div class="calendar__header--title" @click="showModel(currentYear)">{{ currentYear }}年{{ currentMonth }}月</div>
      </div>
      <div class="calendar__header--right">
        <el-button-group v-if="modelIsShow && !selectedYear">
          <el-button size="mini" icon="el-icon-d-arrow-left" @click="createYearArray(years[0])"></el-button>
          <el-button size="mini" icon="el-icon-d-arrow-right" @click="createYearArray(years[11])"></el-button>
        </el-button-group>
        <el-button-group v-if="!modelIsShow">
          <el-button size="mini" @click="pickPre(currentYear, currentMonth)">上个月</el-button>
          <el-button size="mini" @click="initData(), selectDay(today)">今天</el-button>
          <el-button size="mini" @click="pickNext(currentYear, currentMonth)">下个月</el-button>
        </el-button-group>
      </div>
      <!-- <div class="calendar__header--left">
        <span v-if="modelIsShow && !selectedYear" @click="createYearArray(years[0])">&#60;&#60;</span>
        <span v-if="!modelIsShow" @click="pickPreYear(currentYear, currentMonth)">&#60;&#60;</span>
        <span v-if="!modelIsShow" @click="pickPre(currentYear, currentMonth)">&#60;</span>
      </div>
      <div class="calendar__header--center" @click="showModel(currentYear)">{{ currentYear }}年{{ currentMonth }}月</div>
      <div class="calendar__header--right">
        <span v-if="!modelIsShow" @click="pickNext(currentYear, currentMonth)">&#62;</span>
        <span v-if="!modelIsShow" @click="pickNextYear(currentYear, currentMonth)">&#62;&#62;</span>
        <span v-if="modelIsShow && !selectedYear" @click="createYearArray(years[11])">&#62;&#62;</span>
      </div> -->
    </div>
    <div class="calendar__body">
      <ul class="calendar__weekdays">
        <li>一</li>
        <li>二</li>
        <li>三</li>
        <li>四</li>
        <li>五</li>
        <li>六</li>
        <li>日</li>
      </ul>
      <ul class="calendar__days">
        <li v-for="(item, index) in days" :key="index" :class="{'active': activeDay(item, selectedDay)}" @click="selectDay(item, spare)">
          <div>
            <span
            :class="{'today': item.getFullYear() === today.getFullYear()
            && item.getMonth() === today.getMonth()
            && item.getDate() === today.getDate(),
            'undisable': undisableDay(item, spare),
            'active': activeDay(item, selectedDay)}">{{item.getDate()}}</span>
            <span class="drop" :style="{backgroundColor: dayColor(item, spare)}"></span>
          </div>
        </li>
      </ul>
    </div>
    <div class="calendar__footer" v-if="showFooter">
      <button class="calendar__footer--left-btn" @click="close()">取消</button>
      <button @click="submit(selectedDay)">确定</button>
    </div>

    <div class="calendar__model" v-if="modelIsShow">
      <div class="calendar__body">
        <ul class="calendar__years" v-if="!selectedYear">
          <li v-for="(item, index) in years" :key="index" @click="selectYear(item)">
            <span>{{item}}</span>
            <!-- <span
              :class="{'current': item === today.getFullYear(),
              'active': item === currentYear}">{{item}}</span> -->
          </li>
        </ul>
        <ul class="calendar__months" v-else>
          <li v-for="(item, index) in months" :key="index" @click="selectMonth(item)">
            <span>{{item}}</span>
            <!-- <span
              :class="{'current': item === today.getMonth() + 1,
              'active': item === currentMonth}">{{item}}</span> -->
          </li>
        </ul>
      </div>
      <div class="calendar__model__footer">
        <button class="calendar__model__footer__btn" @click="modelIsShow = false">关闭</button>
      </div>
    </div>
  </div>
</template>

<script>

import calendar from './calendar'

export default {
  name: 'base-calendar',
  mixins: [calendar],
  props: {
    /**
     * 日期
     * @type {Date}
     */
    value: {
      type: [Date, String],
      default: () => new Date()
    },
    /**
     * 默认日期
     * @type {Date}
     */
    defaultDay: {
      type: [Date, String],
      default: () => new Date()
    },
    /**
     * 是否显示footer
     * @type {Boolean}
     */
    showFooter: {
      type: Boolean,
      default: true
    },
    /**
     * 不禁用日期
     * @type {Object}
     */
    undisableDay: {
      type: Function,
      default: function () {
        return true
      }
    },
    /**
     * 日期颜色
     * @type {Object}
     */
    dayColor: {
      type: Function,
      default: function () {
        return ''
      }
    },
    /**
     * 备用参数
     * @type {Object}
     */
    spare: {
      type: [Object, Array, String, Number, Boolean]
    }
  },
  data () {
    return {
      /**
       * 选择的日期
       * @type {Date}
       */
      selectedDay: null
    }
  },
  methods: {
    /**
     * 选择时间
     * @param {Date} day [日期]
     * @param {Unkown} spare [备用参数]
     */
    selectDay (day, spare) {
      if (!this.undisableDay(day, spare)) return

      this.selectedDay = day
      this.$emit('input', day)
      this.$emit('change', day)
    },
    /**
     * 当前
     * @param {Date} day [日期]
     * @param {Date} selectedDay [选择的日期]
     */
    activeDay (day, selectedDay) {
      if (!selectedDay) return false

      if (day.getFullYear() === selectedDay.getFullYear() &&
          day.getMonth() === selectedDay.getMonth() &&
          day.getDate() === selectedDay.getDate()) return true

      return false
    },
    /**
     * 关闭
     */
    close () {
      this.$emit('close')
    },
    /**
     * 确定
     * @param {Date} day [日期]
     */
    submit (day) {
      this.$emit('input', day)
      this.$emit('submit')
    }
  },
  created () {
    // 如果有时间
    if (this.value) {
      this.selectedDay = new Date(this.value)
    // 如果无时间有默认时间
    } else if (!this.value && this.defaultDay) {
      this.selectedDay = new Date(this.defaultDay)
    // 如果无时间无默认时间，就设置为空
    } else {
      this.selectedDay = null
      // this.selectedDay = new Date()
    }

    // 如果有selectedDay，date就设为selectedDay，没有就未当前时间
    const date = this.selectedDay ? this.selectedDay : new Date()

    this.currentDay = date.getDate()
    this.currentYear = date.getFullYear()
    this.currentMonth = date.getMonth() + 1
    this.currentWeek = date.getDay()

    this.pickPre(this.currentYear, this.currentMonth)
    this.pickNext(this.currentYear, this.currentMonth)
  },
  watch: {
    value (newVal) {
      this.selectedDay = new Date(this.value)
    }
  }
}
</script>
