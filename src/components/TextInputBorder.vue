<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent ({
  name: 'TextInputBorder',
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
<div>
  <span style="display: block"><label for="fname" class="description">First Name</label></span>
  <span style="display: block"><input type="text" id="fname" name="firstname" placeholder="Your name.." class="TextInputBorder"></span>
</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');

.description {
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
}

.TextInputBorder {
  width: 20%;
  min-width: 200px;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #282828  ;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
}
</style>
