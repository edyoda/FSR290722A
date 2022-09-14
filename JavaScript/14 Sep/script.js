// console.log("Events");

var btn = document.getElementById('btnToggle');
// console.log(btn);

function onBtnClick() {
    // alert("Button is clicked");
    var div = document.getElementById('article');

    if(document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
    
    // if(div.style.backgroundColor === "red") {
    //     div.style.backgroundColor = "white";
    // } else {
    //     div.style.backgroundColor = "red";
    // }
}

// NOTE : IF YOU WANT TO CALL MULTIPLE FUNCTIONS ON SAME EVENT OF AN ELEMENT, THEN WAY 1 WILL NOT WORK, ONLY WAY 2 WILL WORK
// IT IS ADVISES TO USE ONLY 1 EVENT LISTENER ON ONE EVENT ON AN ELEMENT
// Different ways to register an event
// Way 1 : 
// SYNTAX : element.onclick = function-name
// btn.onclick = onBtnClick; //onBtnClick is eventListener here
function onDblClick () {

}
// Way 2 : 
// SYNTAX : element.addEventListener(event,function-name);
btn.addEventListener('click',onBtnClick);
// btn.addEventListener('click',onBtnClick);
btn.addEventListener('dblclick',onDblClick);
// btn.addEventListener('mouseenter',onDblClick);
// btn.addEventListener('mouseleave',onDblClick);


// 1. Find the button using any method
// 2. Create a function which will be called on click of a btn
// 3. Register the listener e.g btn.onclick = <function-name>



var zoomInBtn = document.getElementById('zoomInBtn');
var zoomOutBtn = document.getElementById('zoomOutBtn');


var paragraph = document.getElementById('article');
var fontSize = 16;

function onZoomIn() {
    fontSize += 2;
    paragraph.style.fontSize = fontSize + "px";  
}

function onZoomOut() {
    fontSize -= 2;
    paragraph.style.fontSize = fontSize + "px";
}

zoomInBtn.addEventListener('click',onZoomIn);
zoomOutBtn.addEventListener('click',onZoomOut)


// Form related events/input related events
// Q. Write a form validation on form submission, where you validate following fields
/*
    email : it should be only a gmail address
    password and confirm password should be same
*/
// DATA VALIDATION USING JS

var form = document.getElementById('regForm');
var emailField = document.getElementById('email');
var passwordField = document.getElementById('password');
var confirmPasswordField = document.getElementById('confirmPassword');
console.log(emailField)

var email;
var password;
var confirmPassword;

function onEmailKeyUp(e) {
    email = e.target.value;
    // console.log(e.target.value);
}

function onPasswordKeyUp(e) {
    password = e.target.value;
//    console.log(e.target.value);
}

function onConfirmPasswordKeyUp(e) {
    confirmPassword = e.target.value;
    // console.log(e.target.value);
}

emailField.addEventListener('keyup',onEmailKeyUp);
passwordField.addEventListener('keyup',onPasswordKeyUp);
confirmPasswordField.addEventListener('keyup',onConfirmPasswordKeyUp);


function onFormSubmit(e) {
    e.preventDefault();
    // console.log(typeof email,password,confirmPassword);

    // Perform validations here
    if(!email.endsWith('@gmail.com')) {
        alert("Only Gmail Ids are allowed");
        emailField.style.border = "1px solid red";
    } else if (password !== confirmPassword) {
        alert("Password and confirm password does not match")
    } else {
        alert("Form submitted succesfully");
    }

    // console.log("form submitted");
}

form.addEventListener('submit',onFormSubmit);