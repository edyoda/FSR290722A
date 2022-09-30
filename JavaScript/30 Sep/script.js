// console.log("Revision");

// class Vehicle {
//   constructor() { // To initialize the default data
//     this.color ;
//     this.capacity ;
//     this.engineType;
//   }

//   getColor() {
//     return this.color;
//   }

//   setColor(color) {
//     this.color = color;
//   }

//   getCapacity() {
//     return this.capacity;
//   }
// }

// class Car extends Vehicle {
//     constructor() {
//         super(); // Used to initialize the parent class constructor.
//     }
//     getDoors() {
//         return 4;
//     }
// }

// var car1 = new Car(); // Initialization phase
// car1.getColor();
// car1.getCapacity();
// car1.getDoors();

// var div = document.getElementById("myDiv");

// function onDivClick(e) {
//   console.log("Target", e.target);
//   console.log("Current Target", e.currentTarget);
// }

// div.addEventListener("click", onDivClick);

// var ajax = new XMLHttpRequest();
// ajax.open("GET", "https://jsonplaceholder.typicode.com/todos", true);

// ajax.send();

// ajax.addEventListener("readystatechange", function (e) {
//   if (
//     e.target.readyState === 4 &&
//     e.target.status >= 200 &&
//     e.target.status <= 299
//   ) {
//     // console.log(JSON.parse(e.target.responseText));
//     console.log(e.target.response);
//     // ToDo : Custom logic here
//   }
// });

// $.ajax({
//   url: "https://jsonplaceholder.typicode.com/todos",
//   method: "GET",
//   success: function (data) {
//     console.log(data);
//   },
//   error: function () {
//     alert("Something went wrong, please try again later");
//   },
// });

// $.get("https://jsonplaceholder.typicode.com/todos",function() {})
// .done(function() {
//     //Success fn
// })
// .fail(function() {
//     // Error fn
// })

$("#myDiv").append("<p>Lorem Ipsum</p>");

document.write("Hello there");

var div = $("<div></div>");
$("#myDiv").append(div);

// var form = $(`
//     <form>
//         <div class="question-wrapper">
//         </div>
//     </form>
// `);

// $("#container").append(form);
