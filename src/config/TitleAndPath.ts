/**
 * 锚点数组，每一个小页面的标题及其路径信息
 */
const titleAndPath = [
	{
		name: "Home",
		path: "#prod",
	},
	{
		name: "About",
		path: "#pre",
	},
	{
		name: "Projects",
		path: "#project",
	},
	{
		name: "Internship Experience",
		path: "#practice",
	},
	{
		name: "Contact Me",
		path: "#contract",
	},
	{
		name: "End",
		path: "#end",
	},
];

export default titleAndPath;

/**
 * 去掉首屏信息的锚点数组
 */
export const partTitleAndPath = titleAndPath.filter((_, index) => index !== 0);
