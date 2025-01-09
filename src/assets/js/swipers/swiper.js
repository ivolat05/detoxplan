const reviewsSwiper = document.querySelector(".reviews-swiper");
const reviewsSwiperConfig = {
	slidesPerView: 4,
	spaceBetween: 10,
	loop: true,
	preventClicks: true,
	threshold: 15,
	touchRatio: 0.3,
	preventClicksPropagation: false,
	navigation: {
		nextEl: ".reviews__slide-prev",
		prevEl: ".reviews__slide-next",
	},

	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 40,
		},
		600: {
			slidesPerView: 2,
			spaceBetween: 15,
		},
		660: {
			slidesPerView: 2,
			spaceBetween: 30,
		},

		998: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
};

/**
 * Функция для инициализации Swiper
 * @param {HTMLElement} swiperElement - Элемент DOM для Swiper
 * @param {Object} config - Конфигурация для Swiper
 */
function swiperInstal(swiperElement, config) {
	if (swiperElement) {
		try {
			new Swiper(swiperElement, config);
		} catch (error) {
			console.error("Failed to initialize Swiper:", error);
		}
	}
}

swiperInstal(reviewsSwiper, reviewsSwiperConfig);
