<template>
  <div class="expandable-card" @click="toggleExpand">
    <div :class="['expandable-card-content', { expanded: isExpanded }]">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps} from 'vue';

const props = defineProps({
  isExpanded: Boolean,
});

const emit = defineEmits(['update:isExpanded']);

const isExpanded = ref(props.isExpanded);

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
  emit('update:isExpanded', isExpanded.value);
};
</script>

<style scoped>
.expandable-card {
  cursor: pointer;
  transition: all 0.3s ease;
}
.expandable-card-content {
  overflow: hidden;
  transition: max-height 0.3s ease;
}
.expandable-card-content.expanded {
  max-height: 500px; /* 展开时设置最大高度 */
}
</style>
