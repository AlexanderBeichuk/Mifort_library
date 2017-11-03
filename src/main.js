import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Login from './modules/login/Login.vue'

Vue.use(VueRouter);

const routes = [
    {path: '/login', component: Login}
];

const router = new VueRouter({routes});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
