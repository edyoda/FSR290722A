// console.log("Control flow 2");

// Ternary operator ?
// SYNTAX => expression ? <true-block> : <false-block>


var userAge;

(userAge >=18) ? console.log("You can vote") : console.log("You can't vote");

// if(userAge >= 18) {
//     console.log("You can vote");
// } else {
//     console.log("You can't vote");
// }

// Switch Case : 
// SYNTAX : 
/* 
    switch(<variable>) {
        case <case-value> :
            case block;
        break;
        case <case-value> :
            case block;
        break;
        case <case-value> :
            case block;
        break;
        default:
            default block;
    }
*/

/* Create a program where user enters a number between 1-7 and show the corresponding week day as the output
1 => Monday
2 => Tuesday
3 => Wed
....
7 => Sunday
*/

// if(weekDay == 1) {
//     console.log("Monday");
// console.log("Let's start this week fresh");
// } else if (weekDay == 2) {
//     console.log("Tuesday");
// } else if (weekDay == 3) {
//     console.log("Wednesday");
// } else {
    // console.log("Invalid number");
// }
var weekDay = -9;
// { => :
    
// } => break;

switch(weekDay) {
    case 1: //if(weekDay == 1)
        console.log("Monday");
        console.log("Let's start this week fresh");
    break;
    case 2:
        console.log("Tuesday");
    break;
    case 3:
        console.log("Wednesday");
    break;
    case 4:
        console.log("Thursday");
    break;
    case 5:
        console.log("Friday");
    break;
    case 6:
        console.log("Saturday");
    break;
    case 7:
        console.log("Sunday");
    break;
    default: // else
        console.log("Invalid week day number, please enter a number between 1-7");
}


var age = 10;
var userName = "John";
var drunk = false;
var price = "100";

console.log(typeof age);
console.log(typeof userName);
console.log(typeof drunk);
console.log(typeof price);

var num1 = 5;
var num2 = 10;
console.log(num1 + num2);

var fName = "John";
var lName = "Doe";
var haveDL = true;

console.log(fName+lName); // num,string

console.log(num1+fName+lName); // num,string,string

console.log(num2+fName); // num,string

console.log(drunk+fName); // bool,string
console.log(fName+drunk); // string,bool

console.log(haveDL+fName); // bool,string

console.log(haveDL+num1); // bool,num

console.log(drunk+num1); // bool,num

console.log(haveDL+drunk); // bool, bool

var isValid = true;
console.log(haveDL+isValid); // bool, bool

var num3 = 20;
var num4 = 7;

var num5 = 12;
var num6 = 5;

console.log(num3+num4); // coersion didn't took place here


var num7 = null;
var num8;
var num9 = 5;

console.log(typeof num7);
console.log(typeof num8);

console.log(num7+num8);

console.log(num9+num7);
console.log(num9+num8);


// ===============================================
// EXPLICIT COERSION

var n1 = Number("10");
var n2 = Number("5");
var n3 = Number("john");
var n4 = Number("12345John");
var n6 = Number("John123");

console.log(typeof n1, typeof n2);

console.log(n1+n2);
console.log(n3);
console.log(n4);
console.log("Output ==>",n6);

var n5 = parseInt("12345John");
console.log(n5);

var n7 = parseInt("Jo124hn123");
console.log("Using parseInt method",n7);

var n8 = parseInt("10");
console.log(n8);

var a1 = Number("10.11");
console.log(a1);

var a2 = parseInt("10.11");
console.log(a2);

var a3 = parseFloat("10.22");
console.log(a3);