<template>
  <Layout>
    <Tabs :data-source="typeList" class-prefix="type" :value.sync="type"></Tabs>
    <Tabs :data-source="intervalList" class-prefix="interval" :value.sync="interval"></Tabs>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';

@Component({
  components: {Tabs}
})
export default class Statistics extends Vue {
  typeList = [{text: '支出', value: '-'}, {text: '收入', value: '+'}];
  type = '-';
  intervalList = [{text: '按日', value: 'day'}, {text: '按周', value: 'week'}, {text: '按月', value: 'month'}];
  interval = 'day';
}
</script>

<style scoped lang="scss">
::v-deep .type-item {
  background: #ffffff;

  &.selected {
    background: #c4c4c4;

    &::after {
      display: none;
    }
  }

}
::v-deep .interval-item{
  height: 48px;
}
</style>
