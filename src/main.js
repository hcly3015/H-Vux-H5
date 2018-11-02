// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'

// 路由
import router from './router'
// 语言
import i18n from './lang'

import { XHeader, Actionsheet, TransferDom, ViewBox, Group, Cell, XInput, XButton } from 'vux'
Vue.component('x-header', XHeader)
Vue.component('view-box', ViewBox)
Vue.component('group', Group)
Vue.component('cell', Cell)
Vue.component('x-input', XInput)
Vue.component('x-button', XButton)
Vue.component('actionsheet', Actionsheet)
Vue.directive('transfer-dom', TransferDom)

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app-box')
