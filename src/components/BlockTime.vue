<template>
  <h1>{{ blocktimeString }}</h1>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import axios from 'axios'

const blocktime = ref('000000')
const timer = ref(null)

const fetchBlockTime = async () => {
  try {
    const response = await axios.get('https://mempool.space/api/blocks/tip/height', {
      headers: {
        'Accept': 'text/plain'
      },
      transformResponse: [data => data]
    })
    blocktime.value = response.data
  } catch (error) {
    console.error('Failed to fetch block height', error)
  }
}

const blocktimeString = computed(() => (
  blocktime.value.slice(0, -3) + ',' + blocktime.value.slice(-3)
))

onMounted(() => {
  fetchBlockTime()
  timer.value = setInterval(fetchBlockTime, 30000)
})

onBeforeUnmount(() => {
  if (timer.value) {
    clearInterval(timer.value)
  }
})
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
