<template>
  <h1>{{ info.data.height }}</h1>
</template>

<script>
import axios from 'axios'

export default {
  name: 'BlockTime',
  props: ['blocktime'],
  data () {
    return {
      info: "000000"
    }
  },
  created () {
    this.fetchBlockTime();
    this.timer = setInterval(this.fetchBlockTime, 30000)
  },
  methods: {
    fetchBlockTime () {
      const AuthStr = 'token '.concat('728294a0eae698a3ba26c27040cf1b2939ef2434')
      const URL = 'https://shop.dergigi.com/api/v1/server/info'
      axios
        .get(URL, { headers: { Authorization: AuthStr } })
        .then(response => (this.info = response['syncStatus']['chainHeight']))
        .catch(error => console.log(error))
    }
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>

<style lang="scss" scoped>
$orange: #FF7F00;

h1 {
  color: $orange;
  font-size: 5rem;
  font-family: 'Press Start 2P', cursive;
  text-align: center;
}
</style>
