// console.log("Loop");
// console.log("Hi There");// 100 times

/*
WHILE LOOP SYNTAX : 
variable initialization;
while(condition) {
    logic to be repeated
    optional : increment/decrement
}
*/
// var counter = 1;
// while(counter <= 100) {
//     // console.log("Hi There");
//     console.log(counter);
//     counter++;
// }

// Q. Using while loop print a table of 5
// var counter = 22;
// while(counter <= 220) {
//     console.log(counter);
//     counter+=22;
// }

// var counter = 1;
// var num = 52;
// while (counter <= 10) {
//   console.log(num + " x " + counter + " = " + num * counter);
//   counter++;
// }

// Q. Print the numbers from 1-10 using while loop
// var counter = 1;
// while(counter <= 10) {
//     console.log(counter);
//     counter++;
// }

// Q. Print the numbers from 10-1 using while loop
// var counter = 50;
// while(counter >= 1) {
//     console.log(counter);
//     counter--;
// }

// Q. Print all the even numbers between 1-100
// var counter = 1;
// while(counter <= 100) {
//     if(counter % 2 === 0) {
//         console.log("Even Number : ",counter);
//     } else {
//         console.log("Odd Number ", counter);
//     }
//     // console.log(2*counter);
//     counter++;
// }

// var number = 0
// while (number <= 100){
//     console.log(number)
//     number = number+2
// }

// ARRAY ITERATION, ITERATE OVER AN ARRAY
var users = [
  "Batista",
  "Rock",
  "Undertaker",
  "Ray Misteryo",
  "John Cena",
  "Goldberg",
  "Jindal Mahal",
  "The Great Khali",
];

// var counter = 0;
// while(counter < users.length) {
//     console.log("Hello",users[counter]);
//     counter++;
// }

var products = [
  { name: "Mobile", price: 200, inStock: true },
  { name: "Laptop", price: 10000, inStock: false },
  { name: "Earphones", price: 100, inStock: true },
];

// Product : Mobile, Price : 200Rs, Availability : In Stock/Out of stock

// var counter = 0;
// while(counter < products.length) {
//     var currentObject = products[counter];
//     // var stock;
//     // if(currentObject.inStock === true) {
//     //     stock = 'In Stock';
//     // } else {
//     //     stock = 'Out Of Stock';
//     // }
//     var stock = currentObject.inStock === true ? 'In Stock': 'Out of stock';
//     console.log("Product : "+ currentObject.name + ", Price : " + currentObject.price+ ", Availability : ",stock);
//     counter++;
// }

/*
FOR LOOP SYNTAX : 
for(initialization;condition;increment/decrement) {
    logic to be repeated
}
*/

// Q. Print numbers from 1-10 using for loop
// for(var counter=1;counter<=10;counter++) {
//     console.log(counter);
// }

// Q. Print numbers from 10-1 using for loop
// for(var counter=10;counter >= 1;counter--) {
//     console.log(counter);
// }

// Q. Print a table of any number taken as input from the user.

// var num = prompt("Enter a number");
// num = Number(num);

// for (var counter = 1; counter <= 10; counter++) {
//  console.log(num + " x " + counter + " = " + num * counter);
// }

// Q. Print all even number between 1-100

// var evens = [];
// var odds = [];
// // var str = "Even\tOdd";
// // var evenNumberStr = '';
// for (var counter = 1; counter <= 200; counter++) {
//   if (counter % 2 == 0) {
//     evens.push(counter);
//     // evenNumberStr = evenNumberStr + counter;
//     // str = str + counter + "\t";
//     // console.log("Even Number: \t", counter);
//   } else {
//     odds.push(counter);
//     // str = str + counter + "\n";
//     // console.log("Odd Number : ", counter);
//   }
// }
// // console.log(evenNumberStr)
// // console.log(str);
// console.log("Even numbers ", evens.toString());
// console.log("Odd numbers ", odds.toString());

// /* Special symbols in string
//     \n : Line change
//     \t : Tab Space
// */

// console.log("Hello\t John");

// for (var counter = 0; counter < users.length; counter++) {
//     console.log("Hello",users[counter]);
// }

// for(var counter=0;counter<products.length;counter++) {
//     var currentObject = products[counter];
//         // var stock;
//         // if(currentObject.inStock === true) {
//         //     stock = 'In Stock';
//         // } else {
//         //     stock = 'Out Of Stock';
//         // }
//         var stock = currentObject.inStock === true ? 'In Stock': 'Out of stock';
//         console.log("Product : "+ currentObject.name + ", Price : " + currentObject.price+ ", Availability : ",stock);
// }

// How to stop a loop in between? break;
// for (var i = 1; i <= 50; i++) {
//   if (i > 20) {
//     break;
//   }
//   console.log(i);
// }

var newProducts = [
  "Mobile",
  "Cover",
  "Earbuds",
  "Laptop",
  "TV",
  "Shoes",
  "Cloths",
  "Tablet",
  "Chair",
  "Table",
];

// Q. Check if the item Laptop is present in the array or not, if yes print its index

// for(var counter = 0;counter<newProducts.length;counter++) {
//     console.log(newProducts[counter])
//     if(newProducts[counter] === "Laptop") {
//         console.log("Index of Laptop = ",counter);
//         break;
//     }
//     // console.log(newProducts[counter])
// }

// Q. Print numbers from 1-60 and 70-100 using for loop.
for (var counter = 1; counter <= 100; counter++) {
  if (counter > 60 && counter < 70) {
    // skip the items
    continue;
  }
  console.log(counter);
}
