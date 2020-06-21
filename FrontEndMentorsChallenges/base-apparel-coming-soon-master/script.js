const input=document.querySelector('.formInput');
const form=document.getElementById('form');
const small=document.querySelector('small');
const button=document.getElementById('btn');

button.addEventListener('click',()=>{

   checkEmail(input);
   
})

function checkEmail(x){
   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if(re.test(x.value)){
      input.classList.add('success');
   }else{
      small.classList='error';
   }
}