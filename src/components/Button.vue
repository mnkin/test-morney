<template>
  <button class="button" @click="$emit('click',$event)">
    <!--    组件内的button被点击了，就触发Button的点击事件-->
    <slot/>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Button extends Vue {
  name: 'Button';
}
</script>

<style lang="scss" scoped>
.button-wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 44-16px;

  > .button {
    background: #767676;
    color: #ffffff;
    border-radius: 4px;
    border: none;
    height: 40px;
    padding: 0 16px;
  }
}
</style>