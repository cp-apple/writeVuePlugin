// vue插件编写方法
export default {
  install(vue, options) {
    // 1. 添加全局方法或属性
    vue.$myName = '苏洛洛';

    // 2. 添加全局资源 (全局资源包含了添加全局的指令／过滤器／过渡等)
    // 注册指令
    vue.directive('cp-focus', {
      bind () { },
      inserted(el, binding, vnode, oldVnode) {
        el.focus();
      },
      update () { },
      componentUpdated () { },
      unbind () { },
    });

    // 3. 注入组件(添加全局mixin方法)
    vue.mixin({
      methods: {
        greetingFn(name) {
          console.log(`hello，${name || vue.$myName}~`);
        },
      },
    });

    // 4. 添加实例方法
    vue.prototype.$instanceName = 'instanceName';
    vue.prototype.showName = (name) => {
      console.log(`My name is ${name}.`);
    };
  },

};
