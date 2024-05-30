<!-- 内容显示区域 -->
<template>
  <section class="app-main">
    <!-- <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition> -->

    <router-view />
  </section>
</template>

<script setup></script>

<style lang="less" scoped>
.app-main {
  /* 50= navbar  50  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: auto;
  padding: 10px 10px 10px 10px;
  background: #f1cbcb;
  box-shadow: inset 0px 0px 6px 2px rgba(0, 0, 0, 0.15);
}
</style>
