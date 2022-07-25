function doPasswordsMatch(e) {
    
    // if the passwords match and the original password is valid, then set the confirmation field as valid
    if(originalPass.value === confirmPass.value && originalPass.validity.valid === true) {
        confirmPass.setCustomValidity("");
    }
    else {
        
        confirmPass.setCustomValidity("Passwords must match.");
    }
    
}

const confirmPass = document.querySelector("#confirmPass");
const originalPass = document.querySelector("#password");

originalPass.addEventListener("keyup", doPasswordsMatch);
confirmPass.addEventListener("keyup", doPasswordsMatch);