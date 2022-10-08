<script lang="ts">
import { defineComponent } from 'vue'

let icon: ''
let text: ''

export default defineComponent ({
  name: 'TreeviewItem',
  props: {
    icon: String,
    text: String
  },
  data(props) {
    icon: props.icon;
    text: props.text;

    return {
      icon,
      text
    }
  },
  setup(data) {
    icon: data.icon;
    text: data.text;

    return {
      icon,
      text
    }
  },
  mounted() {
    
  }
})

</script>

<template>
  <div class="div">
      <img src="{{icon}}" class="icon">
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto');

.div {
  background-color: rgb(240, 240, 240); 
  border: none;
  color: rgb(60, 60, 60);
  padding: 15px 15px;
  text-align: center;
  /* display: inline-block; */
  font-size: 16px;  
  font-family: 'Roboto', sans-serif;
  /* box-shadow: 4px 4px 8px 2px lightgray ; */
  user-select: none;
  
} 

.icon{
    height: 30px;
    width: 30px;
}

</style>
