// 用来注册当前页面
import Vue from 'vue'
import App from './index'

// add this to handle exception


// 生成当前页面的实例
const app = new Vue(App)
// 挂载当前页面
app.$mount()
