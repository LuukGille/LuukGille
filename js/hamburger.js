let body = document.querySelector('body');
let theButton = document.querySelector('.navigation__hamburger');

theButton.onclick = () => {
	body.classList.toggle('navigation-is-active');
	theButton.classList.toggle('is-active');
};