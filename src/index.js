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
    console.log('letsgo');
    if(event.key === 'p' || event.code === 'KeyP'){
        letsgo.style.backgroundColor = 'MediumPurple';
    }
});

// Select
letsgo.addEventListener('select', function(event){
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    if(selection.toLowerCase() === 'adventure'){
        letsgo.style.color = 'PowderBlue';
    }
});