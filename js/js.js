const cartWrapper = document.querySelector('.cart-wrapper');
let page = document.querySelector('.page');
let themeButton = document.querySelector('#ddt');
const counter = counterWrapper.querySelector(`[data-counter]`);

themeButton.onclick = function() {
  page.classList.toggle('dark');
};

window.addEventListener(`click`,function(event){
    if (event.target.dataset.action === 'minus') {
        console.log(`minus`);
        const counterWrapper = event.target.closest ('.counter-wrapper');
        console.log(counterWrapper);
        const counter = counterWrapper.querySelector(`[data-counter]`);
        console.log(counter);
        if (parseInt(counter.innerText)>1) {
        counter.innerText = --counter.innerText;}
    }
    if (event.target.dataset.action === 'plus') {
        console.log(`plus`);
        const counterWrapper = event.target.closest ('.counter-wrapper');
        console.log(counterWrapper);
        const counter = counterWrapper.querySelector(`[data-counter]`);
        console.log(counter);
        counter.innerText = ++counter.innerText;
    }
    
});
$(document).ready(function() {
    $('.header-burger').click(function(event) {
        $('.header-burger,.header_menu').toggleClass('active');
        console.log('active');
    });
});
