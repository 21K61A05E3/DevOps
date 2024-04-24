function submitForm(event){
    event.preventDefault();

    var username= document.getElementById('username').value;
    var email=document.getElementById('email').value;
    var password= document.getElementById('password').value;
    var phone=document.getElementById('phone').value;
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
function validatePhone(phone){
    const phoneRegex=/^\d{10}$/;
    if(!phoneRegex.test(phone)){
        alert('Invalid phone number. Please enter a 10-digit number.');
        return false;
    }
    return true;
}