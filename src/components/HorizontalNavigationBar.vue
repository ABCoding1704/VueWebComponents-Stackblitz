<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent ({
  name: 'HorizontalNavigationBar',
  porps: {
    text: String
  },
  setup(props) {
    return {
      
    }
  }
})

</script>

<template>
  <div class="navigationBar">
      <div class="navigationItem" style="border-bottom-color: red;">Geocaching</div>
      <div class="navigationItem" style="border-bottom-color: #282828;">Routing </div>
      <div class="navigationItem" style="border-bottom-color: #282828;">Routing Optimation </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');

.navigationBar {
    background-color: #282828;   
    width: 100%;
}

.navigationItem {
  background-color: #282828;   
  border-bottom-style: solid;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  user-select: none;
  
} 
</style>
