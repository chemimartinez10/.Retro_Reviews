const navButton = document.getElementById("navbutton");
const navAccesos = document.querySelector(".accesos");

navButton.addEventListener("click", () => {
	if (navAccesos.classList.contains("hidden")) {
		navAccesos.classList.remove("hidden");
	} else {
		navAccesos.classList.add("hidden");
	}
});
