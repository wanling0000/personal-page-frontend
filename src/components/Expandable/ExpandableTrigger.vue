<template>
  <!-- 这个 div 将触发展开/折叠，类似于 React 代码中的 onClick -->
  <div ref="triggerRef" @click="toggleExpand" class="cursor-pointer" v-bind="props">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { inject, ref, Ref } from 'vue';

// 定义 props，允许接收父组件传入的属性
const props = defineProps();

// 获取 Expandable 上下文中的 toggleExpand 函数
interface ExpandableContext {
  isExpanded: Ref<boolean>;
  toggleExpand: () => void;
  expandDirection: "vertical" | "horizontal";
}

const expandableContext = inject<ExpandableContext>('expandableContext');
if (!expandableContext) {
  throw new Error('ExpandableTrigger must be used within an Expandable context.');
}

const { toggleExpand } = expandableContext;

// 创建一个 ref 用于指向 DOM 元素
const triggerRef = ref<HTMLDivElement | null>(null);
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
