<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent ({
  props: {
    // color: String,
    value: String
  },
  data() {
      return {

      }
  },
  setup() {
    return { 
    }
  }
})

</script>

<template>
  <div class="buttonStyle">
      <!-- <span class="value">1</span> -->
     <div class="content">{{value}}</div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto');


.buttonStyle {
  background-color: rgb(220, 220, 240); 
  border: rgb(40, 40, 40);
  border-width: 2px;
  border-radius: 30px; 
  text-align: center;
  width: 30px;
  height: fit-content;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  box-shadow: 4px 4px 8px 2px rgb(200, 200, 200);
  user-select: none;
} 

.buttonStyle:hover {
    box-shadow: 4px 4px 8px 2px rgb(150, 150, 150);
    background-color: rgb(240, 240, 250);
    transition-duration: 300ms;
}

.content {
    text-align: center;
    padding: 5px;
}
</style>
