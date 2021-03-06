const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const submitError = document.getElementById("submit-error");

function validateName(){
    let name = document.getElementById("contact-name").value;
if(name.length ==0){
    nameError.innerText="Name is required";
    return false;
}
if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerText = "Write Full Name";
    return false;
}
nameError.innerText='<i class="fa-solid fa-circle-check"></i>';
return true;
}

function validatePhone() {
  let phone = document.getElementById("contact-phone").value;
  if (phone.length !== 10) {
    phoneError.innerText = "Phone is required";
    return false;
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerText = "Only digits please";
    return false;
  }
  phoneError.innerText = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}


function validateEmail() {
  let email = document.getElementById("contact-email").value;
  if (email.length == 0) {
    emailError.innerText = "Email is required";
    return false;
  }
  if (!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerText = "Email Invalid";
    return false;
  }
  emailError.innerText = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateMessage(){
  let message = document.getElementById("contact-message").value;
  let required=30;
  let left=required - message.length;

  if(left > 0){
    messageError.innerText = left + "More characters required";
    return false;
  }
  messageError.innerText = '<i class="fa-solid fa-circle-check"></i>';
}

function  validateForm(){
  if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage());
  submitError.style.display="block";
  submitError.innerText = "Pleas fix error to submit";
  setTimeout(function(){submitError.style.display="none";},3000);
  return false;
}