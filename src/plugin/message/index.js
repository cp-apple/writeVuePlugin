
import Vue from 'vue';
import message from './index.vue';

// 5. 插件封装组件
function createInstance() {
  const MsgPlugin = Vue.extend(message);
  const instance = new MsgPlugin({
    el: document.createElement('div'),
  });
  document.body.appendChild(instance.$el);
  return instance;
}
function MyMsg(opts) {
  const msgInstance = createInstance();
  // 默认参数
  const defaultOptions = {
    title: '不带参数的默认提示',
    isShow: true,
    text: '打铁要趁早...',
    clkMaskClose: false,
    closecallback() {
      console.log('默认的关闭回调函数。');
    },
  };
  // 关闭展示框
  msgInstance.close = () => {
    document.body.removeChild(msgInstance.$el);
    (opts && opts.closecallback) ? opts.closecallback() : defaultOptions.closecallback();
  };
  return Object.assign(msgInstance, {
    ...defaultOptions,
    ...opts,
  });
}
MyMsg.install = () => {
  Vue.component('MyMsg', message);
  Vue.prototype.$myMsg = MyMsg;
};
export default MyMsg;
