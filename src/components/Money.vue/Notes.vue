<template>
  <div>
    <div>
      <!--      {{value}}-->
      <label class="notes">
        <span class="name">{{this.fieldName}}</span>
        <input type="text" :placeholder="this.placeholder"
               v-model="value"/>
        <!--               :value="value"-->
        <!--               @input="value=$event.target.value"-->
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';

@Component
export default class Notes extends Vue {
  value = '';
  @Prop({required: true}) fieldName!: string;
  @Prop({}) placeholder?:string;

  @Watch('value')
  onValueChange(value: string) {
    this.$emit('update:value', this.value);
  }

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