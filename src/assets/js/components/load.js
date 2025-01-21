const preload = document.querySelector(".preload");
if (preload) {
	const body = document.querySelector("body");
	const stepAll = document.querySelectorAll(".step__list-inner");
	body.classList.add("preload_fixed");
	window.onload = function () {
		//preload.classList.add("--active");
		body.classList.remove("preload_fixed");

		preload.style.display = "none";

		if (stepAll.length > 0) {
			stepAll[0].classList.add("active");
		}
	};
}
