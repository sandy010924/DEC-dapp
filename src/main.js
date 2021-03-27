// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// vue-router
import router from './router'
// ElementUI
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/zh-TW'
//Moment
import moment from 'moment'

Vue.use(ElementUI, { locale })
Vue.prototype.$moment = moment

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
