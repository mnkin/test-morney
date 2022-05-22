<template>
  <div>
    <label class="formItem">
      <span class="name">{{ this.fieldName }}</span>
      <input type="text" :placeholder="this.placeholder"
             :value="value" @input="onValueChanged($event.target.value)"
      />
      <!--               :value="value"-->
      <!--               @input="value=$event.target.value"-->
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';

@Component
export default class FormItem extends Vue {
  @Prop({default: ''}) readonly value!: string;
  @Prop({required: true}) fieldName!: string;
  @Prop({}) placeholder?: string;

  @Watch('value')
  onValueChanged(value: string) {
    this.$emit('update:value', value);
  }

}
</script>

<style lang="scss" scoped>
.formItem {

  display: flex;
  align-items: center;

  > .name {
    padding: 0px 16px;
  }

  > input {
    height: 44px;
    flex-grow: 1;
    border: none;
    background: transparent;
  }
}
</style>