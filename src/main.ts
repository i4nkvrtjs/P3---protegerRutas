import type { IUser } from "./types/IUser";

const userData = localStorage.getItem("userData");
const path = window.location.pathname;

console.log("PATH:", path);

if (!userData) {
	if (
		!path.includes("login.html") &&
		!path.includes("registro.html")
	) {
		window.location.href = "/src/pages/auth/login/login.html";
	}
} else {
	const user: IUser = JSON.parse(userData);

	if (path.includes("login.html")) {
		if (user.role === "admin") {
			window.location.href = "/src/pages/admin/home/home.html";
		} else {
			window.location.href = "/src/pages/client/home/home.html";
		}
	}

	if (path.includes("admin") && user.role !== "admin") {
		window.location.href = "/src/pages/client/home/home.html";
	}
}