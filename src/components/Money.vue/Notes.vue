<template>
  <div>
    <div>
<!--      {{value}}-->
      <label class="notes">
        <span class="name" >备注</span>
        <input type="text" placeholder="在这里输入备注"
               :value="value"
               @input="value=$event.target.value"
        />
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component} from "vue-property-decorator";

@Component
export default class Notes extends Vue {
  value= ''
}
</script>

<style lang="scss" scoped>
.notes {
  background: #f5f5f5;
  display: flex;
  align-items: center;

  > .name {
    padding: 0px 16px;
  }

  > input {
    height: 64px;
    flex-grow: 1;
    border: none;
    background: transparent;
  }
}
</style>