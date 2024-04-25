function submitForm(event){
    event.preventDefault();

    var username= document.getElementById('username').value;
    var email=document.getElementById('email').value;
    var password= document.getElementById('password').value;
    if(!validateUsername(username)||!validateEmail(email)||!validatePassword(password)){
        return;
    }
    const formData={username,email,password,phone};
    console.log('Form submitted with data : ',formData);
}
function validateEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        alert('Invalid email format');
        return false;
    }
    return true;
}
function validatePassword(password){
    if(password.length<6){
        alert('Password must be atleast 6 characters long');
        return false;
    }
    return true;
}
