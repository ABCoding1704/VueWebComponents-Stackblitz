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
      <div class="toggle-menu-button">
        <a target="_blank" href="img_5terre.jpg">
          <img src="img_5terre.jpg" alt="Cinque Terre" width="600" height="400">
        </a>
      </div>      
      <label class="turista-label">turista</label>
      <div class="navigationItem" style="border-bottom-color: red;">Startseite</div>
      <div class="navigationItem" style="border-bottom-color: #282828;">Planung</div>
      <div class="navigationItem" style="border-bottom-color: #282828;">Karte</div>
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

.toggle-menu-button {
  border: solid black;
}

.turista-label {
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
}
</style>
