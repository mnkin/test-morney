<template>
  <Layout>
    <Tabs :data-source="typeList" class-prefix="type" :value.sync="type"></Tabs>
    <Tabs
      :data-source="intervalList"
      class-prefix="interval"
      :value.sync="interval"
    ></Tabs>
      <ol>
        <li v-for="(group, index) in result" :key="index">
          <h3 class="title">{{group.title}}</h3>
          <ol>
            <li v-for="item in group.items" :key="item.createdAt" class="record">
             <span>{{tagsString(item.tags)}}</span>
              <span class="notes">{{item.notes}}</span>
              <span>¥{{item.amount}}</span>
            </li>
          </ol>
        </li>
      </ol>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Tabs from "@/components/Tabs.vue";
import intervalList from "@/constants/intervalList";
import recordListType from "@/constants/recordListType";


@Component({
  components: { Tabs },
})
export default class Statistics extends Vue {
  tagsString(tags:Tag[]){
    return tags.length>0?tags.join(',') : '无'
  }
  get recordList() {
    return (this.$store.state as RootState).recordList;
  }
  get result() {
    const { recordList } = this;
    type HashTableValue = {
      title: string,
      items:RecordItem[]
    };
    const hashTable: {
      [key: string]: HashTableValue} = {};
    for (let i = 0; i < recordList.length; i++) {
      const [date, time] = recordList[i].createdAt!.split("T");
      hashTable[date] = hashTable[date] || {title:date,items:[]};
      hashTable[date].items.push(recordList[i]);
    }
    return hashTable;
  }

  beforeCreate() {
    this.$store.commit("fetchRecords");
  }
  typeList = recordListType;
  type = "-";
  intervalList = intervalList;
  interval = "day";
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
::v-deep .interval-item {
  height: 48px;
}
%item{
  padding: 8px 16px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title{
  @extend %item;
}
.record{
  @extend %item;
  background: white;
}
.notes{
  margin-right: auto;
  margin-left: 6px;
  color: #999;
}
</style>
