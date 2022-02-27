import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false  //关闭Vue开放中的一些提示
App.mpType = 'app'  //声明当前组件为整个应用

const app = new Vue(App)  //生成当前实例
app.$mount()  //挂载
