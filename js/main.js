// Input Elements
var nameInput = document.getElementById("nameInput");
var emailInput = document.getElementById("emailInput");
var phoneInput = document.getElementById("phoneInput");
// Error Pargraph Elements
var nameErrorPar = document.getElementById("nameErrorMessage");
var emailErrorPar = document.getElementById("emailErrorMessage");
var phoneErrorPar = document.getElementById("phoneErrorMessage");
// Submit Button
var submitBtn = document.getElementById("submitBtn");

function validateInputs() {
    var name = nameInput.value;
    var email = emailInput.value;
    var phone = phoneInput.value;
    var validStatus = true;

    nameErrorPar.style.visibility = "hidden";
    emailErrorPar.style.visibility = "hidden";
    phoneErrorPar.style.visibility = "hidden";

    if(name == "") {
        nameErrorPar.textContent = "Name * Required..";
        nameErrorPar.style.visibility = "visible";
        validStatus = false;
    }
    if(email == "") {
        emailErrorPar.textContent = "Email * Required..";
        emailErrorPar.style.visibility = "visible";
        validStatus = false;
    } 
    else if(!(validateEmail(email))) {
        emailErrorPar.textContent = "Please Enter Valid Email.."
        emailErrorPar.style.visibility = "visible";
        validStatus = false;
    }

    if(phone == "") {
        phoneErrorPar.textContent = "Phone * Required..";
        phoneErrorPar.style.visibility = "visible";
        validStatus = false;
    } 
    else if(!(validatePhone(phone))) {
        phoneErrorPar.textContent = "Phone must be 11 digit..";
        phoneErrorPar.style.visibility = "visible";
        validStatus = false;
    }

    if(validStatus) {
        console.log('Every Things Okky');
    } 
    else
    console.log('ERRORRRRRRR');
}
submitBtn.addEventListener('click',function(event) {
    event.preventDefault();
    validateInputs();
});



