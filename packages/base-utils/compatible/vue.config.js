const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i

module.exports = {
  transpileDependencies: ['webpack-dev-server/client'],
  // 输出文件目录
  outputDir: 'dist',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  // assetsDir: '', // 相对于outputDir的静态资源(js、css、img、fonts)目录
  runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,

  chainWebpack: config => {
    config.entry.app = ['babel-polyfill', './src/main.js']
    // 修复HMR
    config.resolve.symlinks(true)
    // 修复 Lazy loading routes Error
    config.plugin('html').tap(args => {
      args[0].chunksSortMode = 'none'
      return args
    })

    // 添加别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'))
      .set('filters', resolve('src/filters'))
      .set('mixins', resolve('src/mixins'))
      .set('plugins', resolve('src/plugins'))
      .set('model', resolve('src/model'))
      .set('router', resolve('src/router'))
      .set('store', resolve('src/store'))
      .set('views', resolve('src/views'))

    // 压缩图片
    config.module
      .rule('images')
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        mozjpeg: { progressive: true, quality: 65 },
        optipng: { enabled: false },
        pngquant: { quality: '65-90', speed: 4 },
        gifsicle: { interlaced: false },
        webp: { quality: 75 }
      })

    // 打包分析
    if (process.env.IS_ANALYZ) {
      config.plugin('webpack-report')
        .use(BundleAnalyzerPlugin, [{
          analyzerMode: 'static'
        }])
    }
  },

  configureWebpack: config => {
    if (IS_PROD) {
      const plugins = []
      // 开启 gzip 压缩
      plugins.push(
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: productionGzipExtensions,
          threshold: 10240,
          minRatio: 0.8
        })
      )

      config.plugins = [
        ...config.plugins,
        ...plugins
      ]
    }
  },

  // css相关配置
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {},
    modules: false

  },
  parallel: require('os').cpus().length > 1,
  pwa: {},
  // 第三方插件配置
  pluginOptions: {}
}
