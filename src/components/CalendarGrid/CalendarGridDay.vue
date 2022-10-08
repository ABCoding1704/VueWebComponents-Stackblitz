<script lang="ts">
import { defineComponent } from 'vue';
import IconButton from '../IconButton.vue';

export default defineComponent ({
  name: 'CalendarGrid',
  components: {
      IconButton
  },
  props: {
      CalendarEvents: []
  },
  data() {
  },
  setup() {
    return {
      
    }
  }
})

</script>

<template>
  <div class="container">
      <div class="month">
          <div class="switch-months">
              <IconButton color="" icon="" text="" />
          </div>
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
