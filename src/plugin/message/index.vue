<template>
  <div class="message-box" v-show="isShow">
    <div class="message-mask"
         @click="clkMask"></div>
    <div class="message-con">
      <div class="tit">
        {{title}}
        <b @click="close">×</b>
      </div>
      <div class="text">{{text}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MyMsg',
  props: {
    clkMaskClose: {
      type: Boolean,
      default: false,
    },
    isShow: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: '温馨提示',
    },
    text: {
      type: String,
      default: '正在加载中...',
    },
  },
  methods: {
    // 关闭
    close() {
      this.$emit('close');
    },
    // 遮罩层点击事件
    clkMask() {
      if (this.clkMaskClose) {
        this.close();
      }
    },
  },
};
</script>
<style lang="less">
.message-box{
  .message-mask{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.4);
  }
  .message-con{
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 200;
    transform: translate(-50%,-50%);
    width: 300px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 2px #ddd;
  }
  .tit{
    position: relative;
    padding: 0 10px;
    line-height: 36px;
    text-align: left;
    border-bottom: 1px solid #eee;
    font-size: 14px;
    b{
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      display: block;
      width: 25px;
      height: 25px;
      line-height: 25px;
      text-align: center;
      font-size: 20px;
      cursor: pointer;
    }
  }
  .text{
    padding: 15px 10px;
    font-size: 14px;
  }
}
</style>
