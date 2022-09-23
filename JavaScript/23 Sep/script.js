console.log("Revision");

var btn = document.getElementById("btn");

function onBtnClick() {
  console.log("111");
}

function test() {
  console.log("22");
}

btn.addEventListener("click", onBtnClick);
btn.addEventListener("click", test);

// btn.onclick = onBtnClick;

// btn.onclick = test;

var person = {
  fName: "John",
  lName: "Doe",
  bloodGroup: "AB+",
};

// person.fName = "ABC";
// person['key-data-type'] = "ABC";

// person.fName = "XYZ";

// console.log(person);

function mFunc(arg) {
  var result = {};
  var keysArray = Object.keys(arg); // we'll get an arary
  for (var i = 0; i < keysArray.length; i++) {
    result[keysArray[i]] = arg[keysArray[i]];
    // 1st iteration
    // results['fName'] = person['fName']; = "John"
    // 2nd iteration
    // results['lName'] = 'lName'; = "Doe"
    // 3rd iteration
    // results['bloodGroup'] = 'bloodGroup'; = "AB+"
  }
  return result;
}
// console.log(Object.keys(person));

// NOTE:  Object.keys(object) gives us an array of all the keys present inside the object

console.log(mFunc(person));


var car = {
    maker: "Volkswagon",
    model: "Polo"
};

// console.log(car);

var car2 = car;
// console.log(car2);

car2.maker = "Ford";
console.log(car2);
console.log(car);
// Reference Chaining in JS, to break the reference chain we have to make a copy of the object

// 2 types of methods
/*
    1. Which affects the original item by changing it. : Mutation
    2. Which makes a copy and then change the copy so that original item does not gets affected.
*/


// DOM (Document Object Model) => It is HTML code in the form of a tree
var div = document.getElementById();
document.getElementsByClassName();
document.getElementsByTagName();

div.innerText = '';
div.style.color = "green";

div.remove();

document.createElement('div');

// CRUD => Create Read Update and Delete


// Location : 

// href or URL consists of following parts

// protocol + hostname + path(optional) + hash (optional) + search (optional)

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#description?q=arraymethods

// [
//     {
//         name: "ABC"
//     }
// ]

// {
//     maker: "Hyundai"
// }

// ["a","b"]

/*
    1. Instanciate class XMLHttpRequest
    var ajax = new XMLHttpRequest();
    2. Use open method on it and pass method and end point.
    ajax.open(Method,REST-ENDPOINT);
    3. Send the request
    ajax.send();
=================================================
    4. After receiving the response, check for following :
        1. Ready State : DONE (4)
        ajax.addEventListener('readystatechange',callback function)
        2. Unpack the data and verify its integrity. HTTP Status Codes : 1xx-5xx

*/