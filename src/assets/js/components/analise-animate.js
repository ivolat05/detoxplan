function analiseAnimate() {
	// здесь вставить ссылку на которую необходимо переходить со страницы теста
	const redirectLink = "result.html";
	const steps = document.querySelectorAll(".-steps");
	if (steps) {
		const btn = document.querySelector(".-step-btn-next");
		const totalSteps = steps.length;

		let progress = 0;

		function updateProgress() {
			if (progress <= 100) {
				const currentStepIndex = Math.floor(
					(progress / 100) * totalSteps
				);

				// Обновляем шаги
				steps.forEach((step, index) => {
					if (index < currentStepIndex) {
						step.classList.add("active"); // Шаг становится зелёным
					} else {
						step.classList.remove("active"); // Шаг серый
					}
				});

				progress++;

				if (progress == 100) {
					if (btn) {
						btn.classList.add("--active");
						// переход на страницу
						setTimeout(() => {
							window.location.replace(redirectLink);
						}, 3000);
						// переход на страницу
						btn.addEventListener("click", () => {
							window.location.replace(redirectLink);
						});
					}
				}
				setTimeout(updateProgress, 100); // Интервал анимации
			}
		}

		updateProgress();
	}
}
