<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible>
      <div class="logo" />
      <Menu />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          <SimpleComp />
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        可有可无的页脚～～～～ 2021-10-27
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import Menu from "../Menu";
import SimpleComp from "../Modules/SImpleComp";
export default {
  data() {
    return {
      collapsed: false,
    };
  },
  components: {
    Menu,
    SimpleComp,
  },
};
</script>
<style>
/* 为啥此处用 <style lang='less' scoped> 失效????? */
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>