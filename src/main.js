import Vue from 'vue'
import 'es6-promise/auto' // プロミスをポリフィル化する
import App from './App'
import router from './router'
import store from './store' //Vuexのストアインスタンスをインポート

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
