<template>
  <div>
    <div>
      <ul class="types">
        <!--        <li :class="value === '-' && 'selected'" @click="selectType('-')">支出</li>-->
        <!--        <li :class="value === '+' && 'selected'" @click="selectType('+')">收入</li>-->

        <li :class="{selected:value === '-',[classPrefix+'-item']:classPrefix}" @click="selectType('-')">支出
        <li :class="{
          selected:value === '+',
          [classPrefix+'-item']:classPrefix,
        }" @click="selectType('+')">支出
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Types extends Vue {
  @Prop(String) value!: string;
  @Prop(String) classPrefix?: string;

  selectType(value: string) {
    if (value !== '-' && value !== '+') {
      throw new Error('type is unknown');
    }
    this.$emit('update:value', value);
  }
}
</script>

<style lang="scss" scoped>
.types {
  background: #c4c4c4;
  display: flex;
  text-align: center; //文本居中
  font-size: 24px;

  > li {
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