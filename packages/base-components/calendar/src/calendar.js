export default {
  data () {
    return {
      /**
       * 今天
       * @type {Date}
       */
      today: new Date(),
      /**
       * 当前日期
       * @type {Number}
       */
      currentDay: 1,
      /**
       * 当前月份
       * @type {Number}
       */
      currentMonth: 1,
      /**
       * 当前年
       * @type {Number}
       */
      currentYear: 1970,
      /**
       * 当前星期
       * @type {Number}
       */
      currentWeek: 1,
      /**
       * 年数组
       * @type {Array}
       */
      years: [],
      /**
       * 月份数组
       * @type {Array}
       */
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      /**
       * 日期数组
       * @type {Array}
       */
      days: [],
      /**
       * 显示model
       * @type {Boolean}
       */
      modelIsShow: false,
      /**
       * 所选年份
       * @type {Number}
       */
      selectedYear: null,
      /**
       * 所选月份
       * @type {Number}
       */
      selectedMonth: null
    }
  },
  methods: {
    /**
     * [initData 初始化日历]
     * @param {Date} cur [当日]
     */
    initData (cur) {
      let date
      if (cur) {
        date = new Date(cur)
      } else {
        date = new Date()
      }
      this.currentDay = date.getDate()
      this.currentYear = date.getFullYear()
      this.currentMonth = date.getMonth() + 1
      this.currentWeek = date.getDay()
      if (this.currentWeek === 0) {
        this.currentWeek = 7
      }
      let str = this.formatDate(this.currentYear, this.currentMonth, this.currentDay)
      this.days.length = 0
      let b = Math.round(this.currentDay / 7)
      // 循环插入该月今日之前的日期
      for (let i = this.currentWeek - 1 + 7 * b; i >= 0; i--) {
        let d = new Date(str)
        d.setDate(d.getDate() - i)
        this.days.push(d)
      }
      // 循环插入该月今日之后的日期
      let newLength = this.days.length
      for (let i = 1; i <= 35 - newLength; i++) {
        let d = new Date(str)
        d.setDate(d.getDate() + i)
        this.days.push(d)
      }
    },
    /**
     * [pickPre 获取上个月的信息]
     * @param {Number} year [年份]
     * @param {Number} month [月份]
     */
    pickPre (year, month) {
      //  setDate(0); 上月最后一天
      //  setDate(-1); 上月倒数第二天
      //  setDate(dx) 参数dx为 上月最后一天的前后dx天
      let d = new Date(this.formatDate(year, month, 1))
      d.setDate(0)
      this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1))
    },
    /**
     * [pickNext 获取下个月的信息]
     * @param {Number} year [年份]
     * @param {Number} month [月份]
     */
    pickNext (year, month) {
      let d = new Date(this.formatDate(year, month, 1))
      d.setDate(35)
      this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1))
    },
    /**
     * [pickPre 获取上一年的信息]
     * @param {Number} year [年份]
     * @param {Number} month [月份]
     */
    pickPreYear (year, month) {
      //  setDate(0); 上月最后一天
      //  setDate(-1); 上月倒数第二天
      //  setDate(dx) 参数dx为 上月最后一天的前后dx天
      let d = new Date(this.formatDate(year, month, 1))
      d.setDate(-335)
      this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1))
    },
    /**
     * [pickNext 获取下一年的信息]
     * @param {Number} year [年份]
     * @param {Number} month [月份]
     */
    pickNextYear (year, month) {
      let d = new Date(this.formatDate(year, month, 1))
      d.setDate(390)
      this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1))
    },
    /**
     * [formatDate 格式化时间格式]
     * @param {Number} year [年份]
     * @param {Number} month [月份]
     * @param {Number} day [当日]
     */
    formatDate (year, month, day) {
      let y = year
      let m = month < 10 ? '0' + month : month
      let d = day < 10 ? '0' + day : day
      return y + '-' + m + '-' + d
    },
    /**
     * 显示隐藏对话框
     * @param {Number} currentYear
     */
    showModel (currentYear) {
      this.modelIsShow = true
      this.selectedYear = this.selectedMonth = null

      this.createYearArray(currentYear)
    },
    /**
     * 创建年份数组
     * @param {Number} currentYear -当前年份
     */
    createYearArray (currentYear) {
      if (!currentYear) return

      this.years = []

      // 循环插入该年之前的5年
      for (let i = 5; i > 0; i--) {
        let y = currentYear - i

        this.years.push(y)
      }
      // 循环插入该年及该年之后的7年
      for (let i = 0; i < 7; i++) {
        let y = currentYear + i

        this.years.push(y)
      }
    },
    /**
     * 选择年份
     * @param {Number} year -年份
     */
    selectYear (year) {
      this.selectedYear = this.currentYear = year
    },
    /**
     * 选择月份
     * @param {Number} month -月份
     */
    selectMonth (month) {
      this.selectedMonth = this.currentMonth = month

      console.log(this.currentYear, this.currentMonth)

      this.initData(this.formatDate(this.currentYear, this.currentMonth, 1))
      this.modelIsShow = false
    }
  },
  created () {
    this.initData()
  }
}
