const mobileNavOpen = document.querySelector('.mobile-nav__open');
const mobileNav = document.querySelector('.header__main-nav');

mobileNavOpen.addEventListener('click', () => {
    mobileNavOpen.classList.toggle('active');
    mobileNav.classList.toggle('active')});

