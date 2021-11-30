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
letsgo.addEventListener('keydown', function(event){
    //console.log(event.key);
    if(event.key === 'p'){
        letsgo.style.backgroundColor = 'MediumPurple';
    }
});