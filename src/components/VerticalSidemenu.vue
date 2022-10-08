<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent ({
  name: 'VerticalSidemenu',
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
  <div class="sidemenu">
      <!-- <div class="navigationItem">ListItem1</div>
      <div class="navigationItem">ListItem2</div>
      <div class="navigationItem">ListItem3</div> -->
      <ul style="list-style-type: none; margin: 0; padding: 0;">
        <li><div class="list-item">Item1</div></li>
        <li><div class="list-item-selected">Item2</div></li>
        <li><div class="list-item">Item3</div></li>
        <li><div class="list-item">Item4</div></li>
      </ul>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');

.sidemenu {
    background-color: white;   
    width: 100%;
    box-shadow: 4px 4px 8px 2px lightgray;
}

.list-item-selected {
  background-color: white; /* Green */
  border: none;
  color: #282828;
  padding: 10px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  user-select: none;
}

.list-item {
  background-color: whitesmoke; /* Green */
  border: none;
  color: #282828;
  padding: 10px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  user-select: none;
}

/* .navigationItem {
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
  
}  */
</style>
