<template>
  <ExpandableContextProvider
      :is-expanded="isExpanded"
      :toggle-expand="toggleExpand"
      :expand-direction="expandDirection"
      :expand-behavior="expandBehavior"
      :transition-duration="transitionDuration"
      :ease-type="easeType"
      :initial-delay="initialDelay"
  >
    <div
        ref="expandable"
        v-motion="motionProps"
        v-bind="$attrs"
    >
      <slot v-bind="{ isExpanded }"></slot>
    </div>
  </ExpandableContextProvider>
</template>

<script setup lang="ts">
import { ref, provide, watch, computed } from 'vue';


const props = defineProps({
  expanded: {
    type: Boolean,
    default: false
  },
  transitionDuration: {
    type: Number,
    default: 0.3
  },
  easeType: {
    type: String,
    default: 'easeInOut'
  },
  expandDirection: {
    type: String,
    default: 'vertical'
  },
  expandBehavior: {
    type: String,
    default: 'replace'
  },
  initialDelay: {
    type: Number,
    default: 0
  },
  onExpandStart: Function,
  onExpandEnd: Function,
  onCollapseStart: Function,
  onCollapseEnd: Function
});

const isExpanded = ref(props.expanded);

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
  console.log("Toggle Expand: ", isExpanded.value);
};

watch(isExpanded, (newValue) => {
  if (newValue) {
    props.onExpandStart?.();
  } else {
    props.onCollapseStart?.();
  }
});

// 提供上下文供子组件使用
provide('expandableContext', {
  isExpanded,
  toggleExpand,
  expandDirection: props.expandDirection,
  expandBehavior: props.expandBehavior,
  transitionDuration: props.transitionDuration,
  easeType: props.easeType,
  initialDelay: props.initialDelay
});

// 动画参数
const motionProps = computed(() => ({
  initial: {
    height: '0px'
  },
  animate: {
    height: isExpanded.value ? 'auto' : '0px'
  },
  transition: {
    duration: props.transitionDuration,
    ease: props.easeType,
    delay: props.initialDelay
  }
}));

</script>

<style scoped>
/* Add any必要的样式 */
</style>
