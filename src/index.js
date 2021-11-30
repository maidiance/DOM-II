import './less/index.less'

// Your code goes here!

// Mouseover
const introHeader = document.querySelector('.intro');
const headerP = introHeader.querySelector('p');
headerP.addEventListener('mouseover', function(){
    console.log('headerP');
    headerP.setAttribute('border-style', 'double')
    headerP.setAttribute('border-color', 'purple');
    headerP.setAttribute('border-width', '5px');
});

// Keydown
//const 