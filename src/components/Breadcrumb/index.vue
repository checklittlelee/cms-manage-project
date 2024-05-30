<template>
  <div>
    <el-breadcrumb separator="/">
      <!-- Vue3 中的内置组件 <TransitionGroup>，样式在 transform.less -->
      <TransitionGroup name="breadcrumb">
        <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
          <!-- v-if 判断是不是最后一项，不是最后一项点击可以跳转 -->
          <span v-if="index === levelList.length - 1">{{
            item.meta.title
          }}</span>
          <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
        </el-breadcrumb-item>
      </TransitionGroup>
    </el-breadcrumb>
  </div>
</template>

<script setup>
import { ref, watch } from "vue"
import { useRoute, useRouter } from "vue-router"

const route = useRoute()
const router = useRouter()

let levelList = ref([])

const isHome = (route) => {
  return route.meta.title.trim() === "首页"
}
// 面包屑数据来自路由，获取嵌套路由 页面栈
const getBreadcrumb = () => {
  let matched = route.matched.filter(
    (item) => item.meta && item.meta.title && !item.meta.breadcrumb,
  )
  // 判断当前路由是否为首页，如果不是首页，就拼接
  const first = matched[0]
  if (!isHome(first)) {
    matched = [{ path: "/home", meta: { title: "首页" } }].concat(matched)
  }
  levelList.value = matched
}

// 面包屑的跳转
const handleLink = (item) => {
  router.push(item.path)
}

// 监听路由变化，获取新的面包屑
watch(
  () => route.path,
  () => {
    getBreadcrumb()
  },
  { immediate: true },
)
</script>

<style lang="less" scoped></style>
