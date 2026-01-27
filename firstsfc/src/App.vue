<template>
  <resume-website/>
  
  <div class="content-section">
    <div class="envelope-section">
      <div class="envelope">@</div>
    </div>
    
    <h1>Instruments</h1>
    <InstrumentsList/>
    
    <hr />
    
    <CommentsSection/>
  </div>
</template>

<script></script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background: white;
}

.content-section {
  padding: 20px;
}

.envelope-section {
  text-align: center;
  margin: 30px 0;
}

.envelope {
  background: #e8e3ff;
  display: inline-block;
  padding: 8px 12px;
  font-size: 20px;
  color: #666;
}

h1 {
  text-align: left;
  font-size: 24px;
  font-weight: bold;
  margin: 30px 0 20px 0;
  color: black;
}

h2 {
  font-size: 18px;
  font-weight: bold;
  margin: 20px 0 15px 0;
  color: black;
  text-align: left;
}

hr {
  border: none;
  border-top: 1px solid #ccc;
  margin: 30px 0;
  width: 100%;
}

ul {
  list-style-type: disc;
  margin-left: 20px;
  font-size: 14px;
}
</style>