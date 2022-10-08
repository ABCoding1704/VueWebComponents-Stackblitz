<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent ({
  name: 'TextInputLine',
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
  <span style="display: block"><label for="fname" class="description">Last Name</label></span>
  <span style="display: block"><input type="text" id="fname" name="firstname" placeholder="Your last name.." class="TextInputLine"></span>
</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');

.description {
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
}

.TextInputLine {
  width: 20%;  
  min-width: 200px;
  border-bottom-style: solid;
  border-bottom-color: #505050;
  border-bottom-width: 1px;
  border-left-width: 0px;
  border-top-width: 0px;
  border-right-width: 0px;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  box-sizing: border-box;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
}
</style>
