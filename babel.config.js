module.exports = {
  presets: [
    [
      '@vue/app',
      {
        polyfills: ['es6.promise', 'es6.symbol']
      }
    ]
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
