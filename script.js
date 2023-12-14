
function calculateCalories() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const age = parseFloat(document.getElementById("age").value);

  if (isNaN(weight) || isNaN(height) || isNaN(age)) {
    alert("Please enter valid values for weight, height, and age.");
    return;
  }

  // Formula for calculating basal metabolic rate (BMR)
  const bmr = 10 * weight + 6.25 * height - 5 * age + 5;

  document.getElementById(
    "result"
  ).innerHTML = `Your estimated daily calorie needs: <b>${bmr} calories</b>`;
}

function getname(){
  document.getElementById("firstName").innerHTML=sessionStorage.getItem("firstName");

}

function validate() {
  event.preventDefault();
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var mobileNo = document.getElementById("mobileNo").value;
  var email = document.getElementById("email").value;

  
 

if(firstName==''){
  document.getElementById("message").innerHTML = "First Name field should not be left empty!";
}
else if (firstName.length < 3) {

  document.getElementById("message").innerHTML = "First Name should have at least 3 characters.";

}

else if(lastName==""){
  document.getElementById("message").innerHTML = "Last Name field should not be left empty!";
}
else if (lastName.length < 3) {
  document.getElementById("message").innerHTML = "Last Name should have at least 3 characters.";

}

else if(mobileNo==""){
  document.getElementById("message").innerHTML = "Phone Number field should not be left empty!";
}
else if (isNaN(mobileNo)) {
  document.getElementById("message").innerHTML = "Mobile number must numbers ONLY";
}

else if (mobileNo.length !== 8 || isNaN(mobileNo)) {
  document.getElementById("message").innerHTML = "Mobile number must contain 8 digits.";
}

else if(email==""){
  document.getElementById("message").innerHTML = "Email field should not be left empty!";
}

  else if(!email.includes('@')){
    document.getElementById("message").innerHTML = "Email should contain @";
  }

  else {
      rigi=document.getElementById('register');
      rigi.style.display='hide';
      sessionStorage.setItem('firstName', firstName);
      sessionStorage.setItem('lastName', lastName);
      sessionStorage.setItem('mobileNo', mobileNo);
      sessionStorage.setItem('email', email);
      sessionStorage.setItem("firstName",firstName);
      document.getElementById("message").innerHTML = "Form submitted successfully!";
  }

}

function full(el) {
  var elem = document.getElementById(el);
  elem.style.transition = "max-height 2s ease-in-out";
  if (elem.style.maxHeight == "") {
      elem.style.maxHeight = elem.scrollHeight + "px";
  } else {
      elem.style.maxHeight = "";



  }
}
