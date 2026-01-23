<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'

const instruments = ref([])

async function getInstruments() {
  const { data } = await supabase.from('instruments').select()
  instruments.value = data
}

onMounted(() => {
   getInstruments()
})
</script>

<template>
  <div class="app-container">
    <div class="instruments-list">
      <h2>Database Instruments</h2>
      <ul>
        <li v-for="instrument in instruments" :key="instrument.id">{{ instrument.name }}</li>
      </ul>
    </div>
    <resume-website />
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
}
.instruments-list {
  padding: 20px;
  background-color: #f0f0f0; 
}
</style>

