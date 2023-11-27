function validate() {

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var mobileNo = document.getElementById('mobileNo').value;
    var email = document.getElementById('email').value;

    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('mobileNo', mobileNo);
    localStorage.setItem('email', email);
}