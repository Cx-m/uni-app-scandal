import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

//挂载全局方法：这样任何地方都可以调用
import config from './common/config.js'
Vue.prototype.config=config
import lib from './common/lib.js'
Vue.prototype.lib=lib

App.mpType = 'app'
 
const app = new Vue({
    ...App,
	config,
	lib
})
app.$mount()
