<template>
  <li>
    <div>
      {{ data.title }}
      <span @click="toggle" v-if="data.isFolder">{{
        data.fold ? "-" : "+"
      }}</span>

      <ul v-if="data.isFolder" v-show="data.fold">
        <Item
          class="item"
          v-for="(item, index) in data.children"
          :key="index"
          :data="item"
        />
      </ul>
    </div>
  </li>
</template>

<script>
export default {
  name: "Item", // 必须写才能自己调用自己
  data() {
    return {};
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    toggle() {
      if (this.data.isFolder) {
        this.data.fold = !this.data.fold;
      }
    },
  },
};
</script>

<style lang='less' scoped>
</style>