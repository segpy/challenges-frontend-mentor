const question = document.querySelectorAll('.question')
console.log(question);

question.forEach((item)=>{
    item.addEventListener('click', ev => {
        const active = document.querySelector('.active');
        if(active){
            active.classList.toggle('active')
        }
        if(active==item.parentNode){
            console.log(active==item.parentNode);
            active.classList.remove('active')
        }else{
            item.parentNode.classList.add('active');
        }
    })
})