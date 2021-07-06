// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import 'mint-ui/lib/style.css'
import { Tabbar, TabItem } from 'mint-ui'
import { NavBar, Button, Tab, Tabs, List, Card, Sticky, Tag, Icon } from 'vant'

Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.use(NavBar)
Vue.use(Button)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(List)
Vue.use(Card)
Vue.use(Sticky)
Vue.use(Tag)
Vue.use(Icon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
