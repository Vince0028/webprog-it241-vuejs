<template>
  <form @submit.prevent="submitComment">
    <p>
      <label>Name:</label>
      <input 
        v-model="name" 
        type="text" 
        placeholder="Your name"
        required
      />
    </p>
    <p>
      <label>Comment:</label>
      <textarea 
        v-model="comment" 
        placeholder="Write your comment..."
        maxlength="500"
        required
        :style="{ height: Math.max(60, comment.length * 0.8 + 40) + 'px' }"
      ></textarea>
      {{ comment.length }}/500
    </p>
    <button type="submit" :disabled="isSubmitting || !isValid">
      {{ isSubmitting ? 'Posting...' : 'Post Comment' }}
    </button>
    <p v-if="error">{{ error }}</p>
  </form>
</template>

<script setup>
import { ref, computed } from 'vue'

const emit = defineEmits(['comment-added'])

const name = ref('')
const comment = ref('')
const isSubmitting = ref(false)
const error = ref('')

const isValid = computed(() => {
  return name.value.trim().length > 0 && comment.value.trim().length > 0
})

async function submitComment() {
  if (!isValid.value) return
  
  isSubmitting.value = true
  error.value = ''
  
  try {
    emit('comment-added', {
      name: name.value.trim(),
      comment: comment.value.trim()
    })
    
    // Clear form after successful submission
    name.value = ''
    comment.value = ''
  } catch (err) {
    error.value = 'Failed to post comment. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
form {
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: 20px;
  max-width: 400px;
  background: white;
}

p {
  margin: 10px 0;
  font-size: 14px;
}

label {
  font-weight: bold;
  font-size: 14px;
  color: black;
}

input, textarea {
  width: 100%;
  border: 1px solid #ddd;
  padding: 5px;
  margin: 5px 0;
  box-sizing: border-box;
  resize: none;
  font-size: 14px;
  font-family: Arial, sans-serif;
}

textarea {
  min-height: 60px;
  height: auto;
}

button {
  background: #f5f5f5;
  border: 1px solid #ddd;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
}

button:hover {
  background: #e8e8e8;
}

button:disabled {
  background: #f8f8f8;
  cursor: not-allowed;
  color: #999;
}
</style>


