<template>
  <svg
    ref="svg"
    :style="styleSvg"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      d="M160 224a32 32 0 0 0-32 32v512a32 32 0 0 0 32 32h704a32 32 0 0 0 32-32V256a32 32 0 0 0-32-32H160zm0-64h704a96 96 0 0 1 96 96v512a96 96 0 0 1-96 96H160a96 96 0 0 1-96-96V256a96 96 0 0 1 96-96z"
    />
    <path
      fill="currentColor"
      d="M704 320a64 64 0 1 1 0 128 64 64 0 0 1 0-128zM288 448h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32zm0 128h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
    />
  </svg>
</template>
<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue'
const props = defineProps({
  size: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    defualt: '',
  },
  spin: {
    type: Boolean,
    default: false,
  },
  fill: {
    type: String,
    default: '',
  },
})
const svg = ref(null)
const styleSvg = ref<any>({ fill: 'red', width: '100px' })

watch(
  props,
  (newVal) => {
    const { size, color, spin, width, fill } = newVal
    const styleCss = {
      animation: spin ? 'loadingCircle 1s infinite linear' : undefined,
      fontSize: size ? size : undefined,
      width: width ? width : undefined,
      color: color,
      fill,
    }
    styleSvg.value = Object.assign({ ...styleCss })
  },
  { deep: true, immediate: true }
)
onMounted(() => {})
</script>
