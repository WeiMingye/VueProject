import Vue from 'vue';
import VueRouter from 'vue-router';
import app from './app.vue';
import router from './router.js';
Vue.use(VueRouter);

var vm = new Vue({
	el: '#vue-project',
	render: c => c(app),
	router
});