import { createApp } from 'vue'

import App from './App.vue'
import ResumeWebsite from './components/ResumeWebsite.vue'
import InstrumentsList from './components/InstrumentsList.vue'
import CommentsSection from './components/CommentsSection.vue'
import CommentForm from './components/CommentForm.vue'
import Comment from './components/Comment.vue'
import RestApi from './components/RestApi.vue'

const app = createApp(App)
app.component('resume-website', ResumeWebsite)
app.component('InstrumentsList', InstrumentsList)
app.component('comments-section', CommentsSection)
app.component('comment-form', CommentForm)
app.component('comment', Comment)
app.component('rest-api', RestApi)
app.mount('#app')
