<template>
  <div class="marquee-container"
       :style="{ animationDuration: duration + 'ms' }"
       @mouseenter="handlePause"
       @mouseleave="handlePlay"
       ref="marquee">
    <div
        :class="['marquee-content', { 'reverse': reverse, 'vertical': vertical } ]"
        :style="{ '--gap': gap + 'rem', animationDirection: reverse ? 'reverse' : 'normal' }"
    >
      <div v-for="i in repeat" :key="i" class="marquee-item">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  className: String,
  reverse: Boolean,
  pauseOnHover: Boolean,
  vertical: Boolean,
  repeat: {
    type: Number,
    default: 4,
  },
  duration: {
    type: Number,
    default: 40000,
  },
  gap: {
    type: Number,
    default: 1,
  }
});

const marquee = ref<HTMLElement | null>(null);

function handlePause() {
  if (props.pauseOnHover && marquee.value) {
    marquee.value.style.animationPlayState = 'paused';
  }
}

function handlePlay() {
  if (props.pauseOnHover && marquee.value) {
    marquee.value.style.animationPlayState = 'running';
  }
}
</script>

<style scoped>
.marquee-container {
  display: flex;
  overflow: hidden;
  padding: 1rem;
  width: 100%;
  --duration: 40s;
  --gap: 1rem;
}

.marquee-content {
  display: flex;
  gap: var(--gap);
  animation: marquee var(--duration) linear infinite;
  width: 100%;
  flex-wrap: wrap; /* 允许卡片换行 */
  animation-play-state: running;
}

.marquee-content.reverse {
  animation-direction: reverse;
}

.marquee-content.vertical {
  flex-direction: column;
  animation: marquee-vertical var(--duration) linear infinite;
  animation-play-state: running;
}

.marquee-item {
  flex: 1 1 calc(25% - var(--gap)); /* 将卡片宽度调整为四列布局以自适应显示 */
  box-sizing: border-box;
  margin-bottom: var(--gap);
}

.card {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  width: 100%;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - var(--gap)));
  }
}

@keyframes marquee-vertical {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(calc(-100% - var(--gap)));
  }
}
</style>
