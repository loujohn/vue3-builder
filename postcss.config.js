module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      overrideBrowserslist: [
        'last 10 versions' // 所有主流浏览器最近10版本用
      ]
      // grid: false
    }
  }
};
