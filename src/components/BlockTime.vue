<template>
  <h1>{{ blocktimeString }}</h1>
</template>

<script>
import axios from 'axios'

export default {
  name: 'BlockTime',
  data() {
    return {
      blocktime: "000000"
    }
  },
  created () {
    this.fetchBlockTime();
    this.timer = setInterval(this.fetchBlockTime, 30000)
  },
  methods: {
    fetchBlockTime () {
      axios
        .get('https://api.blockcypher.com/v1/btc/main')
        .then(response => (this.blocktime = response.data.height.toString()))
        .catch(error => console.log(error))
    }
  },
  computed: {
    blocktimeString: function () {
      return this.blocktime.slice(0, -3) + ":" + this.blocktime.slice(-3)
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
