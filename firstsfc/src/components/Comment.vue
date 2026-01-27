<template>
  <div>
    <h2>Comments</h2>
    <div v-if="loading">Loading comments...</div>
    <div v-else-if="comments.length === 0">No comments yet. Be the first to comment!</div>
    <div v-else>
      <div v-for="comment in comments" :key="comment.id" class="comment-item">
        <strong>{{ comment.name }}</strong> - {{ formatDate(comment.created_at) }}
        <p>{{ comment.comment }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'

const comments = ref([])
const loading = ref(true)

async function getComments() {
  loading.value = true
  const { data } = await supabase
    .from('comments')
    .select('*')
    .order('created_at', { ascending: false })
  comments.value = data || []
  loading.value = false
}

function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

// Expose refresh function for CommentForm to call
defineExpose({ getComments })

onMounted(() => {
  getComments()
})
</script>

<style scoped>
.comment-item {
  border: 1px solid #ddd;
  padding: 12px;
  margin-bottom: 10px;
  max-width: 500px;
  background: white;
  font-size: 14px;
}

strong {
  font-weight: bold;
}

p {
  margin: 8px 0 0 0;
  line-height: 1.4;
}
</style>


