const mobileImagesContainer = document.querySelector('.mobile__images');

mobileImagesContainer.addEventListener('click', event => {

	if (event.target.tagName !== 'IMG') return;

	event.target.classList.toggle('image-scale-null');
})


// once - анимация отрабатывает один раз
// disable: mobile - не будут анимации на девайсах
AOS.init({
	// disable: mobile,
	// once: true,
}); 
