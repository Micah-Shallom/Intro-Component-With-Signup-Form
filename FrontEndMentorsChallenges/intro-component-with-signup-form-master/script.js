var title=document.querySelector('.title')
var subtitle=document.querySelector('.subtitle')
var pos=-500;
var posLeft=-500;

document.body.onload=function(){
    var id=setInterval(frame,2);
    function frame(){
        if(pos==0||posLeft==0){
            clearInterval(id);

        }else{
            pos++;
            posLeft++;
            title.style.top=pos+'px';
            subtitle.style.left=posLeft+'px'
        }
    }
}

const form=document.getElementById('form')
const firstname=document.getElementById('firstName');
const lastname=document.getElementById('lastName');
const email=document.getElementById('email');
const password=document.getElementById('password');

function showError(input,message){
    const form=input.parentElement;
    form.className='formControl error'
    const small=form.querySelector('small');
    small.innerText=message;
}

function showSuccess(input){
    const form=input.parentElement;
    form.className='formControl'
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkAllInputFields([firstname,lastname,email,password]);
    checkEmail(email);
})

const checkAllInputFields=(arr)=>{
    arr.forEach(input=>{
        if(input.value===''&&input.value!=null){
            showError(input,`${input.placeholder} cannot be empty`)
        }else{
            showSuccess(input);
        }
    })
}

const checkEmail=(input)=>{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value)){
        showSuccess(input);
    }else{
        showError(input,`Looks like this is not a valid email`);
    }
}