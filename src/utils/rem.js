// const baseSize = 16
// 设置 rem 函数
// 页面以1920px 为最小基本，小则缩放
function setRem() {
  // 当前页面宽度相对于 1920宽的缩放比例，可根据自己需要修改。
  const scale = document.documentElement.clientWidth / 1920
  // 设置页面根节点字体大小（“Math.min(scale, 2)” 指最高放大比例为2，可根据实际业务需求调整）
  // 手机端不进行处理
  let flag = navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  )
  if (!flag) {
    // document.documentElement.style.fontSize =
    //   baseSize * Math.min(scale, 2) + "px"

    // if (scale < 1) {
    // 除了1920 全都要适配一下
    document.documentElement.style.cssText = "zoom:" + scale
    // }
  }
}
// 初始化
// setRem()
// 改变窗口大小时重新设置 rem
// window.onresize = function () {
//   setRem()
// }
