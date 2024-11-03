import request from "@/config/request.ts";

export default function sendEmail(data: {
	name: string;
	email: string;
	message: string;
}) {
	return request({
		url: `http://34.251.157.179:7921/sendemail`,
		method: "POST",
		data,
	});
}
