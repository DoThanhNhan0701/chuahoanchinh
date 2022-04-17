const buyBtnsdk = document.querySelectorAll('.js-buy-dangnhap')
const modeldk = document.querySelector('.js-model-open')
const modelClosedk = document.querySelector('.js-model-close-dk')
const modelContainerdk = document.querySelector('.js-model-container-dk')

function showBuy(){
    modeldk.classList.add('open')
}
function hideBuy(){
    modeldk.classList.remove('open')
}
for(const buyBtndk of buyBtnsdk){
    buyBtndk.addEventListener('click', showBuy)
}
modelClosedk.addEventListener('click' , hideBuy)
modeldk.addEventListener('click', hideBuy)
modelContainerdk.addEventListener('click', function(event){
    event.stopPropagation()
})
