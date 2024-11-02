<template>
  <div class="index-project-container" :class="{ 'dark-mode': theme === 'dark' }">
    <PartTitle :title="titleAndPath[2].name" class="title-project" />
    <div class="index-project-list" ref="projectList">
      <div class="outer-border" @click="toggleExpand('raffle')" :class="{ 'expanded-outer-border': isExpandedRaffle }">
        <ExpandableCard class="w-full relative" v-model:is-expanded="isExpandedRaffle">
          <template #default>
            <div
                class="basic-content dark:bg-gray-800"
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :enter="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 400, damping: 30, bounce: 0.2 } }"
                :duration="200"
            >
              <h3 class="font-semibold text-xl text-gray-800 dark:text-white text-center">
                Raffle Service for Marketing Platform
              </h3>

              <div v-show="!isExpandedRaffle" class="tech-stack">
                <img src="/img/java.png" alt="Java" />
                <img src="/img/SpringBoot.png" alt="Spring Boot" />
                <img src="/img/MyBatis.png" alt="MyBatis" />
                <img src="/img/mysql.png" alt="MySQL" />
                <img src="/img/redis.png" alt="Redis" />
                <img src="/img/react.png" alt="React" />
                <img src="/img/ts.svg" alt="TypeScript" />
              </div>
              <div
                  v-show="isExpandedRaffle"
                  class="expanded-content expanded-square"
                  v-motion
                  :initial="{ opacity: 0, height: 0, y: 20 }"
                  :enter="{ opacity: 1, height: 'auto', y: 0, transition: { type: 'spring', stiffness: 400, damping: 30, bounce: 0.2 } }"
                  :exit="{ opacity: 0, height: 0, y: 20, transition: { duration: 0.3 } }"
                  :duration="200"
              >
                <p>
                  <strong>Java, Spring Boot, MyBatis, MySQL, Redis, React, TypeScript</strong>
                </p>
                <p class="text-gray-800 dark:text-gray-200">
                  <a href="http://111.230.93.210:3000/?strategyId=100001" target="_blank" class="text-gray-800 dark:text-white">Click here to experience</a>
                </p>

                <ul class="mt-4 list-disc list-inside text-gray-800 dark:text-gray-200">
                  <li>Designed the domain model for the raffle process, divided into pre-draw, draw, and post-draw stages to enable dynamic features like audience filtering, inventory deduction, and fallback rewards, enhancing system flexibility.</li>
                  <li>Standardized raffle workflows using the Template design pattern and managed different stages with the Chain of Responsibility pattern, improving modularity and reusability.</li>
                  <li>Defined a unified API layer with modules for listeners, tasks, HTTP, and RPC calls, treating all actions as triggers, enhancing scalability and maintainability.</li>
                  <li>Optimized inventory deduction for peak traffic scenarios by implementing Redis decr for segmented consumption and a locking mechanism to prevent overselling. Improved efficiency by asynchronously updating successful transactions using queues and scheduled tasks, reducing database load.</li>
                  <li>Streamlined development using IntelliJ IDEA, WebStorm, Docker, MySQL, cloud servers, and SSH tools; successfully deployed to production, ensuring high availability and performance.</li>
                </ul>
              </div>
            </div>
          </template>
        </ExpandableCard>
      </div>
      <div class="outer-border" @click="toggleExpand('apartment')" :class="{ 'expanded-outer-border': isExpandedApartment }">
        <ExpandableCard class="w-full relative" v-model:is-expanded="isExpandedApartment">
          <template #default>
            <div
                class="basic-content dark:bg-gray-800"
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :enter="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 400, damping: 30, bounce: 0.2 } }"
                :duration="200"
            >
              <h3 class="font-semibold text-xl text-gray-800 dark:text-white text-center">
                Apartment Leasing Platform
              </h3>
              <div v-show="!isExpandedApartment" class="tech-stack">
                <img src="/img/java.png" alt="Java" />
                <img src="/img/SpringBoot.png" alt="Spring Boot" />
                <img src="/img/spring.png" alt="Spring MVC" />
                <img src="/img/mybatisplus.svg" alt="Mybatis Plus" />
                <img src="/img/mysql.png" alt="MySQL" />
                <img src="/img/redis.png" alt="Redis" />
                <img src="/img/minio.png" alt="MinIO" />
                <img src="/img/nginx.png" alt="Nginx" />
              </div>
              <div
                  v-show="isExpandedApartment"
                  class="expanded-content expanded-square"
                  v-motion
                  :initial="{ opacity: 0, height: 0, y: 20 }"
                  :enter="{ opacity: 1, height: 'auto', y: 0, transition: { type: 'spring', stiffness: 400, damping: 30, bounce: 0.2 } }"
                  :exit="{ opacity: 0, height: 0, y: 20, transition: { duration: 0.3 } }"
                  :duration="200"
              >
                <p>
                  <strong>Java, Spring Boot, Spring MVC, Mybatis Plus, MySQL, Redis, MinIO, Nginx</strong>
                </p>
                <p class="mt-4 text-gray-800 dark:text-gray-200">
                  Developed a mobile app and admin management system for an apartment leasing platform, enabling users to log in, search for apartments, schedule viewings, and manage leases, while enabling administrators to manage apartment listings, rental agreements, and user accounts.
                </p>
                <ul class="mt-4 list-disc list-inside text-gray-800 dark:text-gray-200">
                  <li>Implemented authentication using Spring Security and JWT, supporting password and SMS-based login, with custom interceptors and ThreadLocal for token validation and user session tracking.</li>
                  <li>Optimized response times by caching frequently accessed apartment details using Redis, reducing average response time by 70% under load testing.</li>
                  <li>Applied AOP for unified logging and global exception handling.</li>
                  <li>Generated RESTful API documentation using Swagger, integrated Knife4j to enhance the Swagger documentation, and performed unit testing on API endpoints with JUnit.</li>
                  <li>Deployed the platform on a CentOS environment, configuring MySQL and Redis, and setting up Nginx for efficient server management.</li>
                </ul>
              </div>
            </div>
          </template>
        </ExpandableCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import PartTitle from "@/components/PartTitle/PartTitle.vue";
import titleAndPath from "@/config/TitleAndPath";
import ExpandableCard from "@/components/Expandable/ExpandableCard.vue";
import setCss from "@/tools/setCss.ts";

const projectList = ref<HTMLElement | null>(null);
const isExpandedRaffle = ref(false);
const isExpandedApartment = ref(false);
const toggleExpand = (project: string) => {
  if (project === 'raffle') {
    if (isExpandedRaffle.value) {
      isExpandedRaffle.value = false;
    } else {
      isExpandedRaffle.value = true;
      isExpandedApartment.value = false;
    }
  } else if (project === 'apartment') {
    if (isExpandedApartment.value) {
      isExpandedApartment.value = false;
    } else {
      isExpandedApartment.value = true;
      isExpandedRaffle.value = false;
    }
  }
};

const theme = ref<"light" | "dark">("light");
const dayNight = localStorage.getItem("dayOrNight");
if (dayNight) {
  theme.value = dayNight === "day" ? "light" : "dark";
} else {
  theme.value = "light";
}

onMounted(() => {
  setCss(dayNight === "day");
});

const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark';
  localStorage.setItem("dayOrNight", theme.value === 'light' ? 'day' : 'night');
  setCss(theme.value === 'light');
};
</script>

<style scoped>

.index-project-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  min-height: 70vh;
  padding-top: 0px;
  background-color: var(--overall-background-color);
  color: var(--font-main-color);
}

.index-project-list {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  opacity: 1;
  width: 65vw;
  border-radius: 20px;
  transition: all 0.4s;
}

.outer-border {
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  position: relative;
  width: 15vw;
  height: 15vw;
  border: 1px solid var(--color-box-shadow);
  border-radius: 20px;
  transition: all 0.4s;
  user-select: none;
  cursor: pointer;
  background-color: var(--card-background);
}

.dark-mode .outer-border {
  box-shadow: 0px 0px 3vh var(--color-box-shadow);
  animation: show-up 1s ease-out 1 forwards;
}

@keyframes show-up {
  0% {
    top: 48%;
    box-shadow: none;
  }
  100% {
    top: 50%;
    box-shadow: 0px 0px 3vh var(--color-box-shadow);
  }
}

.expanded-outer-border {
  width: 45vw;
  height: auto;
  padding: 20px;
  margin-top: 30px;
  overflow: auto;
  max-width: 45vw;
  max-height: 70vh;
}

.basic-content {
  padding: 16px;
  background-color: var(--card-background);
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* Prevent content overflow */
}

.expanded-content {
  padding: 20px;
  font-size: 1rem;
  color: var(--font-main-color);
  line-height: 1.5;
  width: calc(100% - 40px);
  max-width: 100%;
  overflow: auto; /* 使内容在超出边界时显示滚动条 */
  max-height: 60vh; /* 限制高度，确保内容不会超出页面 */
}

.expanded-square {
  width: 100%;
  height: auto;
  max-height: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
  justify-content: center;
}

.tech-stack-text {
  font-size: 0.875rem;
  color: #666;
}

.tech-stack img {
  width: 36px;
  height: 36px;
}

/* 添加媒体查询以适应不同屏幕尺寸 */
@media screen and (max-width: 1024px) {
  .outer-border {
    width: 20vw;
    height: 20vw;
    padding: 10px;
  }
  .basic-content {
    padding: 12px;
  }
  .tech-stack img {
    width: 28px;
    height: 28px;
  }
}

@media screen and (max-width: 768px) {
  .outer-border {
    width: 25vw;
    height: 25vw;
    padding: 10px;
  }
  .basic-content {
    padding: 8px;
  }
  .tech-stack {
    display: none;
  }
}

@media screen and (max-width: 480px) {
  .outer-border {
    width: 35vw;
    height: 35vw;
    padding: 8px;
  }
  .basic-content {
    padding: 6px;
  }
  .tech-stack {
    display: none;
  }
}
</style>
