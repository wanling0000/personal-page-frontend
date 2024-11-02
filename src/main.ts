import { createApp } from 'vue';
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import '@/assets/css/main.css';
import '@/assets/css/variable.css';
import 'element-plus/dist/index.css'
import '@/assets/css/message.css';
import App from '@/App.vue';
import router from '@/router/index.ts';
import './index.css';
import Vue3Marquee from 'vue3-marquee';
import { MotionPlugin } from '@vueuse/motion'

const app = createApp(App);


// 注册路由
app.use(router);
app.use(Vue3Marquee);
app.use(MotionPlugin)

// element-plus
app.use(ElementPlus);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 最后挂载
app.mount('#app');