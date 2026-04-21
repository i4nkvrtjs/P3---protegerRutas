export const navigate = (route: string) => {
	if (window.location.pathname === route) return;
	window.location.href = route;
};