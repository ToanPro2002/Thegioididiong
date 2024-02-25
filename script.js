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

leftbtn.addEventListener("click", function() {
    index =index - 1
    if(index < 0){
        index = imgNumber.length-1  
    }
    document.querySelector('.slider-content-left-top').style.right = index *100+"%" 
})

const imgNumberLi = document.querySelectorAll('.slider-content-left-bottom li');
imgNumberLi.forEach(function(image, index){
    image.addEventListener("click", function(){
        removeActive()
        document.querySelector('.slider-content-left-top').style.right = index *100+"%" 
        image.classList.add("active")
    })
})

function removeActive (){
    let imgactive = document.querySelector('.active')
    imgactive.classList.remove("active")

}
// console.log(imgactive)
// slider 2 ----------------------------------------------------------------
function imgAuto(){
    index += 1
    if(index > imgNumber.length-1){
        index = 0
    }
    removeActive()
    document.querySelector('.slider-content-left-top').style.right = index *100+"%" 
    imgNumberLi[index].classList.add("active")
    
}
setInterval(imgAuto,5000)

// slider content items -------------
const right_items_btn = document.querySelector('.fa-solid.fa-chevron-right-two');
const left_items_btn = document.querySelector('.fa-solid.fa-chevron-left-two');
const imgNumberTwo = document.querySelectorAll('.slider-product-one-content-items');
// console.log(right_items_btn)
console.log(imgNumberTwo)

right_items_btn.addEventListener("click", function() {
    index =index +1
    if(index > imgNumberTwo.length-1){
        index = 0
    }
    document.querySelector('.slider-product-one-content-items-content').style.right = index *100+"%" 
})

left_items_btn.addEventListener("click", function() {
    index =index - 1
    if(index < 0){
        index = imgNumberTwo.length-1  
    }
    document.querySelector('.slider-product-one-content-items-content').style.right = index *100+"%" 
})


