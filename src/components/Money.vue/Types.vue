<template>
  <div>
    <div>
      <ul class="types">
        <li :class="type === '-' && 'selected'" @click="selectType('-')">支出</li>
        <li :class="type === '+' && 'selected'" @click="selectType('+')">收入</li>
      </ul>
    </div>
  </div>
</template>

<script>

export default({
  data(){//声明一个data，保存当前选中的类型
    return {
      type:'-' //'-'表示支出，'+'表示收入
    }
  },
  methods:{//用来切换type
    selectType(type){
      if(type !== "-" && type !== "+"){
        throw new Error("type is unknown");
      }
      this.type= type;
    }
  }
});
</script>

<style lang="scss" scoped>
.types {
  background: #c4c4c4;
  display: flex;
  text-align: center; //文本居中
  font-size: 24px;
  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &.selected::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #333;
    }
  }
}
</style>