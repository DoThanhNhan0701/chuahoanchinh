const buyBtns = document.querySelectorAll('.js-buy-tickkets')
const model = document.querySelector('.js-model')
const modelClose = document.querySelector('.js-model-close')
const modelContainer = document.querySelector('.js-model-container')
function showBuy(){
    model.classList.add('open')
}
function hideBuy(){
    model.classList.remove('open')
}
for(const buyBtn of buyBtns){
    buyBtn.addEventListener('click', showBuy)
}
modelClose.addEventListener('click' , hideBuy)
model.addEventListener('click', hideBuy)
modelContainer.addEventListener('click', function(event){
    event.stopPropagation()
})