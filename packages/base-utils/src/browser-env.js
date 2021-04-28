const userAgent = global.navigator.userAgent
const inAndroid = /Android|(windows.*ucbrowser)/i.test(userAgent)
const inIOS = /iPhone|iPad|iPod/i.test(userAgent)
const inMicroMessenger = /MicroMessenger/i.test(userAgent)
const inWindowsWechat = /WindowsWechat/i.test(userAgent)
const inAndroid60 = /Android 6\.0/i.test(userAgent)
const inAliApp = /alipayclient|alipay/i.test(userAgent.toLowerCase())

/**
 * 判断是否是在支付宝app中
 * @returns {Boolean} - true || false
 */
export function isAliApp () {
  return inAliApp
}

/**
 * 判断当前系统是否是Android系统
 * @returns {boolean} 是与否
 */
// eslint-disable-next-line
export function isAndroid () {
  return inAndroid
}

/**
 * 判断当前系统是否是Android 6.0系统
 * @returns {String} 系统版本
 */
export function isAndroid60 () {
  return inAndroid60
}

/**
 * 判断当前系统是否是iOS系统
 * @returns {boolean} 是与否
 */
export function isIOS () {
  return inIOS
}

/**
 * 判断当前浏览器环境是否是微信
 * @returns {boolean} 是与否
 */
export function isWeChat () {
  return inMicroMessenger
}

/**
 * 判断当前浏览器环境是否是Android版微信
 * @returns {boolean} 是与否
 */
export function isAndroidWeChat () {
  return inAndroid && inMicroMessenger
}

/**
 * 判断当前浏览器环境是否是iOS版微信
 * @returns {boolean} 是与否
 */
export function isIOSWeChat () {
  return inIOS && inMicroMessenger
}

/**
 * 判断当前浏览器环境是否是Windows版微信
 * @returns {boolean} 是与否
 */
export function isWindowsWechat () {
  return inWindowsWechat && inMicroMessenger
}

/**
 * 是否在普通浏览器，用户不在微信或者支付宝浏览器中打开h5
 * @return {Boolean} 是与否
 */
export function isInOrdinaryBrower () {
  return !inMicroMessenger && !inAliApp
}

/**
 * 判断是pc
 * @return {Boolean} 是与否
 */
export function isPC () {
  var Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
  var flag = true
  for (var v = 0; v < Agents.length; v++) {
    if (userAgent.indexOf(Agents[v]) > 0) {
      flag = false
      break
    }
  }
  return flag
}
