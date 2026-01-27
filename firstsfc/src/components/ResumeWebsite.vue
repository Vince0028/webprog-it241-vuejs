<template>
  <div class="resume-container">
    <iframe 
      src="/website_resume/html/index.html"
      title="Resume Website"
      class="resume-iframe"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: 'ResumeWebsite',
  mounted() {
    console.log('Resume Website loaded from /website_resume/index.html');
  }
}
</script>

<style scoped>
.resume-container {
  width: 100%;
  margin: 0;
  padding: 0;
}

.resume-iframe {
  width: 100%;
  height: 100vh;
  border: none;
  display: block;
}
</style>
