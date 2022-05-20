<template>
  <Layout classPrefix="layout">
    <NumberPad @update:value="onUpadteAmount" @submit="saveRecord" />
    <Types :value.sync="record.type" />
    <Notes @update:value="onUpadteNotes" />
    <Tags :data-source.sync="tags" @update:value="onUpadteTags" />
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import Tags from "@/components/Money.vue/Tags.vue";
import Notes from "@/components/Money.vue/Notes.vue";
import Types from "@/components/Money.vue/Types.vue";
import NumberPad from "@/components/Money.vue/NumberPad.vue";
import { Component, Watch } from "vue-property-decorator";


type Record = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
  createdAt?: Date;
};

@Component({
  components: { Tags, Notes, Types, NumberPad },
})
export default class Money extends Vue {
  tags: string[] = ["衣", "食", "住", "行"];
  record: Record = { tags: [], notes: "", type: "-", amount: 0 };
  recordList: Record[] = JSON.parse(
    window.localStorage.getItem("recordList") || "[]"
  );

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
    const record2: Record = JSON.parse(JSON.stringify(this.record));
    record2.createdAt = new Date();
    this.recordList.push(record2);
  }

  @Watch("recordList")
  onrecordListChange() {
    window.localStorage.setItem("recordList", JSON.stringify(this.recordList));
    console.log(this.recordList);
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>

