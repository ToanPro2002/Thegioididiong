const addressbtn = document.querySelector('#address-form')
const addressclose = document.querySelector('#address-close')

addressbtn.addEventListener("click", function() {
    document.querySelector('.address-form').style.display = "flex"
})
addressclose.addEventListener("click", function() {
    document.querySelector('.address-form').style.display = "none"
})
    // StylePropertyMap.d

// slider------------------------

const rightbtn = document.querySelector('.fa-solid.fa-chevron-right');
const leftbtn = document.querySelector('.fa-solid.fa-chevron-left');

let index = 0;
const imgNumber = document.querySelectorAll('.slider-content-left-top img');

rightbtn.addEventListener("click", function() {
    index =index +1
    if(index > imgNumber.length-1){
        index = 0
    }
    document.querySelector('.slider-content-left-top').style.right = index *100+"%" 
})
// console.log(index)
leftbtn.addEventListener("click", function() {
    index =index - 1
    if(index < 0){
        index = imgNumber.length-1
    }
    document.querySelector('.slider-content-left-top').style.right = index *100+"%" 
})