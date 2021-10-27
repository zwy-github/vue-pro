import Vue from 'vue'
// 创建指定组件实例并挂载到body上
export default function create(component, props) {
    // 创建一个vue实例
    const vm = new Vue({
        render(h) {
            // render方法提供了一个h函数，可渲染VNode
            return h(component, { props })
        }
    }).$mount(); // 更新操作
    // 通过$children获取组件实例
    const comp = vm.$children[0]
    // 追加至body
    document.body.appendChild(vm.$el);
    //清理函数
    comp.remove = () => {
        document.body.removeChild(vm.$el);
        vm.$destroy()
    }
    // 返回组件实例
    return comp;
}
