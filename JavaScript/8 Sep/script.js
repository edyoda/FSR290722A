var y;
 // declaration
// console.log("Functions");

// var num1 = 10;
// var num2 = 20;
// var total = num1 + num2;
// console.log(total);

// var num1 = 2;
// var num2 = 5;
// var total = num1 + num2;
// console.log(total);

/*
FUNCTION SYNTAX : 
function <name-of-function>(arguments){
    logic
}
*/

function printMessage() {
  // Function declaration/defnition
  console.log("Hi there");
}

printMessage(); // Function call

// Q. create a calculator to perform basic math operation

function add(num1, num2, num3 = 20) {
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    typeof num3 !== "number"
  ) {
    alert("Only numerical values are allowed");
  } else {
    var total = num1 + num2 + num3;
    console.log(total);
  }
}

function subtract() {
  var num3 = 10;
  var num4 = 5;
  var difference = num3 - num4;
  console.log(difference);
}

// function splice(startingPostion,deleteCount,itemToAdd) {

// }
// function multiply() {}

// function divide() {}
// var a = prompt("Enter first number");
// a = Number(a);

// var b = prompt("Enter second number");
// b = Number(b);

add(50, 20, 0);
// add(100,150,200);
// add(20,50,10);
// splice(1,0,"John");
// add(1,1);
// add(150,450);
// add();
// add();
// add();
// add();

// toString()
// toUpperCase()

function greetUser(userName = "XYZ") {
  console.log("Hello", userName);
}

// greetUser("John");
// greetUser("Alex");
// greetUser("Peter");
// greetUser("ABC");

// greetUser("ABCD");
// greetUser(undefined);
// greetUser(null);
greetUser(0);

// Providing default argument in function
// in implicit coersion null = 0
function total(num1 = 10, num2 = 20) {
  // console.log(num1,num2);
  var total = num1 + num2;
  console.log(total);
}

// total(null);
// total(undefined, 100);

function calculator(operation, num1, num2) {
  switch (operation) {
    case "+":
      add(num1, num2);
      break;
  }
}

// calculator("+", 50, 60);

function calculateDifference(num1 = 20, num2 = 10) {
  var difference = num1 - num2;
  // return difference;
}

var result = calculateDifference(50, 15);
// console.log(calculateDifference(50,15))
// add(result, 100);
console.log(result);

// Q. Take the product cost and shipping cost, then give total 20% discount to the user.

function calculateTotalCost(pC, sC) {
  var cost = pC + sC;
  return cost;
}
// console.log(cost)

function calculateDiscount(totalCost, discountPercent) {
  var discountedAmount = totalCost - (totalCost / 100) * discountPercent;
  return discountedAmount;
}

var productTotalCost = calculateTotalCost(1200,200);
var finalPrice = calculateDiscount(productTotalCost,15);
console.log("Final price of your product = ",finalPrice)


// Scoping of variables

function test() {
    var x = "John";
    console.log(x);
}

// test();

// console.log(x);
// ======= HOISTING =========
// var y = "John"; // variable declaration, variable definition
console.log(y);

y = "John"; // definition

var nums = [12,1,54,45,10,5];
function mySortFunction(a,b) {
    // if a > b replace a with b
    // if b > a replace b with a
    // if they both are equal, don't swap the numbers
    // 1, -1 or 0
    // if(a > b) {
    //     return -1;
    // } else if (b > a) {
    //     return 1;
    // } else {
    //     return 0;
    // }
    return a-b;
}
console.log(nums.sort(mySortFunction));