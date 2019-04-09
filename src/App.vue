<template>
  <div id="app">
    <!-- 2. 添加全局资源  -->
    <p><input type="text" value="全局资源" v-cp-focus /></p>
    <button @click="isShowMsg=true">点击打开提示弹窗</button>
    <my-msg :isShow='isShowMsg'
             :title="'提示'"
             :text="'这是MyMsg插件的组件用法'"
             :clkMaskClose='true'
             @close="close"></my-msg>
  </div>
</template>
<script>
import Vue from 'vue';

export default {
  components: {
  },
  data() {
    return {
      isShowMsg: false,
    };
  },
  created() {
    // 1. 添加全局方法或属性
    console.log(Vue.$myName); // 苏洛洛
    // 3. 注入组件(添加全局mixin方法)
    this.greetingFn();
    this.greetingFn('唐糖');
    // 4. 添加实例方法
    console.log(this.$instanceName);
    this.showName('suger');

    // 5. 插件封装组件
    this.$myMsg({
      title: '温馨提示',
      isShow: true,
      text: '这是MyMsg插件的全局引用。',
      clkMaskClose: true,
      closecallback() {
        console.log('手写的关闭回调函数。');
      },
    });
    this.$myMsg();
  },
  methods: {
    close() {
      this.isShowMsg = false;
    },
  },
};
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
