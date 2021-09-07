const mainMenu = document.querySelector('.mainMenu');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');

const homeBtn = document.querySelector('.homeBtn');
const aboutBtn = document.querySelector('.aboutBtn');
const projectsBtn = document.querySelector('.projectsBtn');
const contactBtn = document.querySelector('.contactBtn');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
homeBtn.addEventListener('click', close)
aboutBtn.addEventListener('click', close)
projectsBtn.addEventListener('click', close)
contactBtn.addEventListener('click', close)

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close(){
    mainMenu.style.top = '-100%';
}