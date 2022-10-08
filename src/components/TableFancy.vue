<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { TableFancyFunctions } from '../functions/TableFancyFunctions'


interface IDataStructire {
    name: string,
    discription: string,    
    state: string,
    process: string,
    rowOptions: any
}

const myObject1 = reactive<IDataStructire>({
  name: 'Test',
  discription: 'Das ist ein Test',
  state: 'In Bearbeitung',
  process: '60',
  rowOptions: {
      id: 0,
      expanded: false
  }
})
const myObject2 = reactive<IDataStructire>({
  name: 'Test123',
  discription: 'Das ist ein Test123',
  state: 'In Bearbeitung',
  process: '60123',
  rowOptions: {
      id: 1,
      expanded: false
  }
})
const myObject3 = reactive<IDataStructire>({
  name: 'Hallo',
  discription: 'ich bin der Andre',
  state: 'In Bearbeitung',
  process: '100',
  rowOptions: {
      id: 2,
      expanded: false
  }
})

let datasource: Array<any> = [myObject1, myObject2, myObject3];
let expandedRow: number = -1


export default defineComponent ({
  name: 'TableFancy',
  data() {
      return {
        datasrc: datasource,
        pictureName: 'collapsed'
      }
  },
  methods: {
      ToggleSecondary(id: number) {
          if (expandedRow != -1) {
              datasource[expandedRow].rowOptions.expanded = false
          }
          expandedRow = id;
          
          datasource[id].rowOptions.expanded = !datasource[id].rowOptions.expanded
          
      }
  },
  setup() {
    return {      
    }
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
                    <div class="primary" @click="ToggleSecondary(data.rowOptions.id)">
                        <div class="row-column">
                            <img src="../assets/collapsed.png" style="width:30px;height:30px;" v-if="!data.rowOptions.expanded">                        
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
<div class="pagination"></div>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto');

.table-container {
    width: 1000px;
    display: flex 
}

.header-grid-container {
    text-align: left;
    display: grid;
    grid-template-columns: 50px 300px 200px 150px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: rgb(100, 100, 100);    
    user-select: none;
    border-color: rgb(150, 150, 150);
    border-bottom-width: 1px;
    border-left-width: 0px;
    border-top-width: 0px;
    border-right-width: 0px;
    border-style: solid;
}

.header-column {
    text-align: left;
    display: grid;
    grid-template-columns: 50px 300px 150px 150px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: rgb(100, 100, 100);    
    user-select: none;
}

.primary {
    display: grid;
    grid-template-columns: 50px 300px 200px 150px;
}

.secondary {
    height: 50px;
    background-color: blue;  
}

.v-enter-from {
    height: 0px;
    opacity: 0;
}
.v-enter-active {
    transition: 350ms;
}
.v-enter-to {
    height: 50px;
    opacity: 1;
}

.v-leave-from {
    height: 50px;
    opacity: 1;
}
.v-leave-active {
    transition: 350ms;
}
.v-leave-to {
    height: 0px;
    opacity: 0;
}

.secondary-collapsed {
    height: 10px;
    background-color: blue;  
}

.secondary-expanded {
    height: 10px;
    background-color: blue;  
}

.row:nth-child(even) {
 background-color: rgb(240, 240, 250);
}

.row:hover {
    font-weight: bold;
    background-color: rgb(220, 220, 240);
    transition-duration: 100ms;
}

.row-column {
    text-align: left;
    display: wrap;
    margin-top: auto;
    margin-bottom: auto;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    color: rgb(100, 100, 100);    
    user-select: none;
}

.grid-container {
    grid-template-columns: auto auto auto auto;
}

.toggle-secondary-button {
    background-color: transparent;
    border-color: transparent;

    border-radius: 25px;
    height: 40px;
    width: 40px;
    align-items: center;
}

.toggle-secondary-button:hover {
    background-color: rgb(240, 240, 250);
}

.badge {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  box-shadow: 4px 4px 8px 2px lightgray;
  user-select: none;
  border-radius: 5px;
}

.pagination {
    background: red;
    height: 50px;
    
}


</style>
