import Vue from 'vue'
import HelloWorld from './components/HelloWorld'

Vue.component('helloWorld', HelloWorld)

/* eslint-disable no-new */
const vm = new Vue({
  el: '#app'
})
