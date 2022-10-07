<script lang="ts">
import { defineStore } from 'pinia';
import { defineComponent, ref, reactive } from 'vue';

export interface ITooltipButtonControlContainerStyle {
  LeftPosition: string;
  TopPosition: string;
  Visibility: boolean;
}

export interface ITooltipButtonControlStyle {
  Color: string;
  BackgroundColor: string;
  Text: string;
}

export default defineComponent({
  name: 'TooltipButtonControl',
  props: ['text'],
  data($props) {
    let text: string = this.text;

    let tooltipButtonControlContainerStyle: ITooltipButtonControlContainerStyle =
      {
        LeftPosition: '0px',
        TopPosition: '0px',
        Visibility: false,
      };

    let tooltipButtonControlStyle: ITooltipButtonControlStyle = {
      Color: 'rgb(0, 0, 0)',
      BackgroundColor: 'rgb(245, 245, 245)',
      Text: 'Test',
    };
    return {
      tooltipButtonControlContainerStyle,
      tooltipButtonControlStyle,
      text,
    };
  },
  setup() {
    return {};
  },
  methods: {},
  mounted() {
    this.tooltipButtonControlContainerStyle;
    this.tooltipButtonControlStyle;
    this.text;
  },
});
</script>

<template>
  <div class="button-container">
    <span class="text">{{ text }}</span>
  </div>
</template>

<style scoped lang="scss">
// @import url('https://fonts.googleapis.com/css2?family=Nunito&family=Open+Sans&family=Roboto&family=Roboto+Mono&display=swap');

.button-container {
  height: fit-content;
  width: fit-content;
  background-color: rgb(245, 245, 247);
  box-shadow: 8px 8px 8px 0px rgba(0, 0, 0, 0.3);
  border: solid;
  border-width: 1px;
  border-color: rgba(200, 200, 200, 0.7);
  border-radius: 5px;
  cursor: pointer;
}

.button-container:hover {
  background-color: rgb(210, 230, 240);
  box-shadow: 8px 8px 8px 0px rgba(0, 0, 0, 0.5);
}

.button-container:focus {
  background-color: white;
  box-shadow: 8px 8px 8px 0px rgba(0, 0, 0, 0);
}

.text {
  // font-family: "Nunito", sans-serif;
  font-family: 'Roboto+Mono', sans-serif;
  font-size: 18px;
  line-height: 18px;
  color: rgb(80, 80, 80);
  margin: auto;
  user-select: none;
  align-self: center;
}
</style>
