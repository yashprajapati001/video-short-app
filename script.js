let loader = document.querySelector('#preloader');
let header = document.querySelector('header');
header.style.visibility='hidden'

window.addEventListener('load',function(){
    header.style.visibility='visible'
    loader.style.display = 'none'

})