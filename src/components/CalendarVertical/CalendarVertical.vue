import { defineComponent } from 'vue';
<script lang='ts'>
import defineComponent from 'vue';

export default defineComponent ({
  name: 'CalendarVertical',
  props: {

  },
  data(props) {
    return {

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
    <div class="table-container">
    <ul>
        <li style="list-style-type: none; ">
            <div class="header-grid-container">
                <div></div>
                <div>PLAN</div>
                <div>ART</div>
                <div>DATUM</div>
                <div>STATUS</div>
            </div>
        </li>
         <template v-for="data in datasrc" v-bind:key="data">
            <li class="row"  style="list-style-type: none; ">
                <div class="column-grid-container">
                    <div class="primary">
                        <div class="row-column">                      
                            <img src="../assets/expanded.png" style="width:30px;height:30px;" v-else>   
                        </div>
                        <div class="row-column">
                            <div> {{ data.name }} </div>
                            <div style="font-style: oblique"> {{ data.discription }} </div>
                        </div> 
                        <div class="row-column"><div class="badge">{{ data.state }} </div></div> 
                    </div>  
                    <Transition>
                        <div class="secondary" v-if="data.rowOptions.expanded">

                        </div>
                    </Transition>
                </div>
            </li>
        </template>
    </ul>
    

</div>
</template>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

</style>