const sectionHeader = document.querySelector('.section1_header');
const closeMenu = document.querySelector('.closemenu');
const openMenu = document.querySelector('.openmenu');
const headerLinks = document.querySelectorAll('.section1_header__link');

const show = () => {
    sectionHeader.style.display = 'flex';
    sectionHeader.style.top = '0';
}

const close = () => {
    sectionHeader.style.top = '-100vh';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
headerLinks.forEach((l) => { l.addEventListener('click', close) })

show();
close();