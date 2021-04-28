/**
 * 请求音频文件
 * @param {String} url - 文件地址
 */
function request (url) {
  return new Promise((resolve) => {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    // 这里需要设置xhr response的格式为arraybuffer
    // 否则默认是二进制的文本格式
    xhr.responseType = 'arraybuffer'
    xhr.onreadystatechange = function () {
      // 请求完成，并且成功
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(xhr.response)
      }
    }
    xhr.send()
  })
}

/**
 * 播放
 * @param {Object} AudioContext
 * @param {Object} decodeBuffer
 */
function play (AudioContext, decodeBuffer) {
  // 调用resume恢复播放
  AudioContext.resume()
  let source = AudioContext.createBufferSource()
  source.buffer = decodeBuffer
  source.connect(AudioContext.destination)
  // 从0s开始播放
  source.start(0)
}

/**
 * 播放音频
 * @param {String} url - 音频地址
 */
export function playAudio (context, url) {
  const AudioContext = new (window.AudioContext || window.webkitAudioContext)()
  request(url).then((audioMedia) => {
    AudioContext.decodeAudioData(audioMedia, decode => play(context, decode))
  })
}

/**
 * 文章转音频
 * @param {String} text - 文字
 */
export function text2audio (text) {
  const url = `http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&text=${encodeURI(text)}`

  playAudio(url)
}
