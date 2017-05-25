import Vue from 'vue/dist/vue.js'
import Vuex from 'vuex'
//import ElementUI from 'element-ui'
//import 'element-ui/lib/theme-default/index.css'
//import 'keen-ui/keen-ui.min.css'
import VueLazyload from 'vue-lazyload'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
// import routes from './router'
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(vueResource)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/404.png',
  loading: 'dist/loading-spin.svg',
  attempt: 1
})

//import routes from './routes'
const store = new Vuex.Store({
  state: {
    count: 2
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

/*const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count () {
      return store.state.count
    }
  }
}*/
/*const routes=[
		{
			path:"/",
			component:index
		}
	];
const router = new VueRouter({
  routes
});*/

//Vue.component('nv-head', require('../components/head.vue'));
import index from '../views/index.vue';
new Vue({
	components:{
		index:index,
	}
}).$mount('#app');
