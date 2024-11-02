<template>
  <div
      ref="headerRef"
      class="flex flex-col space-y-1.5 p-6"
  >
    <!-- Layout without animations -->
    <div class="flex justify-between items-start">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';

// Using defineProps and destructure properties
const { className } = defineProps<{
  className?: string;
  [key: string]: any;
}>();

// Create ref for DOM element
const headerRef = ref<HTMLDivElement | null>(null);
</script>

<style>
.flex {
  display: flex;
}
.items-start {
  align-items: flex-start;
}
.space-y-1.5 {
  margin-top: 0.375rem;
  margin-bottom: 0.375rem;
}
.p-6 {
  padding: 1.5rem;
}
</style>
