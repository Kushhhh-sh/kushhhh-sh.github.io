//------------RESPONSIVE NAVBAR START------------------------

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

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close() {
    mainMenu.style.top = '-100%';
}

//------------RESPONSIVE NAVBAR END------------------------

//------------NAVBAR BG CHANGE ON SCROLL START-----------------

window.addEventListener('scroll', function () {
    let navbar = this.document.querySelector('nav');
    let windowPosition = window.scrollY > 80;
    if (windowPosition) {
        navbar.classList.add('scroll-active');
    } else {
        navbar.classList.remove('scroll-active');
    }
});

//------------NAVBAR BG CHANGE ON SCROLL END-----------------

//--------------------HOME PAGE JS START--------------------

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml9 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: false })
    .add({
        targets: '.ml9 .letter',
        scale: [0, 1],
        duration: 3000,
        elasticity: 600,
        delay: (el, i) => 45 * (i + 10)
    })

var typed = new Typed('.type', {
    strings: [
        'Designer',
        'Freelancer',
        'Web Developer',
        'Programmer'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});
//--------------------HOME PAGE JS END--------------------