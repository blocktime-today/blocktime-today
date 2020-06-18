<template>
  <p>
    <span>Info: {{ info }}</span>
  </p>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  props: ['blocktime'],
  data () {
    return {
      info: "000000"
    }
  },
  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response))
      .catch(error => console.log(error))
  }
}
</script>

<style lang="scss" scoped>
$gray: darkslategrey;
h1 {
  color: $gray;
  font-size: 2rem;
}
</style>
