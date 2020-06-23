const formInput=document.querySelector('.formInput');
const button=document.getElementById('btn');
const small=document.querySelector('.small');
const sign=document.querySelector('.sign')


button.addEventListener('click',(e)=>{
    e.preventDefault()
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(formInput.value) && formInput.value!==''){
        showSuccess();
    }else{
        showError();
}
});

function showError(){
    formInput.value=''
    formInput.focus();
    const form=formInput.parentElement;
    form.className='form error';
    small.className='small error'
}
function showSuccess(){
    small.className='small';
    const form=formInput.parentElement;
    form.className='form';
}
