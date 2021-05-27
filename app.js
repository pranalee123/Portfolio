const sectionHeader = document.querySelector('.section1_header');
const closeMenu = document.querySelector('.closemenu');
const openMenu = document.querySelector('.openmenu');



openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
    sectionHeader.style.display = 'flex';
    sectionHeader.style.top = '0';

}

function close() {
    sectionHeader.style.top = '-100%';
}

show();
close();