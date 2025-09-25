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
    async fetchBlockTime () {
      try {
        const response = await axios.get('https://mempool.space/api/blocks/tip/height', {
          headers: {
            'Accept': 'text/plain'
          }
        })
        this.blocktime = response.data.toString()
      } catch (error) {
        console.error('Failed to fetch block height', error)
      }
    }
  },
  computed: {
    blocktimeString: function () {
      return this.blocktime.slice(0, -3) + "," + this.blocktime.slice(-3)
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
