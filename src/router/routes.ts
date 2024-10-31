const routes = [
	{
		path: "/",
		redirect: "/index",
	},
	{
		name: "index",
		path: "/index",
		component: () => import("@/views/IndexPage/IndexPage.vue"),
		meta: { title: "Wanling's Playground" },
		children: [],
	},
	{
		name: "projectdetail",
		path: "/projectdetail/:id",
		component: () => import("@/views/Detail/Detail.vue"),
		meta: { title: "Project Details" },
		children: [],
	},
	{
		name: "practicedetail",
		path: "/practicedetail/:id",
		component: () => import("@/views/Detail/Detail.vue"),
		meta: { title: "Intern Details" },
		children: [],
	},
	{
		name: "404",
		path: "/404",
		meta: { title: "Oops! Page Lost in Space" },
		component: () => import("@/views/NotFound/NotFound.vue"),
	},
	//写在最底部，实现找不到路径跳转到404页面
	{
		path: "/:pathMatch(.*)",
		redirect: "/404",
	},
];

export default routes;
