<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import PracticeList from "@/components/PracticeList/PracticeList.vue";
import PartTitle from "@/components/PartTitle/PartTitle.vue";
import LeftOrRightArrow from "@/components/LeftOrRightArrow/LeftOrRightArrow.vue";
import titleAndPath from "@/config/TitleAndPath";
import { debounce } from "lodash";

const practices = ref<
	{
		imgPath: string;
		imgAlt: string;
		companyName: string;
    location: string;
		jobName: string;
		time: string;
		detailPath: string;
		show: boolean;
	}[]
>([
	{
		imgPath: "/img/galway.jpg",
		imgAlt: "University of Galway",
    companyName:"University of Galway",
    location: "Galway, Ireland",
		jobName: "Teaching Assistant for Software Engineering II module",
		time: "Sep 2024 - Present",
		detailPath: "/practicedetail/ta",
		show: true,
	},
	{
		imgPath: "/img/zhongkezhiyun.jpg",
		imgAlt: "IntelliCloud",
		companyName: "China Science IntelliCloud Technology Co., Ltd.",
    location: "Chengdu, China",
		jobName: "AI Product Manager",
		time: "May 2024 - Aug 2024",
		detailPath: "/practicedetail/pm",
		show: true,
	},
]);
// 实现按钮点击切换逻辑
const index = ref<number>(0);
function changeShow(lor: boolean) {
	practices.value[index.value].show = false;
	if (lor) {
		// 左
		if (index.value - 1 < 0) {
			index.value = practices.value.length - 1;
		} else {
			--index.value;
		}
	} else {
		// 右
		if (index.value + 1 >= practices.value.length) {
			index.value = 0;
		} else {
			++index.value;
		}
	}
	practices.value[index.value].show = true;
}
// 根据视口大小初始化展示情况
function initShow() {
	if (window.innerWidth <= 850) {
		practices.value.forEach((item, index) => {
			if (index !== 0) {
				item.show = false;
			}
		});
	} else {
		practices.value.forEach((item) => {
			item.show = true;
		});
	}
}
const initShowDe = debounce(initShow, 300);
onMounted(() => {
	initShow();

	window.addEventListener("resize", initShowDe);
});
onUnmounted(() => {
	initShowDe.cancel(); // 取消防抖任务
	window.removeEventListener("resize", initShowDe);
});
</script>

<template>
	<div class="index-practice-container">
		<PartTitle :title="titleAndPath[3].name" class="media-title" />
		<LeftOrRightArrow
			left-or-right="left"
			class="not-see"
			style="margin-left: 10px"
			@click="changeShow(true)"
		/>
		<PracticeList :practices="practices" />
		<LeftOrRightArrow
			left-or-right="right"
			class="not-see"
			style="margin-right: 10px"
			@click="changeShow(false)"
		/>
	</div>
</template>

<style scoped>
.media-title {
	user-select: none;
}

.not-see {
	display: none;
}

.index-practice-container {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 90vh;
	background-color: transparent;
}

@media screen and (max-width: 850px) {
	.media-title::before {
		content: "";
		position: absolute;
		left: -2vh;
		width: 8%;
		height: 100%;
		background-color: var(--scroll-block-color);
	}

	.not-see {
		display: block;
	}
}
</style>
