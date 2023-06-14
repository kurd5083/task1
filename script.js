let categories_btn = document.querySelectorAll('.onclick');
let popup = document.querySelector('.popup');
let container = document.querySelector('.container')
for(let i = 0; i < categories_btn.length; i++){
categories_btn[i].addEventListener('click', function(){
    description[1].classList.add('hiden');
    revealBtn[1].classList.add('add-btn');
    if(popup.classList.contains('blur')){
        popup.classList.remove('blur')
    } else {
        popup.classList.add('blur')
    }

})
}
let description = document.querySelectorAll('.description');
let revealBtn = document.querySelectorAll('.reveal-btn');
console.log(description, revealBtn)
for(let i = 0; i < revealBtn.length; i++){
    revealBtn[i].addEventListener('click', function(){
        for(let j = 0; j < revealBtn.length; j++){
            if(description[j].classList.contains('hiden')){
                description[j].classList.remove('hiden');
            }
        }
        for(let j = 0; j < revealBtn.length; j++){
            if(revealBtn[j].classList.contains('add-btn')){
                revealBtn[j].classList.remove('add-btn');
            } else if (i !== j){

            }
        }
        revealBtn[i].classList.add('add-btn');
        description[i].classList.add('hiden');

    })
}

// let sliders_ico = document.querySelector('.sliders-ico');
// sliders_ico.addEventListener('click', function(){
//     if(popup.classList.contains('blur')){
//         popup.classList.remove('blur')
//     } else {
//         popup.classList.add('blur')
//     }
// })