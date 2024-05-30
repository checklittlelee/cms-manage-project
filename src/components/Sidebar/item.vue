<template>
  <div>
    <el-icon :name="icon"></el-icon>
    <span v-if="title">{{ title }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  icon: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
})
</script>

<style lang="less" scoped>
.iconfont {
  font-size: 18px;
  color: #bfcbd9;
}
</style>
