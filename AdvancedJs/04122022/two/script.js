const grey_div = document.querySelector('.grey');
const white_div = document.querySelector('.white');
const blue_div = document.querySelector('.blue');
const yellow_div = document.querySelector('.yellow');
const main_div = document.querySelector('body');

grey_div.addEventListener("click", function(){
    main_div.style.backgroundColor = 'grey';
})
white_div.addEventListener("click", function(){
    main_div.style.backgroundColor = 'white';
})
blue_div.addEventListener("click", function(){
    main_div.style.backgroundColor = 'blue';
})
yellow_div.addEventListener("click", function(){
    main_div.style.backgroundColor = 'yellow';
})
