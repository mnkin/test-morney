<template>
  <Layout classPrefix="layout">
    {{ recordist }}
    <NumberPad @update:value="onUpadteAmount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <Notes @update:value="onUpadteNotes"/>
    <Tags :data-source.sync="tags" @update:value="onUpadteTags"/>
    {{ record }}}
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Tags from '@/components/Money.vue/Tags.vue';
import Notes from '@/components/Money.vue/Notes.vue';
import Types from '@/components/Money.vue/Types.vue';
import NumberPad from '@/components/Money.vue/NumberPad.vue';
import {Component, Watch} from 'vue-property-decorator';

type Record = {
  tags: string[]
  notes: string
  type: string
  amount: number
}

@Component({
  components: {Tags, Notes, Types, NumberPad},
})

export default class Money extends Vue {
  tags: string[] = ['衣', '食', '住', '行'];
  record: Record = {tags: [], notes: '', type: '-', amount: 0};
  recordist: Record[] = [];

  onUpadteTags(tags: string[]) {
    this.record.tags = tags;
  }

  onUpadteNotes(value: string) {
    this.record.notes = value;
  }

  onUpadteAmount(value: string) {
    this.record.amount = parseFloat(value);
  }

  saveRecord() {
   const record2=  JSON.parse(JSON.stringify((this.record)))
    this.recordist.push(record2);

  }

  @Watch('recordList')
  onrecordlistChange(){
    window.localStorage.setItem('recordist', JSON.stringify(this.recordist));
    console.log(this.recordist);
  }

}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>

