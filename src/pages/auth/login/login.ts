import type { IUser } from "../../../types/IUser";
import { navigate } from "../../../utils/navigate";

const form = document.getElementById("form") as HTMLFormElement;
const registerBtn = document.getElementById("goToRegister");

registerBtn?.addEventListener("click", () => {
	navigate("/src/pages/auth/registro/registro.html");
});

const getInputValue = (id: string): string =>
	(document.getElementById(id) as HTMLInputElement).value;

const getUsers = (): IUser[] =>
	JSON.parse(localStorage.getItem("users") || "[]");

const setSession = (user: IUser): void =>
	localStorage.setItem("userData", JSON.stringify(user));

form.addEventListener("submit", (e: SubmitEvent) => {
	e.preventDefault();

	const email = getInputValue("email");
	const password = getInputValue("password");
	const users = getUsers();

	const user = users.find(
		u => u.email === email && u.password === password
	);

	if (!user) {
		alert("Credenciales incorrectas");
		return;
	}

	setSession(user);

	if (user.role === "admin") {
		navigate("/src/pages/admin/home/home.html");
	} else {
		navigate("/src/pages/client/home/home.html");
	}
});