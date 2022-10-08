<script lang="ts">
import { defineComponent } from 'vue'

let color: ''
let icon: ''
let text: ''

export default defineComponent ({
  name: 'Button',
  props: {
    color: String,
    icon: String,
    text: String
  },
  data(props) {
    color: props.color;
    icon: props.icon;
    text: props.text;

    return {
      color,
      icon,
      text
    }
  },
  setup() {
    return {
      
    }
  },
  mounted() {
    
  }
})

</script>

<template>
  <div class="div">Click me!</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');

.div {
  background-color: #4CAF50; 
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  box-shadow: 4px 4px 8px 2px lightgray ;
  user-select: none;
  
} 
</style>
