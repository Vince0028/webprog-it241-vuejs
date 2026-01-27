<template>
  <ul>
    <li v-for="instrument in instruments" :key="instrument.id">{{ instrument.name }}</li>
  </ul>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'

const instruments = ref([])

async function getInstruments() {
  const { data } = await supabase.from('instruments').select()
  instruments.value = data
}

onMounted(() => {
  getInstruments()
})
</script>

<style scoped>
ul {
  list-style-type: disc;
  margin-left: 20px;
  font-size: 14px;
  line-height: 1.4;
  padding-left: 0;
}

li {
  margin-bottom: 2px;
}
</style>