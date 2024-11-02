<template>
  <div ref="contentRef" :class="['p-6 pt-0 px-4 overflow-hidden flex-grow', className]" v-bind="restProps">
    <!-- 使用 v-motion 实现内容部分的布局动画 -->
    <div v-motion="{ layout: true }">
      <slot></slot>
    </div>
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
const contentRef = ref<HTMLDivElement | null>(null);
</script>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
</style>
