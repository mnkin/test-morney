<template>
  <div id="app">
    <router-view />
    <div class="tag">
      <router-link to="/money">记账</router-link> |
      <router-link to="/labels">标签</router-link>|
      <router-link to="/Statistics">统计</router-link>
    </div>
  </div>
</template>

<style lang="scss">
.tag > router-link {
  border: 1px solid red;
  margin: 10px;
}
</style>
