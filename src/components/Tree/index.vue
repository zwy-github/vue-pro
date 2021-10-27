<template>
  <div>
    <ul>
      <Item
        class="item"
        v-for="(item, index) in list"
        :key="index"
        :data="item"
      />
    </ul>
  </div>
</template>

<script>
import Item from "./Item";
import { cloneDeep } from 'lodash-es'
export default {
  name: "Tree",
  components: {
    Item,
  },
  data() {
    return {
      list: [],
    };
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    renderData(data) {
      return data.map((v) => {
        if (v?.children?.length) {
          // 如果有子节点，配置可折叠标示
          v.isFolder = true;
          // 如果没有值，默认为折叠
          v.fold = v.fold ? !0 : !1;
          // 继续往下递归
          this.renderData(v.children);
          return v;
        } else {
          return v;
        }
      });
    },
  },
  watch: {
    data: {
      handler: function (data) {
        // 初始化数据,深度拷贝后子组件修改都在this.list里生效
        this.list = cloneDeep(this.renderData(data))
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style lang='less' scoped>
</style>