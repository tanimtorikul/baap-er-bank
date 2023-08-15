// step 1: add click even handler with submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    // step 2: get the email inside the input field
    // always remember to use .value to get the text from input field
    const emailField = document.getElementById('user-input');
    const email = emailField.value; 
 
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value; 
   
    // Danger: do not verify email password on the client side
    if(email === 'torikul@gmail.com' && password === 'tanim'){
        window.location.href = 'bank.html'
    }
    else{
        window.alert('Your email and password is not correct')
    }
})