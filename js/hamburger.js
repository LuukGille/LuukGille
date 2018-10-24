const body = document.querySelector('body');
const theButton = document.querySelector('.navigation__hamburger');

theButton.addEventListener('click', function() {
	body.classList.toggle('navigation-is-active');
	theButton.classList.toggle('is-active');
});
