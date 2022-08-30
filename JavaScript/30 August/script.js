// console.log("Strings in JS");

var message = "Hello from JAVASCRIPT session on 30 August, 2022 on";
var welcomeMessage = "WELCOME TO EDYODA SESSION";

// .length => Gives total lenth/total count of the characters of the string
console.log(message.length);
console.log(welcomeMessage.length);

// .toUpperCase() => Change all the characters of the string to upper case (Capital letters)
console.log(message.toUpperCase());
console.log(welcomeMessage.toUpperCase());


// .toLowerCase() => Change all the characters of the string to lowe case (Small letters)
console.log(message.toLowerCase());
console.log(welcomeMessage.toLowerCase());

// .indexOf(<word or character>) => It will return the index of first matching character or word in the string.
// If the character or word is not present in the string then the index will be -1
console.log(message.indexOf("from"));
console.log(message.indexOf("Hello"));
console.log(message.indexOf("2022"));
console.log(message.indexOf("s"));
console.log(message.indexOf("S"));
console.log(message.indexOf("e"));
console.log(message.indexOf("o"));
console.log(message.indexOf("John"));
console.log(message.indexOf("XYZ"));
console.log(message.indexOf("on"));


// .lastIndexOf() => It will return the index of last matching character or word in the string
// If the character or word is not present in the string then the index will be -1
console.log(message.lastIndexOf("on"));


// .charAt(<index number>) => It will return the character present at certain index
console.log(message.charAt(12));
console.log(message.charAt(0));
console.log(message.charAt(5))
// console.log(message.charAt(" ")); // WRONG WAY
// 0 3 digit std code 7 digit landline number


var myMessage = "    Hello Guys, welcome    to    JavaScript session     ";
console.log(myMessage)

// .trim() => It removes extra spaces from the starting and ending of the string
console.log(myMessage.trim());

var myNewMessage = "Welcome to EdYoda JS Session";
// .slice(startPosition, endPosition) => It will return a small peice of our string.
console.log(myNewMessage.slice(0,5));
console.log(myNewMessage.slice(7,10));
console.log(myNewMessage.slice(11,14));
console.log(myNewMessage.slice(3));
console.log(myNewMessage.slice(-10));
console.log(myNewMessage.slice(-10,-5));
console.log(myNewMessage.slice(-10, 5));
console.log(myNewMessage.slice(10, -5));


var newString1 = "Hello,";
var newString2 = "Welcome to EdYoda";
var newString3 = "JS Session";

console.log(newString1.concat(newString2));
// console.log(newString1+newString2+newString3);
console.log(newString1 + " " + newString2 + " " + newString3);

var price1 = 10;
var price2 = 5;
console.log(price1+price2);


var myEmail = "john@yahoo.com";
console.log(myEmail.endsWith('gmail.com'));
// startsWith() => opposite of endsWith() method


var newString5 = "Welcome to EdYoda";

var result = newString5.slice(5,15); // result = me to EdYo
var indexResult = result.indexOf("to");
console.log(indexResult);

// Chaining of methods
console.log(newString5.slice(5,15).indexOf("to"));