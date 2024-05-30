<!-- 一级菜单、多级菜单处理 -->
<template>
  <!-- item.hidden 来自返回的数据，如果是true，表示要隐藏不显示 -->
  <div v-if="!item.hidden" class="menu-wrapper">
    <!-- 一级菜单(没有子菜单)，分为外部和内部 -->
    <template
      v-if="
        hasOneShowingChild(item.children, item) &&
        (!onlyOneChild.children || onlyOneChild.noShowingChildren) &&
        !item.alwaysShow
      "
    >
      <app-link
        v-if="item.redirect != 'noRedirect' && onlyOneChild.meta"
        :to="resolvePath(onlyOneChild.path)"
      >
        <el-menu-item
          :index="resolvePath(onlyOneChild.path)"
          class="submenu-title-noDropdown"
        >
          <el-icon><Tickets /></el-icon>
          {{ onlyOneChild.meta.title }}
        </el-menu-item>
      </app-link>
    </template>
    <!-- 多级菜单：递归 -->
    <el-sub-menu v-else :index="resolvePath(item.path)">
      <template #title>
        <Item :icon="item.meta && item.meta.icon" :title="item.meta.title" />
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      ></sidebar-item>
    </el-sub-menu>
  </div>
</template>

<script setup>
import path from "path-browserify"
import { ref } from "vue"
import AppLink from "./Link.vue"
import Item from "./item.vue"
import { Validator } from "@bigbighu/cms-utils"

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  basePath: {
    type: String,
    default: "",
  },
})

const onlyOneChild = ref("")

// 判断当前菜单是否包含子菜单
const hasOneShowingChild = (children = [], parent) => {
  const showingChildren = children.filter((item) => {
    if (item.hidden) {
      return false
    } else {
      return true
    }
  })
  if (showingChildren.length === 0) {
    onlyOneChild.value = { ...parent, path: "", noShowingChildren: true }
    return true
  }
  return false
}

// index为menu-item唯一标识，选择路径作为index属性的值
const resolvePath = (routePath) => {
  // 判断链接是否存在
  if (Validator.isExternal(routePath)) {
    return routePath
  }
  // 如果不存在，判断父级菜单的路径，如果父级存在，就用父级
  if (Validator.isExternal(props.basePath)) {
    return props.basePath
  }
  // 如果父级也不存在，进行拼接
  return path.resolve(props.basePath, routePath)
}
</script>

<style lang="less" scoped>
#app .hideSidebar .el-submenu > .el-submenu__title .iconfont {
  margin-left: 18px;
}
#app .el-menu-item {
  display: flex;
  align-items: center;
}
#app .el-menu-item [class^="el-icon-"] {
  font-size: 20px;
}
</style>
