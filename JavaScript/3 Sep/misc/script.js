// console.log("Objects");

var manufacturer = "Tata";
var model = "Altroz";
var variant = "Basic";
var engineType = "Diesel";
var mileage = 22.5;
var price = 750000;


console.log(manufacturer, model, variant, engineType);

// Creating an object
var car = {
    manufacturer: "Tata",
    model: "Altroz",
    variant: "Basic",
    engineType: "Diesel",
    mileage: 22.5,
    price: 750000,
    color: "Black"
};

console.log(car.capacity);

// Reading the values from the object
console.log(car.price);
console.log(car.manufacturer);

// Add a new key value pair in the object
car.capacity = 5;

console.log(car.capacity);

// Updating a value in object

console.log(car.color);

car.color = "White";
console.log(car.color);


// Deleting a value in object
console.log(car.variant);

delete car.variant;
console.log(car.variant);

var person = {
    fName: "",
    lName: "Doe",
    bloodGroup: "AB+",
    address: {
        addressLine1 : "ABC, 123 Street",
        addressLine2 : "New York",
        state : "New Jersey",
        country: "USA",
        pincode: "08817"
    }
};

console.log(person.address.country);

// console.log(car,person)

// console.log(person.bloodGroup, person.fName);
console.log(person.fName);

// var firstName = prompt("Enter your first name");

// person.fName = firstName;

// console.log(person);


var price1 = 10;
var price2 = "10";

// console.log(price1 == price2);
// console.log(price3 === price2);

// console.log(65 == "A");
// console.log(65 === "A");

// console.log(10 == 10.123);
// console.log(10 === 10.123);

console.log(1 == true);
console.log(0 == true);
console.log(0 == false);

console.log(null == false);
console.log(null === false);

console.log(undefined == false);
console.log(undefined === false);

console.log(null == undefined);
console.log(null === undefined);

console.log(!true);
console.log(!false);
console.log("-----------------------");

console.log(!!true);
console.log(!!false);

console.log(!!!true);

console.log("-----------------------");
console.log(!!"John");
console.log(!!1);
console.log(!!200);
console.log(!!"");

if(!!"") {
    console.log("Hello")
} else {
    console.log("hi");
}

var a = 1;
var b = 3;
var c = 10;
var d = 5;
var e = 7;
var f = 14;

var result = a+(b*c)/d-(e/f);
console.log(result);
// BODMAS => Bracket Open Division Multiplication Addition Subtraction

console.log('----------------------------');

var x = 1;
// x++;
// ++x;
// console.log(x);
// console.log(x++); // Post increment
// console.log(++x); // Pre increment

// console.log(++x); // fist increase the value then print it => 2
// console.log(x);
// console.log(x++); // first print the value then increase it
// console.log(x);

console.log(x++); // 1
console.log(++x); // 3
console.log(x); // 3

console.log("-------------------");
var productPrice = 121.128123123; //121.13
// console.log(parseInt(productPrice));
console.log(productPrice.toFixed(4));
// FIND MORE NUMBER METHODS ON MDN (4-5 METHODS)