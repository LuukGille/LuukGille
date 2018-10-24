const scroll = document.querySelector('.know-more');

scroll.addEventListener('click', function() {
	document.getElementById('scroll').scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	});
});
