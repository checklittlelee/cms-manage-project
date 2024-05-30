<template>
  <div class="app-wrapper">
    <!-- 左侧菜单栏 -->
    <Sidebar class="sidebar-container" />
    <!-- 顶部导航栏 -->
    <Navbar />
    <!-- 内容显示区域 -->
    <AppMain />
  </div>
</template>

<script setup>
import { Sidebar, Navbar, AppMain } from "@/components"
</script>

<style lang="less" scoped>
.app-wrapper {
  &:after {
    content: "";
    display: table;
    clear: both;
  }

  position: relative;
  height: 100%;
  width: 100%;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

// .drawer-bg {
//   background: #000;
//   opacity: 0.3;
//   width: 100%;
//   top: 0;
//   height: 100%;
//   position: absolute;
//   z-index: 999;
// }

// .fixed-header {
//   position: fixed;
//   top: 0;
//   right: 0;
//   z-index: 9;
//   width: calc(100% - 220px);
//   transition: width 0.28s;
// }

// .hideSidebar .fixed-header {
//   width: calc(100% - 54px);
// }

// .mobile .fixed-header {
//   width: 100%;
// }
// #app .hideTree {
//   margin-left: 0 !important; // 隐藏左侧菜单
// }
</style>
