<template>
  <Layout classPrefix="layout">
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
    <Tabs :data-source="typeList" :value.sync="record.type"></Tabs>
    <div class="notes">
      <FormItem :value.sync="record.notes" field-name="备注" placeholder="在这里输入备注"/>
    </div>
    <Tags @update:value="record.tags = $event"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Tags from '@/components/Money.vue/Tags.vue';
import FormItem from '@/components/Money.vue/FormItem.vue';
import NumberPad from '@/components/Money.vue/NumberPad.vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import recordListType from '@/constants/recordListType';

@Component({
  components: {Tabs, Tags, FormItem, NumberPad},
})
export default class Money extends Vue {
  typeList = recordListType;
  get recordList() {
    return this.$store.state.recordList;
  }

  record: RecordItem = {tags: [], notes: '', type: '-', amount: 0};

  created() {
    this.$store.commit('fetchRecords');
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }

  saveRecord() {
    if(!this.record.tags || this.record.tags.length === 0 ){
     return window.alert('请至少选择一个标签')
    }
    this.$store.commit('createRecord', this.record);
    if(this.$store.state.createRecordError === null ){
      window.alert('已保存');
      this.record.notes = '';
    }
  }


}
</script>

<style lang="scss" scoped>
::v-deep .layout-content {
  display: flex;
  flex-direction: column-reverse;
}

.notes {
  padding: 12px 0;
}
</style>

