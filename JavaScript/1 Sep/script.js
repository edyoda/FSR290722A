// console.log("Control flow");

// Q. If the age of user is greater than or equal to 18 show him/her the message that he/she can cast a vote else can't cast a vote.
var age = 0;

// if (expression) {
//     to do for if block
// } else {
//     to do for else block
// }

var total;
total = "undefined";
// if (total) {
if (age > 18) {
  console.log("You can give vote");
} else {
  console.log("You can't give a vote");
}

// Arithmatic operators

// +
var sum = 5 + 10;

// -
var diff = 10 - 4;

// *
var multiplicationResult = 5 * 5;

// /

var divisionResult = 10 / 3;
console.log(divisionResult);

// % => Modulus operator (Give remainder)

var divisionResult2 = 10 % 3;
console.log(divisionResult2);

var divisionResult3 = 15 % 4;
console.log(divisionResult3);

// ** => Power operator
// var result = 3 * 3 * 3 * 3 * 3 * 3;
var result = 3 ** 6;
console.log(result);

var newResult = 10;
console.log(newResult);
newResult = 20;
console.log(newResult);
newResult = 0;
console.log(newResult);

var productPrice = 299;
// productPrice = productPrice + 1;
// POST INCREMENT OPERATOR
productPrice++;
productPrice++;
productPrice++; // 302
console.log(productPrice);

// productPrice = productPrice - 1;
// POST DECREMENT OPERATOR
productPrice--;
console.log(productPrice);

// productPrice = productPrice + 100;
productPrice += 100;
console.log(productPrice);

// productPrice = productPrice - 50;
productPrice -= 50;
console.log(productPrice);

// productPrice = productPrice * 10;
productPrice *= 10;
console.log(productPrice);

// productPrice = productPrice / 5;
productPrice /= 5;
console.log(productPrice);

// productPrice = productPrice % 5;
productPrice %= 5;
console.log(productPrice);

// Any one who is 18 or above can have a DL.
// > Greater than operator
// >= Greater than or eqaul to operator
// var userAge = 18;
// if(userAge >= 18) {
//     console.log("You can have a DL");
// } else {
//     console.log("You can't have a DL");
// }

// < Less than
// <= Less than or equal to operator
var userAge = 18;
if (userAge < 18) {
  console.log("You can't have a DL");
} else {
  console.log("You can have a DL");
}

// You can participate in this competition only if you are a student of XYZ school.
// == : Equal to comparision operator
var school = "ABC";
if (school == "XYZ") {
  console.log("You can participate");
} else {
  console.log("You can't participate");
}

// Calculate the cost of ticket for the passenger based on the age
/*
0-10 : 20Rs
11-20: 30Rs
20-45 : 50Rs
45+ : 20Rs
*/

// IF ELSE LADDER
var userAge = 5;
var ticketPrice = 0;
if (userAge >= 0 && userAge <= 10) {
  ticketPrice = 20;
} else if (userAge > 10 && userAge <= 20) {
  ticketPrice = 30;
} else if (userAge > 20 && userAge <= 45) {
  ticketPrice = 50;
} else {
  ticketPrice = 20;
}
console.log("Ticket Cost : ", ticketPrice);

// NESTED IF ELSE
// if(true) {
//     if(true) {

//     } else {

//     }
// } else {

// }

// if else if block

// Logical Operators :
// SYNTAX : EXPRESSION <LOGICAL-OPERATOR> EXPRESSION

/*
    && => AND
    || => OR
    ! => NOT
*/
// userAge = 25;
// if (userAge > 10 && userAge < 20) {
//   console.log("Ticket cost : 30Rs");
// } else {
//   console.log("Ticket cost : 20Rs");
// }

// AND OPERATOR
// IT WILL RESULT IN TRUE ONLY WHEN BOTH THE VALUES ARE TRUE
/*
    true && true => true
    true && false => false
    false && true => false
    false && false => false
*/

// userAge = 25;
// STEP 1 : userAge > 10 && userAge < 20
// STEP 2 : true && false
// STEP 3 : false

// OR OPERATOR
// IT WILL RESULT IN FALSE ONLY WHEN BOTH VALUES ARE FALSE
/* 
    true || true => true
    true || false => true
    false || true => true
    false || false => false
*/

// You can participate in a challenge if your age is greater than 10 or if you are in "XYZ" school.

var studentAge = 20;
var studentSchool = "ABC";

if (studentAge > 10 || studentSchool == "XYZ") {
  console.log("You can participate");
} else {
  console.log("You can't participate");
}

// ! => Not/Negation operator
/*
    !true = false
    !false = true
*/
var drunk = true;
if (!drunk) {
  console.log("You can drive");
} else {
  console.log("You can't drive");
}

// STEP 1 : !drunk
// STEP 2 : !true
// Step 3 : false