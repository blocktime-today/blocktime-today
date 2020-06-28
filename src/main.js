import Vue from 'vue'
import BlockTime from './components/BlockTime'
import './assets/css/main.scss';

Vue.component('blockTime', BlockTime)

/* eslint-disable no-new */
new Vue({
  el: '#app'
})
