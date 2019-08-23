import moment from 'moment'

export default {
  /**
   * 格式化时间（不含时分秒）
   * @param {String} value value
   * @returns {String} 时间
   */
  formatTime (value) {
    if (!value) return ''

    const time = moment(value).format('YYYY年MM月DD日')

    return time
  },
  /**
   * 格式化时间（包含时分秒）
   * @param {String} value value
   * @returns {String} 时间
   */
  formatTime2 (value) {
    if (!value) return ''

    const time = moment(value).format('YYYY年MM月DD日 HH:mm:ss')

    return time
  },
  /**
   * 格式化时间（包含时分秒）
   * @param {String} value value
   * @returns {String} 时间
   */
  formatTime3 (value) {
    if (!value) return ''

    const time = moment(value).format('YYYY/MM/DD HH:mm:ss')

    return time
  }
}
