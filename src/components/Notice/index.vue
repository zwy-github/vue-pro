<template>
  <div v-show="isShow" class="z_notice">
    <h1>{{ title }}</h1>
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  props: {
    title: {
      type: String,
      default: "标题",
    },
    message: {
      type: String,
      default: "描述",
    },
    duration: {
      type: Number,
      default: 5, // 默认5秒关闭，值为0则不自动关闭，默认手动关闭
    },
  },
  methods: {
    show() {
      this.isShow = true;
      if (!this.duration) return;
      setTimeout(() => {
        this.hide()
      }, this.duration*1000);
    },
    hide() {
      this.isShow = false;
      this.remove();
    },
  },
};
</script>

<style lang="less" scoped>
    .z_notice {
        position: fixed;
        background: #ffa;
        z-index: 999;
        top: 20px;
        left: 200px;
        div {
            color: red;
        }
    }
</style>