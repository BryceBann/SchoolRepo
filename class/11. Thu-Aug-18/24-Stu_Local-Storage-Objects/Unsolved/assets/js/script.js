var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  let submission;
  // TODO: Create user object from submissio
  submission = {
     firstName: firstNameInput.value,
     lastName: lastNameInput.value,
     email: emailInput.value,
     pass: passwordInput.value,
 }
 console.log(submission)
  // TODO: Set new submission to local storage 
    localStorage.setItem("submission", submission.value) //not completed
  
  
});
