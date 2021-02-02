const form=document.getElementById('form');
const pin=document.getElementById('pin');
const password=document.getElementById('password');
const confirmPassword=document.getElementById('password2');
const email=document.getElementById('email');


//when form is submited

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    checkInputs();
   
})


function checkInputs(){

    //get value from the inputs

    const pinValue=pin.value.trim();
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();
    const confirmpasswordValue=confirmPassword.value.trim();
    confirmpasswordValue

    //check to see if inputs have a value
    if(pinValue==''){
        ///show error
        //add error class

        setErrorFor(pin,'PIN cannot be blank')
    }else{
        //add success class
        setSuccessFor(pin);
    }
    
    
    if(emailValue==''){
        setErrorFor(email,'Email cannot be blank')
    }else if(!validateEmail(emailValue)){
        setErrorFor(email,'Email is not valid');
    }else{
        setSuccessFor(email);
    }
    if(passwordValue===''){

        setErrorFor(password,'Password cannot be blank')

    }else if(passwordValue.length>7){
       
        setSuccessFor(password)
    }else{
        setErrorFor(password,'Password must be at leaset 8 characters')
    }

    if(confirmpasswordValue==""){
        setErrorFor(confirmPassword,'Password cannot be blank')
    }else if(passwordValue==confirmpasswordValue){
        setSuccessFor(confirmPassword);
    }else{
        setErrorFor(confirmPassword,'passwords must match')}
        if(usernameValue.classList.contains("success")&&emailValue.classList.contains("success")&&passwordValue.classList.contains("success")&&confirmpasswordValue.classList("success")){
            alert("GODD!")
        }

    
    


 
}

function setErrorFor(input,message){
    const formControl=input.parentElement; //.form-control 
    const small=formControl.querySelector('small');


    //add error message insside small
    formControl.className='form-control error';

    small.innerText=message;

}

function setSuccessFor(input){
    const formControl=input.parentElement;
    const small=formControl.querySelector('small');
   
    //add success message

    
    formControl.className='form-control success';
    
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}