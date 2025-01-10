
// vendor
--include('vendor/gsap.min.js')
--include('vendor/just-validate.production.min.js')
--include('vendor/lenis.min.js')
--include('vendor/ScrollToPlugin.js')
--include('vendor/ScrollTrigger.min.js')

--include('vendor/inputmask.min.js')
--include('vendor/swiper-bundle.min.js')
--include('vendor/htmlRootLock.js')
--include('vendor/htmlRootUnlock.js')
--include('vendor/modal.js')

// components
--include('components/mask-phone.js')
--include('components/animation.js')
--include('components/scroll.js')
--include('swipers/swiper.js')
--include('components/counter.js')
--include('components/accordion.js')
--include('components/validation.js')
--include('components/timer.js')
--include('components/load.js')

function updateBMI(bmi) {
	const arrow = document.querySelector('.bmi-arrow');
	const bmiValue = document.querySelector('.bmi-value');
	const bmiDescription = document.querySelector('.bmi-description');
	if(!bmi)return;
	let position = 0;
	let description = '';


	if (bmi <= 16) {
	  position = (bmi / 16) * 16.67;
	  description = 'Выраженный дефицит массы тела';
	} else if (bmi <= 18.5) {
	  position = 16.67 + ((bmi - 16) / (18.5 - 16)) * 16.67;
	  description = 'Недостаточная масса тела';
	} else if (bmi <= 24.99) {
	  position = 33.34 + ((bmi - 18.5) / (24.99 - 18.5)) * 16.67;
	  description = 'Норма';
	} else if (bmi <= 30) {
	  position = 50.01 + ((bmi - 24.99) / (30 - 24.99)) * 16.67;
	  description = 'Избыточная масса тела';
	} else if (bmi <= 35) {
	  position = 66.68 + ((bmi - 30) / (35 - 30)) * 16.67;
	  description = 'Ожирение';
	} else if (bmi <= 40) {
	  position = 83.35 + ((bmi - 35) / (40 - 35)) * 16.67;
	  description = 'Ожирение резкое';
	} else {
	  position = 100;
	  description = 'Очень резкое ожирение';
	}

	if(!arrow)return;
	arrow.style.left = `${position}%`;

	bmiValue.textContent = bmi.toFixed(2);
	if(!bmiDescription)return;
	bmiDescription.textContent = description;
  }


  updateBMI(27.35);
