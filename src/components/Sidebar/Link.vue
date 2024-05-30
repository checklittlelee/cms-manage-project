<template>
  <component :is="linkProps(to).is" v-bind="linkProps(to)">
    <slot />
  </component>
</template>

<script setup>
import { Validator } from "@bigbighu/cms-utils"

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
})

// 区分当前链接为外部还是内部
const linkProps = (url) => {
  if (Validator.isExternal(url)) {
    // 是外部链接
    return {
      is: "a",
      href: url,
      target: "_blank",
    }
  } else {
    // 是内部链接
    return {
      is: "router-link",
      to: url,
    }
  }
}
</script>
