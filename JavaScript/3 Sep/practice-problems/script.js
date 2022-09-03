// console.log("Practice Problems");

var monthNumber = 2;
var monthName = "";
var monthDays = 0;

switch (monthNumber) {
    case 1:
        monthName = "Januray";
        monthDays = 31;
    break;
    case 2:
        monthName = "Februrary";
        monthDays = 28;
    break;
    case 3:
        monthName = "March";
        monthDays = 31;
    break;
    case 4:
        monthName = "April";
        monthDays = 30;
    break;
    default:
        console.log("Invalid month number entered, please enter a number between 1-12");
}

if(monthNumber > 0 && monthNumber <= 12) {
    console.log("Month = ",monthName,"Total no of days = ",monthDays);
}


var num = 5;
if(num % 2 == 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}