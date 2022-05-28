<template>
  <ul class="tabs" :class="{[classPrefix+'-tabs']:classPrefix}">
    <li v-for="data in dataSource" :key="data.index" class="tabs-item"
        :class="{
          selected:data.value === value,
          [classPrefix+'-item']:classPrefix}" @click="select(data)">
      {{ data.text }}
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Tabs extends Vue {
  name: 'Tabs';
  @Prop({required: true, type: Array}) dataSource!: { text: string, value: string }[];
  @Prop(String) value!: string;
  @Prop(String) classPrefix?: string;

  select(data:{ text: string, value: string }){
    this.$emit('update:value',data.value)
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  background: #c4c4c4;
  display: flex;
  text-align: center; //文本居中
  font-size: 24px;

  &-item {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.selected::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #333;
    }
  }
}
</style>