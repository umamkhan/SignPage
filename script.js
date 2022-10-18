const form = document.getElementById('form');
const username = document.getElementById('username');

const password = document.getElementById('password');


form.addEventListener('submit', (event) =>{
    event.preventDefault();

    Validate();
})







function Validate(){
    const usernameVal = username.value.trim();
    
   
    const passwordVal = password.value.trim();
   

    //username
    if(usernameVal === ""){
        setErrorMsg(username, 'first name cannot be blank');
    }
    else if(usernameVal.length <=2){
        setErrorMsg(username, 'min 3 char');
    }
    else{
        setSuccessMsg(username);
    }



   

   

    //password
    if(passwordVal === ""){
        setErrorMsg(password, 'password cannot be blank');
    }
    else if(passwordVal.length <= 7){
        setErrorMsg(password, 'min 8 char');
    }
    else{
        setSuccessMsg(password);
    }

  


}

function setErrorMsg(input, errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}

function setSuccessMsg(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}
