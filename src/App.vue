<script lang='ts'>
import HelloWorld from './components/HelloWorld.vue'
import TooltipButtonControl, { type ITooltipButtonControlContainerStyle } from './components/TooltipButtonControl.vue'

export default {
  name: 'App',
  components: {
    TooltipButtonControl ,
  }
}
</script>

<template>
  <div id="app">
  <img alt="Vue logo" src="https://vuejs.org/images/logo.png">  
  <Transition name="fadeTT">
    <div class="tooltip-button-control-container">
    <TooltipButtonControl :text="asdf"/>
  </Transition>
    
  </div>
</template>

<style scoped lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.tooltip-button-control-container {
  position: absolute;
  height: fit-content;
  width: fit-content;

}


</style>
