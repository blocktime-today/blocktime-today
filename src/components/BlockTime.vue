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
      axios
        .get('https://api.blockcypher.com/v1/btc/main')
        .then(response => (this.info = response))
        .catch(error => console.log(error))
    }
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>

<style lang="scss" scoped>
$gray: darkslategrey;
h1 {
  color: $gray;
  font-size: 5rem;
  text-align: center;
}
</style>
