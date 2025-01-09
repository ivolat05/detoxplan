const paralaxAnimBloclk = document.querySelectorAll(".anim-block-1");
const paralaxAnimBloclkTwo = document.querySelectorAll(".anim-block-2");
const paralaxAnimBloclkThree = document.querySelectorAll(".anim-block-3");

paralaxAnimation(paralaxAnimBloclk, 0.01, 1, -1);
paralaxAnimation(paralaxAnimBloclkTwo, 0.01, -1, -1);
paralaxAnimation(paralaxAnimBloclkThree, 0.001, -1, 1);
/**
 * Анимация параллакса для элементов на странице с использованием GSAP.
 *
 * @param {HTMLElement[]} animationElementAll - Массив элементов, которые нужно анимировать.
 * @param {number} [amplitude=0.01] - Амплитуда параллакса, определяет степень смещения элементов. Чем больше значение, тем сильнее эффект.
 * @param {number} [orientirX=1] - Направление смещения по оси X относительно курсора. Может быть `1` (стандартное направление) или `-1` (инверсия).
 * @param {number} [orientirY=1] - Направление смещения по оси Y относительно курсора. Может быть `1` (стандартное направление) или `-1` (инверсия).
 */

function paralaxAnimation(
	animationElementAll,
	amplitude = 0.01,
	orientirX = 1,
	orientirY = 1
) {
	if (animationElementAll && animationElementAll.length > 0) {
		let requestId = null;

		document.addEventListener("mousemove", (e) => {
			const mouseX = e.clientX;
			const mouseY = e.clientY;

			if (!requestId) {
				requestId = requestAnimationFrame(() => {
					animationElementAll.forEach((animationElement) => {
						gsap.to(animationElement, {
							x:
								orientirX *
								(mouseX - window.innerWidth / 2) *
								amplitude,
							y:
								orientirY *
								(mouseY - window.innerHeight / 2) *
								amplitude,
							ease: "power2.out",
							duration: 0.3,
						});
					});
					requestId = null;
				});
			}
		});
	}
}

// main animation

const trigerPromo = document.querySelector(".promo");
const promoBoxAnimate = document.querySelectorAll(".promo__list-inner");
if (trigerPromo && promoBoxAnimate) {
	const promoAnimategroup = gsap.timeline({
		scrollTrigger: {
			trigger: trigerPromo,
			start: "top 90%",
		},
	});

	promoBoxAnimate.forEach((box) => {
		promoAnimategroup.fromTo(
			box,
			{
				y: "100%",
				opacity: 0,
			},
			{
				y: "0",
				opacity: 1,
				duration: 0.5,
			}
		);
	});
}

const trigerTerm = document.querySelector(".term__row");
const termBoxAnimate = document.querySelectorAll(".term__row-inner");
if (trigerTerm && termBoxAnimate) {
	const termAnimategroup = gsap.timeline({
		scrollTrigger: {
			trigger: trigerTerm,
			start: "top 90%",
		},
	});

	termBoxAnimate.forEach((box) => {
		termAnimategroup.fromTo(
			box,
			{
				y: "-100%",
				opacity: 0,
				scale: 0,
			},
			{
				y: "0",
				opacity: 1,
				duration: 0.5,
				scale: 1,
			}
		);
	});
}

// plan

const trigerPlan = document.querySelector(".plan__wrapp");
const planBoxAnimate = document.querySelectorAll(".plan__number-inner");
const planBoxAnimateTwo = document.querySelectorAll(".plan__faza-inner");
if (trigerPlan && planBoxAnimate) {
	const planAnimategroup = gsap.timeline({
		scrollTrigger: {
			trigger: trigerPlan,
			start: "top 90%",
		},
	});

	planBoxAnimate.forEach((box) => {
		planAnimategroup.fromTo(
			box,
			{
				x: "-100%",
				opacity: 0,
			},
			{
				x: "0",
				opacity: 1,
				duration: 0.7,
			}
		);
	});
	planBoxAnimateTwo.forEach((box) => {
		planAnimategroup.fromTo(
			box,
			{
				x: "100%",
				opacity: 0,
			},
			{
				x: "0",
				opacity: 1,
				duration: 0.7,
			}
		);
	});
}

// received

const trigerReceived = document.querySelector(".received__wrapp");
const receivedBoxAnimate = document.querySelector(".received__wrapp-container");
const receivedBtnAnimate = document.querySelectorAll(".received-btn");
if (trigerReceived && receivedBoxAnimate && receivedBtnAnimate) {
	const receivedAnimategroup = gsap.timeline({
		scrollTrigger: {
			trigger: trigerReceived,
			start: "top 90%",
		},
	});

	receivedAnimategroup.fromTo(
		receivedBoxAnimate,
		{
			y: "-100%",
			scale: 0,
			opacity: 0,
		},
		{
			y: "0",
			opacity: 1,
			duration: 0.7,
			scale: 1,
		}
	);
	receivedBtnAnimate.forEach((btn, index) => {
		receivedAnimategroup.fromTo(
			btn,
			{
				x: index % 2 ? "100%" : "-100%",
				opacity: 0,
			},
			{
				x: "0",
				opacity: 1,
				duration: 0.3,
			}
		);
	});
}

//dreams

const trigerDreams = document.querySelector(".dreams");
const dreamsBoxAnimates = document.querySelectorAll(".dreams-list-inner");

if (trigerDreams && dreamsBoxAnimates) {
	const dreamsAnimategroup = gsap.timeline({
		scrollTrigger: {
			trigger: trigerDreams,
			start: "top 90%",
		},
	});
	dreamsBoxAnimates.forEach((btn, index) => {
		dreamsAnimategroup.fromTo(
			btn,
			{
				x: index % 2 ? "100%" : "-100%",
				opacity: 0,
			},
			{
				x: "0",
				opacity: 1,
				duration: 0.8,
			}
		);
	});
}

// reviews
const trigerReviews = document.querySelector(".reviews ");
const ReviewsBox = document.querySelector(".reviews-swiper-container");

if (trigerReviews && ReviewsBox) {
	gsap.fromTo(
		ReviewsBox,
		{
			y: "100%",
			opacity: 0,
		},
		{
			y: "0",
			opacity: 1,
			duration: 1,
			scrollTrigger: {
				trigger: trigerReviews,
				start: "top 50%",
			},
		}
	);
}

//questions

const trigerQuestions = document.querySelector(".questions");
const questionsBoxAnimates = document.querySelectorAll(".questions-list-inner");

if (trigerQuestions && questionsBoxAnimates) {
	const questionsAnimategroup = gsap.timeline({
		scrollTrigger: {
			trigger: trigerQuestions,
			start: "top 90%",
		},
	});
	questionsBoxAnimates.forEach((btn, index) => {
		questionsAnimategroup.fromTo(
			btn,
			{
				y: "100%",
				opacity: 0,
			},
			{
				y: "0",
				opacity: 1,
				duration: 0.8,
			}
		);
	});
}
