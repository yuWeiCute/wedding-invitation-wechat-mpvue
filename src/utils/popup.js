//弹窗提示

function showToast (name) {
  wx.showToast({
    title: name,
    icon: 'none',
    duration: 1500,
    mask: true
  })
}

function showLongToast (name) {
  wx.showToast({
    title: name,
    icon: 'none',
    duration: 3000,
    mask: true
  })
}

export default {
  showToast,
  showLongToast
}
