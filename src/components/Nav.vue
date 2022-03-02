<template>
  <div class="tag">
    <router-link to="/money">
      <Icon name="money" />
      记账</router-link
    >
    |
    <router-link to="/labels">
      <Icon name="label" />
      标签</router-link
    >|
    <router-link to="/Statistics">
      <Icon name="statistics" />
      统计</router-link
    >
  </div>
</template>

<script lang="ts">
export default {
  name: "Nav",
};
</script>

<style scoped>
</style>