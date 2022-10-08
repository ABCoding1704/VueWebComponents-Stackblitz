<script lang="ts">
import { defineComponent } from 'vue';
import TreeviewItem from './TreeviewItem.vue';

export default defineComponent ({
  name: 'Calendar',
  components: {
      TreeviewItem
  },
  props: {
      CalendarEvents: []
  },
  data() {
  },
  setup(props) {
    return {
      CalendarEvents: props.CalendarEvents
    }
  },
  mounted() {
    
  }
})

</script>

<template>
  <div class="container">
      <div class="list" v-for="item in CalendarEvents">
          
      </div>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');

.container {
    display: table;
}

.month {
    display: table-cell
}

.switch-months {
    display: grid;
}
</style>
