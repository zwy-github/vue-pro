<template>
  <div>
    <h1>生成挂载在body里面的弹窗</h1>
    <a-button @click="showCreate">打开Notice</a-button>
    <h1>树结构</h1>
    <Tree :data="treeData" />
  </div>
</template>
<script>
import Notice from "@components/Notice";
import Tree from "@components/Tree";
export default {
  name: "SimpleComp",
  data() {
    return {
      treeData: [
        { title: "标题1" },
        { title: "标题2" },
        {
          title: "标题3",
          children: [
            {
              title: "标题3-1",
            },
            {
              title: "标题3-2",
              children: [
                {
                  title: "标题3-2-1",
                },
                {
                  title: "标题3-2-2",
                },
                {
                  title: "标题3-2-3",
                },
              ],
            },
            {
              title: "标题3-3",
            },
          ],
        },
      ],
    };
  },
  components: {
    Notice,
    Tree,
  },
  methods: {
    showCreate() {
      const notice = this.$create(Notice, {
        title: "标题",
        duration: 10,
        message: "挂载到body的Notice详情",
      });
      notice.show();
    },
  },
};
</script>
<style lang="less" scoped>
h1 {
  margin-top: 24px;
}
</style>