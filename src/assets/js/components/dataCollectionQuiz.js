function dataCollectionQuiz() {
	const btnAll = document.querySelectorAll(".step__parameters-btn");

	if (btnAll) {
		btnAll.forEach((btn) => {
			btn.addEventListener("click", () => {
				const wrapp = document.querySelector(".step__parameters");
				const allInputChecked = document.querySelectorAll(
					'input[type="checkbox"], input[type="radio"]'
				);
				if (!wrapp) return;

				const allInput = wrapp.querySelectorAll("input");
				const urlParams = new URLSearchParams(window.location.search);
				const polValue = urlParams.get("pol");
				let dataQuiz = {};
				dataQuiz["pol"] = polValue ? polValue : "w";

				allInput.forEach((input) => {
					const name = input.name.trim();
					const value = input.value.trim();
					if (name && value) {
						dataQuiz[name] = value;
					}
				});

				allInputChecked.forEach((input) => {
					if (!input.checked) return; // Пропускаем, если input не отмечен

					let name = input.name.trim();
					const value = input.value.trim();

					if (name && value) {
						// Проверяем существование группы и добавляем значения
						if (dataQuiz[name]) {
							// Если уже есть массив, добавляем новое значение
							if (Array.isArray(dataQuiz[name])) {
								dataQuiz[name].push(value);
							} else {
								// Если не массив, преобразуем в массив
								dataQuiz[name] = [dataQuiz[name], value];
							}
						} else {
							// Если группы еще нет, создаем массив для чекбоксов, иначе сохраняем значение
							dataQuiz[name] =
								input.type === "checkbox" ? [value] : value;
						}
					}
				});

				localStorage.removeItem("quizData");
				localStorage.setItem("quizData", JSON.stringify(dataQuiz));
			});
		});
	}
}
dataCollectionQuiz();
