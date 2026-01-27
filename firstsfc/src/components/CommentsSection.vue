<template>
  <div>
    <h2>Comments</h2>
    <CommentForm @comment-added="addComment" />
    
    <div v-if="loading">Loading comments...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else-if="comments.length === 0">No comments yet. Be the first to comment!</div>
    <div v-else>
      <Comment 
        v-for="comment in comments" 
        :key="comment.id" 
        :comment="comment" 
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'
import Comment from './Comment.vue'
import CommentForm from './CommentForm.vue'

const comments = ref([])
const loading = ref(true)
const error = ref('')

async function getComments() {
  loading.value = true
  error.value = ''
  
  const { data, error: fetchError } = await supabase
    .from('comments')
    .select('*')
    .order('created_at', { ascending: false })
  
  if (fetchError) {
    error.value = 'Failed to load comments'
    console.error('Error fetching comments:', fetchError)
  } else {
    comments.value = data || []
  }
  
  loading.value = false
}

async function addComment(commentData) {
  const { data, error: insertError } = await supabase
    .from('comments')
    .insert([
      {
        name: commentData.name,
        comment: commentData.comment
      }
    ])
    .select()
  
  if (insertError) {
    error.value = 'Failed to add comment: ' + insertError.message
    console.error('Error inserting comment:', insertError)
  } else {
    // Add the new comment to the top of the list
    if (data && data.length > 0) {
      comments.value.unshift(data[0])
    } else {
      // Refresh comments if insert didn't return data
      await getComments()
    }
  }
}

onMounted(() => {
  getComments()
})
</script>