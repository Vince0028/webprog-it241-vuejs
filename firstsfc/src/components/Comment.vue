<template>
  <div>
    <strong>{{ comment.name }}</strong> - {{ formatDate(comment.created_at) }}
    <p>{{ comment.comment }}</p>
  </div>
</template>

<script setup>
defineProps({
  comment: {
    type: Object,
    required: true
  }
})

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
</script>

<style scoped>
div {
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
  max-width: 500px;
}
</style>


