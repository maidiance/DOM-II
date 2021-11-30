import './less/index.less'

// Your code goes here!

// Mouseenter
const introHeader = document.querySelector('.intro');
const headerP = introHeader.querySelector('p');
headerP.addEventListener('mouseenter', function(){
    //console.log('headerP');
    headerP.style.fontStyle = 'italic';
    headerP.style.backgroundColor = 'chocolate';
    headerP.style.color = 'linen';
});
// Mouseleave
headerP.addEventListener('mouseleave', function(){
    headerP.style.fontStyle = null;
    headerP.style.backgroundColor = null;
    headerP.style.color = 'black';
});


// Keydown
const contentSection = document.querySelector('.content-section');
const letsgo = contentSection.querySelector('.text-content');
document.addEventListener('keydown', function(event){
    //console.log('letsgo');
    if(event.key === 'p' || event.code === 'KeyP'){
        letsgo.style.backgroundColor = 'MediumPurple';
    }
});

// Select
const letsgoP = letsgo.querySelector('p');
letsgoP.addEventListener('select', function(event){
    event.preventDefault();
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    console.log('selected:', selection);
    if(selection.toLowerCase() === 'adventure'){
        letsgoP.style.color = 'PowderBlue';
    }
    event.stopPropagation();
});

// Dblclick
const letsgoTitle = letsgo.querySelector('h2');
letsgoTitle.addEventListener('dblclick', function(){
    letsgoTitle.style.color = 'PaleTurquoise';
});

// Click and PreventDefault
const nav = document.querySelector('nav');
const homeLink = nav.querySelector('.nav-link');
homeLink.addEventListener('click', function(event){
    event.preventDefault();
    homeLink.style.color = 'PeachPuff';
});

// Wheel
const introWelcome = introHeader.querySelector('h2');
introWelcome.addEventListener('wheel', function(){
    introWelcome.style.color = 'Violet';
});

const h1 = document.querySelector('h1');
// Drag
document.addEventListener('drag', function(){
    h1.style.color = 'SkyBlue';
});
// Drop
document.addEventListener('drop', function(){
    h1.style.backgroundColor = 'Salmon';
});

// Copy
document.addEventListener('copy', function(){
    nav.style.backgroundColor = 'Indigo';
    nav.style.color = 'GhostWhite';
});

// Paste
document.addEventListener('paste', function(){
    letsgoTitle.style.backgroundColor = 'RoyalBlue';
});