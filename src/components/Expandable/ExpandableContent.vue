<template>
  <!-- 使用 v-motion 指令在 div 上实现动画效果 -->
  <div
      ref="cardRef"
      v-motion="motionProps"
      class="expandable-card cursor-pointer"
      @mouseenter="handleHoverStart"
      @mouseleave="handleHoverEnd"
  >
    <div
        class="grid grid-cols-1 rounded-lg sm:rounded-xl md:rounded-[2rem]
             shadow-[inset_0_0_1px_1px_#ffffff4d] sm:shadow-[inset_0_0_2px_1px_#ffffff4d]
             ring-1 ring-black/5 max-w-[calc(100%-1rem)] sm:max-w-[calc(100%-2rem)] md:max-w-[calc(100%-4rem)]
             mx-auto w-full transition-all duration-300 ease-in-out"
    >
      <div class="grid grid-cols-1 rounded-lg sm:rounded-xl md:rounded-[2rem] p-1 sm:p-1.5 md:p-2 shadow-md shadow-black/5">
        <div class="rounded-md sm:rounded-lg md:rounded-3xl bg-white p-2 sm:p-3 md:p-4 shadow-xl ring-1 ring-black/5">
          <div class="w-full h-full overflow-hidden">
            <div ref="measureRef" class="flex flex-col h-full">
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, nextTick, inject, Ref } from 'vue';
import { useMotion } from '@vueuse/motion';

// 定义 props
const props = defineProps({
  collapsedSize: {
    type: Object,
    default: () => ({ width: 320, height: 211 })
  },
  expandedSize: {
    type: Object,
    default: () => ({ width: 480, height: undefined })
  },
  hoverToExpand: {
    type: Boolean,
    default: false
  },
  expandDelay: {
    type: Number,
    default: 0
  },
  collapseDelay: {
    type: Number,
    default: 0
  },
  keepMounted: {
    type: Boolean,
    default: false
  }
});

// 定义 ExpandableContext 接口来描述注入对象的类型
interface ExpandableContext {
  isExpanded: Ref<boolean>;
  toggleExpand: () => void;
  expandDirection: "vertical" | "horizontal";
}

// 从上下文中获取展开状态和函数
const expandableContext = inject<ExpandableContext>('expandableContext', {
  isExpanded: ref(false),
  toggleExpand: () => {},
  expandDirection: 'vertical'
});

// 通过明确类型，现在可以安全地访问这些属性
const isExpanded = expandableContext.isExpanded;
const toggleExpand = expandableContext.toggleExpand;
const expandDirection = expandableContext.expandDirection;

// 使用 ref 绑定卡片和测量的 DOM 元素，并为它们添加类型注解
const cardRef = ref<HTMLDivElement | null>(null);
const measureRef = ref<HTMLDivElement | null>(null);
const measuredWidth = ref(0);
const measuredHeight = ref(0);

// 动态测量内容的高度和宽度
const updateMeasurements = () => {
  if (measureRef.value) {
    measuredWidth.value = measureRef.value.scrollWidth;
    measuredHeight.value = measureRef.value.scrollHeight;
  }
};

// 在组件挂载时测量内容的高度和宽度
onMounted(() => {
  updateMeasurements();
  nextTick(updateMeasurements);
});

// 计算 v-motion 指令需要的动画属性
const motionProps = computed(() => ({
  initial: {
    width: `${props.collapsedSize.width}px`,
    height: `${props.collapsedSize.height}px`
  },
  animate: {
    width:
        expandDirection === 'vertical'
            ? `${props.collapsedSize.width}px`
            : `${isExpanded.value ? props.expandedSize.width : props.collapsedSize.width}px`,
    height:
        expandDirection === 'horizontal'
            ? `${props.collapsedSize.height}px`
            : `${isExpanded.value ? measuredHeight.value + 'px' : props.collapsedSize.height + 'px'}`
  },
  transition: {
    type: 'spring',
    stiffness: 200,
    damping: 20,
    bounce: 0.2
  }
}));

// 处理鼠标悬停事件
const handleHoverStart = () => {
  if (props.hoverToExpand && !isExpanded.value) {
    setTimeout(toggleExpand, props.expandDelay);
  }
};

const handleHoverEnd = () => {
  if (props.hoverToExpand && isExpanded.value) {
    setTimeout(toggleExpand, props.collapseDelay);
  }
};
</script>

<style scoped>
.expandable-card {
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}
</style>
