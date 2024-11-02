<template>
  <div ref="footerRef" :class="['flex items-center p-4 pt-0', className]" v-bind="restProps">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';

// 使用 defineProps() 并直接解构属性
const { className, ...restProps } = defineProps<{
  className?: string;
  [key: string]: any; // 允许解构其余的任意属性
}>();

// 创建 ref 用于引用 DOM 元素
const footerRef = ref<HTMLDivElement | null>(null);
</script>

<style scoped>
.flex {
  display: flex;
}
.items-center {
  align-items: center;
}
</style>
