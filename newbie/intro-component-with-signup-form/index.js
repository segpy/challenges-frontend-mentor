const form = document.querySelector('.form-element form');
const inputs = document.querySelectorAll('.field-group input')

console.log(inputs);

document.addEventListener('invalid', (function(){
    return function(e) {
      //prevent the browser from showing default error bubble / hint
      e.preventDefault();
      // optionally fire off some custom validation handler
      // myValidation();
    };
})(), true);

// form.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     inputs.forEach((input)=>{
//         console.log(input.type);
//         if(!input.value){
//             console.log(`Error en: ${input.ty}`);
//             console.log();
//             input.parentNode.classList.add('error')
//             input.nextElementSibling.classList.add('error')
//         }else {
//             input.nextElementSibling.classList.remove('error')
//             input.parentNode.classList.remove('error')
            
//             if(input.type == 'email'){
//             if(validateEmail(input.value)){
//                 input.nextElementSibling.classList.remove('error')
//                 input.parentNode.classList.remove('error')
//             }else{
//                 input.parentNode.classList.add('error')
//                 input.nextElementSibling.classList.add('error')
//             }
//             }
//         }
//     })
// })

const validateEmail = (email) => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    return String(email) 
      .toLowerCase()
      .match(re); // null if not found or an array with the match
  };

//check if the input is empty
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    inputs.forEach((input)=>{
        
        let valid = false;
        console.log(`Validando: ${input.id}`);
        if(input.id == 'email'){
            if(validateEmail(input.value)){
                console.log('valido');
                valid = true;
            }else{
                console.log('invalido');
                input.parentNode.classList.add('error')
                input.nextElementSibling.classList.add('error')
            }
        }else{
            if(!input.value){
                console.log('invalido');
                input.parentNode.classList.add('error')
                input.nextElementSibling.classList.add('error')
            }else{
                console.log('valido');
                valid = true;
            }
        }

        if(valid && input.parentNode.classList.contains('error')){
            input.parentNode.classList.remove('error')
            input.nextElementSibling.classList.remove('error')
        }
        console.log('------------------');
    })
})