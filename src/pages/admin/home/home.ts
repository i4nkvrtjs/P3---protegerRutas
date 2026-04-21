import { checkAuthUser, logout } from "../../../utils/auth";

const buttonLogout = document.getElementById("logoutButton") as HTMLButtonElement | null;

if (buttonLogout) {
	buttonLogout.addEventListener("click", () => {
		logout();
	});
}

const initPage = (): void => {
	console.log("Inicio de página admin");

	checkAuthUser(
		"/src/pages/auth/login/login.html",      
		"/src/pages/client/home/home.html",      
		"admin"                                  
	);
};

initPage();