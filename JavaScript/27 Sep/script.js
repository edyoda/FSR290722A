// console.log("OOPS");

var person = {
  fName: "John",
  lName: "Doe",
  address: "123, ABC Street, NY",
  bloodGroup: "AB+",
  hasDriversLicense: true,
  age: 30,
  mobile: "9876543210",
  printName: function () {
    // console.log(fName + " " + lName); // John Doe
    console.log(this.fName + " " + this.lName);
  },
};

// person.age = 35;

var person2 = {
  fName: "Alex",
  lName: "Jackson",
  address: "456, ABC Street, NY",
  bloodGroup: "O+",
  hasDriversLicense: true,
  age: 25,
  mobile: "939393939393",
  printName: function () {
    // console.log(fName + " " + lName); // John Doe
    console.log(this.fName + " " + this.lName);
  },
};

console.log(person);
// person.printName();

var btn = document.getElementById("btn");

function onBtnClick(e) {
  console.log(e);
}

btn.addEventListener("click", onBtnClick);
console.log(console);

// Procedural Programming code structure above
// ===================================================
// Object Oriented Programming code structure below

function Person(fName, lName, bloodGroup, age) {
  this.fName = fName;
  this.lName = lName;
  this.bloodGroup = bloodGroup;
  this.age = age;

  // To update a key in this object we have to create a setter function
  this.setAge = function (age) {
    this.age = age;
  };

  // To read/fetch a value from an object we have to create a getter function
  this.getAge = function () {
    return this.age;
  };

  this.setFname = function (fName) {
    this.fName = fName;
  };

  this.getFname = function () {
    return this.fName;
  };

  this.printName = function () {
    console.log(this.fName + " " + this.lName);
  };
}
// CONSTRUCTOR FUNCTION

var person = new Person("John", "Doe", "AB+", 30); // OBJECT INSTANCIATION
console.log(person);
person.printName();
console.log("AGE=>", person.getAge());

person.setAge(35); // Updating a key in the object
console.log("NEWAGE=>", person.getAge());

var person2 = new Person("Alex", "Jackson", "O+", 25); // OBJECT INSTANCIATION
console.log(person2);

// function Car(maker, model, color, makeYear) {
//   this.maker = maker;
//   this.model = model;
//   this.color = color;
//   this.makeYear = makeYear;

//   this.printMakeYear = function () {
//     console.log(this.makeYear);
//   }
// }

// var car1 = new Car("Tata", "Altroz", "Black", 2020);
// console.log(car1);
// car1.printMakeYear();

// var car2 = new Car("Hyundai", "i20", "Grey", 2015);
// console.log(car2);
// car2.printMakeYear();

// var num1 = new Number(10);
// console.log(num1);

// var name = new String("John Doe");
// console.log(name);

// Same implementation in ES6 Classes

class Car {
  constructor(maker, model, color, makeYear) {
    this.maker = maker;
    this.model = model;
    this.color = color;
    this.makeYear = makeYear; // Variables
  }

  getMaker() {
    // Getter function
    return this.maker;
  }

  setMaker(maker) {
    // Setter function
    this.maker = maker;
  }

  getModel() {
    return this.model;
  }

  setModel(model) {
    this.model = model;
  }
}

var car1 = new Car("Tata", "Altroz", "Black", 2020);
console.log(car1);
console.log(car1.getMaker());
car1.setMaker("Honda");
console.log(car1.getMaker());

class Vehichle {
  constructor(noOfWheels, color) {
    this.noOfWheels = noOfWheels;
    this.color = color;
  }

  getColor() {
    return this.color;
  }

  setColor(color) {
    this.color = color;
  }
}

class Bus extends Vehichle {
  // Vehicle class is inherited in Bus class, which will give the access of all Vehicle properties/methods to bus class.
  constructor() {
    super();
  }
}

var bus1 = new Bus();
console.log(bus1);

bus1.getColor();