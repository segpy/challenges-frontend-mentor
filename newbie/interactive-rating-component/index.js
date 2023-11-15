const ratings = document.querySelectorAll('.options span')
let rate = document.getElementById('rate');
const subBtn = document.getElementById('submit-btn')
console.log(ratings);

ratings.forEach((item) => {
    item.addEventListener('click', (ev)=>{
        const activeElement = document.querySelector('.checked')
        if (activeElement){
            activeElement.classList.remove('checked')
        }
        item.classList.add('checked')
        rate.innerHTML = item.innerHTML;
    })
})

subBtn.addEventListener('click', (ev)=>{
    const card = document.querySelector('.card-rate')
    card.classList.add('hidden')
    const newCard = document.querySelector('.card-thanks')
    newCard.classList.remove('hidden')

})