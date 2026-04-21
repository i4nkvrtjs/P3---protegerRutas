import type { IUser } from "../../../types/IUser";
import { navigate } from "../../../utils/navigate";

const form = document.getElementById("registro-form") as HTMLFormElement;

const getInputValue = (id: string): string =>
	(document.getElementById(id) as HTMLInputElement).value;

// se crea un admin por default
const seedAdmin = () => {
	const users: IUser[] = JSON.parse(localStorage.getItem("users") || "[]");

	const existeAdmin = users.some(u => u.role === "admin");

	if (!existeAdmin) {
		users.push({
			email: "admin@admin.com",
			password: "admin",
			role: "admin",
		});
		localStorage.setItem("users", JSON.stringify(users));
	}
};

seedAdmin();

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const users: IUser[] = JSON.parse(localStorage.getItem("users") || "[]");

	const email = getInputValue("email");

    //evitar duplicado
	const existe = users.some(u => u.email === email);

	if (existe) {
		alert("Usuario ya existe");
		return;
	}

	const newUser: IUser = {
		email,
		password: getInputValue("password"),
		role: "client",
	};

	users.push(newUser);

	localStorage.setItem("users", JSON.stringify(users));

	alert("Usuario registrado");

	navigate("/src/pages/auth/login/login.html");
});