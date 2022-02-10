import Nav from 'src/components/Nav'
<template>
  <div class="nav-wrapper">
    <div class="content">
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
    </div>
    <Nav />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Nav from "@/components/Nav.vue";

export default Vue.extend({
  components: { Nav },
});
</script>

<style lang="scss" scoped>
.nav-wrapper {
  border: 1px solid red;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.content {
  border: 1px solid blue;
  flex-grow: 1;
  overflow: auto;
}
</style>