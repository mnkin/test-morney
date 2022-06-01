<template>
  <Layout>
    <Tabs :data-source="typeList" class-prefix="type" :value.sync="type"></Tabs>
    <Tabs :data-source="intervalList" class-prefix="interval" :value.sync="interval"></Tabs>
    <div>
      <ol>
        <li v-for="item in result" :key="item.id">
          {{item}}
        </li>
      </ol>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import intervalList from '@/constants/intervalList';
import recordListType from '@/constants/recordListType';

@Component({
  components: {Tabs}
})
export default class Statistics extends Vue {
  get recordList(){
    return this.$store.state.recordList;
  }
  get result(){
    return this.recordList;
  }

  mounted(){
    this.$store.commit('fetchRecords')
  }
  typeList = recordListType;
  type = '-';
  intervalList =intervalList;
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
