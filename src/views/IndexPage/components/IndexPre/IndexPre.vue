<template>
  <div class="index-prev-container">
    <PartTitle :title="titleAndPath[1].name" class="media-title" />
    <div class="basic-pre-container" ref="leftContainer">
      <p class="can-title">Tech Stack</p>
      <!-- 使用 Vue3Marquee 来展示卡片，并嵌套在 3D 卡片中，三行内容同时播放 -->
      <Vue3Marquee
          :pause-on-hover="true"
          :clone="true"
          direction="normal"
          :duration="120"
          @on-pause="playState = 'paused'"
          @on-resume="playState = 'playing'"
      >
        <div class="review-card" v-for="tech in firstRow" :key="tech.img">
          <figure class="review-card-figure">
            <img :src="tech.img" class="tech-img" />
            <figcaption class="tech-caption">
              {{ tech.description }}
            </figcaption>
          </figure>
        </div>
      </Vue3Marquee>
      <Vue3Marquee
          :pause-on-hover="true"
          :clone="true"
          direction="reverse"
          :duration="120"
          @on-pause="playState = 'paused'"
          @on-resume="playState = 'playing'"
      >
        <div class="review-card" v-for="tech in secondRow" :key="tech.img">
          <figure class="review-card-figure">
            <img :src="tech.img" class="tech-img" />
            <figcaption class="tech-caption">
              {{ tech.description }}
            </figcaption>
          </figure>
        </div>
      </Vue3Marquee>
      <Vue3Marquee
          :pause-on-hover="true"
          :clone="true"
          direction="normal"
          :duration="120"
          @on-pause="playState = 'paused'"
          @on-resume="playState = 'playing'"
      >
        <div class="review-card" v-for="tech in thirdRow" :key="tech.img">
          <figure class="review-card-figure">
            <img :src="tech.img" class="tech-img" />
            <figcaption class="tech-caption">
              {{ tech.description }}
            </figcaption>
          </figure>
        </div>
      </Vue3Marquee>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import PartTitle from '@/components/PartTitle/PartTitle.vue';
import titleAndPath from '@/config/TitleAndPath';
import useVisible from '@/hooks/useVisible';
import use3DCard from '@/hooks/use3Dcard';

const leftContainer = ref<HTMLElement | null>(null);

// 调用useVisible钩子，实现添加进入可视区域后的动画
useVisible(leftContainer, {
  onIntersect: () => {
    leftContainer.value?.classList.add("box-left-ani");
  },
});

onMounted(() => {
  use3DCard(leftContainer);
});

const playState = ref('playing')

const techSkills = [
  { img: '/img/java.png', description: 'Java' },
  { img: '/img/python.png', description: 'Python' },
  { img: '/img/JS.png', description: 'JavaScript' },
  { img: '/img/ts.svg', description: 'Typescript' },
  { img: '/img/H5.png', description: 'HTML' },
  { img: '/img/css3.png', description: 'CSS' },
  { img: '/img/mysql.png', description: 'MySql' },
  { img: '/img/spring.png', description: 'Spring MVC' },
  { img: '/img/SpringBoot.png', description: 'Spring Boot' },
  { img: '/img/MyBatis.png', description: 'MyBatis' },
  { img: '/img/redis.png', description: 'Redis' },
  { img: '/img/react.png', description: 'React' },
  { img: '/img/vite.svg', description: 'Vite' },
  { img: '/img/git.png', description: 'Git' },
  { img: '/img/docker.png', description: 'Docker' },
  { img: '/img/linux.svg', description: 'Linux' },
  { img: '/img/jenkins.png', description: 'Jenkins' },
  { img: '/img/postman.svg', description: 'Postman' }
]

const firstRow = techSkills.slice(0, Math.ceil(techSkills.length / 3));
const secondRow = techSkills.slice(Math.ceil(techSkills.length / 3), Math.ceil(2 * techSkills.length / 3));
const thirdRow = techSkills.slice(Math.ceil(2 * techSkills.length / 3));
</script>

<style scoped>
.index-prev-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 90vh;
  background-color: transparent;
  overflow: hidden;
}

.basic-pre-container {
  opacity: 0;
  width: 60vw;
  height: 60vh;
  border-radius: 10px;
  background: var(--card-bg-color);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transition: all 0.4s;
  border: 1px solid var(--color-box-shadow);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: space-evenly;
  overflow: hidden;
}

.review-card {
  flex: 0 0 auto;
  margin: 0.6rem 1.5rem; /* 调整左右卡片之间的间距，保持行间距较小 */
}

.review-card-figure {
  width: 100px;
  height: 100px; /* 使卡片为正方形 */
  cursor: pointer;
  overflow: hidden;
  border-radius: 1rem;
  border: 1px solid var(--color-box-shadow);
  background-color: var(--card-bg-color);
  padding: 0.1rem; /* 缩小内边距以减小行距 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease; /* 移除背景色变更效果 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.tech-img {
  width: 80%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 0.02rem; /* 进一步减小图片与描述之间的留白 */
}

.tech-caption {
  text-align: center;
  font-size: 0.7rem;
  line-height: 1; /* 缩小文字行距 */
}

.review-card-figure:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* 移除背景色变更效果，仅保留阴影变化 */
}

.can-title {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
  font-weight: 400;
  color: var(--font-main-color);
  font-size: max(1.2vw, 1.1rem);
  user-select: none;
}

.box-left-ani {
  animation: show-up-left 1.3s ease-out 1 forwards;
}

.media-title {
  user-select: none;
}

/* 动画效果 */
@keyframes show-up-left {
  0% {
    opacity: 0;
    box-shadow: none;
    transform: translateX(-20vw);
  }
  50% {
    opacity: 1;
    box-shadow: none;
    transform: translateX(0);
  }
  100% {
    opacity: 1;
    box-shadow: 0px 0px 3vh var(--color-box-shadow);
  }
}
</style>
