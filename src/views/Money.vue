<template>
  <Layout classPrefix="layout">
    <NumberPad />
    <Types />
    <Notes />
    <Tags />
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import Tags from "@/components/Money.vue/Tags.vue";
import Notes from "@/components/Money.vue/Notes.vue";
import Types from "@/components/Money.vue/Types.vue";
import NumberPad from "@/components/Money.vue/NumberPad.vue";

export default Vue.extend({
  components: { Tags, Notes, Types, NumberPad },
});
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>

