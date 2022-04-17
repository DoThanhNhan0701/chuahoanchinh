const stars = document.querySelectorAll('.js__like--icon')
const jsstar = document.querySelector('.js__open--star')
const closeStar = document.querySelector('.home__product--items-like-icon-nolike')
function showStar(){
    jsstar.classList.add('home__product--items-like-liked')
}
function hideStar(){
    jsstar.classList.remove('home__product--items-like-liked')
}
for(const star of stars){
    star.addEventListener('click', showStar)
}
closeStar.addEventListener('click', hideStar)
