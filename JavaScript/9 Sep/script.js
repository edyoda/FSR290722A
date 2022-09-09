// console.log("Revision session");

// Q. Calculate the total pincipal on Rs 50,000 after 1 year @6%
function calculateSI(principal, rate, time) {
  var si = (principal * rate * time) / 100;
  return si;
}

function calculateTotalPrincipal(simpleInterest,oldPrincipal) {
    var principal = simpleInterest + oldPrincipal;
    return principal;
}

// 1. Calcualte SI on the amount,rate and time
// 2. Calcualte total pricipal

// var si = calculateSI(50000,6,1);
// var principal = calculateTotalPrincipal(interest,50000);
// console.log(principal);


function getGender(salutaion) {
    var gender;
    switch(salutaion) {
        case 'Mr' :
            gender = "Male";
        break;
        case "Mrs":
            gender = "Female";
        break;
        case "Miss":
            gender = "Female";
        break;
    }
    return gender;
}


// var gender = getGender("Miss");
// console.log(gender);

// Mr.
// Mrs.
// Miss

// var name = prompt("Enter your name");
// console.log(name);


// Q. Write a function which takes fName and lName as input and gives back fullName.

function generateFullUserName(fName,lName) {
    var fullName = fName + " " + lName;
    // console.log(fullName);
    return fullName;
}


// generateFullUserName("John","Doe")

// var fullName = generateFullUserName("John","Doe"); 
// console.log(fullName);

// Coersion : Conversion on one data type into another

var price = parseInt("ABC123"); // explicit coersion
var shipping = Number("B");
var totalCost = price+shipping;
// console.log(totalCost);
// console.log(price);




var num1 = "100";
// console.log(num1, typeof num1);

var name = "John";
// console.log(name.charCodeAt(1));

// console.log(10+false); // implicit coersion
// console.log(true && false || true); // order of precedence, associativity of operators

// = ==
// hoisting
// object creation
// array
// pre/post inc/dec


// var a;

// console.log(a);
// a = 10;

// *** MOVING THE DECLARATION TO THE TOP OF THE SCOPS IS CALLED HOISTING  *****

// var person = {
//     fName: "John",
//     lName: "Doe",
//     mobile: "9999999999",
//     address : "123, ABC Street"
// };

// var person = {}; // Object creation
// var person = Object.create();
// person.fName = "John";
// person.lName = "Doe";
// var person = new Object();


// arrays : collection of homogeneous data type

// var userName1 = "A";
// var userName2 = "B";
// var userName3 = "C";
var userNames = ["A","B","C","D","E"];
var prices = [100,150,250,500];

userNames.push("Z");
console.log(userNames);

// 2 types of array methods
// 1. Which modifies original array to perform operation : push, pop, splice / mutation
// 2. Crates a new copy and then modifies it : slice

var counter = 1;
// console.log(++counter);

// increment ++ / decrement --
// pre : before the variable (FIRST INCREASE THE VALUE AND THEN USE IT)
// post : after the variable (FIRST USE THE VALUE AND THEN INCREASE IT)
var x = 1;
// x++ + ++x + ++x + x + x++
// 1   + 3   + 4   + 4 + 4

var x =10;

// x-- - --x + x-- - --x
// 10  - 8   + 8   - 6
// 4

var nationality = "SriLankan";
// if(nationality == "Indian") {
//     console.log("You can have aadhaar");
// } else {
//     console.log("You can't have aadhaar");
// }

// condition ? <true-block> : <false-block>
// nationality == "Indian" ? console.log("You can have aadhaar") : console.log("You can't have aadhaar");

// Anagrams : race & care ===> a c e r
// heart & earth ====> a e h r t
