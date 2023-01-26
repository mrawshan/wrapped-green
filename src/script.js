'strict mode';

const nav = document.querySelector('nav');
const hamburgerBtnOpen = document.querySelector('.hamburger-btn-open');
const hamburgerBtnClose = document.querySelector('.hamburger-btn-close');
const navItems = document.querySelector('.nav-items');

// Funtion to open navigation
const openNav = function (e) {
	e.target.classList.toggle('hide');
	nav.classList.toggle('open-nav');
	navItems.classList.toggle('hide-in-500px');
	navItems.classList.toggle('nav-on-mob');
};

nav.addEventListener('click', function (e) {
	if (e.target.classList.contains('hamburger-btn-open')) {
		openNav(e);
		hamburgerBtnClose.classList.toggle('hide');
	} else if (e.target.classList.contains('hamburger-btn-close')) {
		openNav(e);
		hamburgerBtnOpen.classList.toggle('hide');
	}
});
