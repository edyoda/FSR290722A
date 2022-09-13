// console.log("DOM");

var myHeading = document.getElementById("heading");
console.log(myHeading);

var div = document.getElementById("myDiv3");
console.log(div);

var myItems = document.getElementsByClassName("card");
console.log(myItems);

var myParagraph = document.getElementsByClassName("my-article");
console.log(myParagraph);

var myNewParagraph = document.getElementsByClassName("my-new-article");
console.log(myNewParagraph);

var paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

var divs = document.getElementsByTagName("div");
console.log(divs);

var pInDiv = document.querySelector("p");
console.log(pInDiv);

// var psInDiv = document.querySelectorAll("div p");
// console.log(psInDiv);

var output = document.querySelectorAll(".card > p");
console.log(output);

// =========================================================

var person = {
  fName: "John",
};
person.fName = "Alex";

var pageHeading = document.getElementById("heading");

// pageHeading.innerText = "Document Object Model";
// console.log(pageHeading.innerText);

// document.getElementById("loremParagraph").innerText = "New paragraph value from JavaScript..";

var para = document.getElementById("loremParagraph");
para.innerText = "New paragraph value from JavaScript..";

var myHeading2 = document.getElementById("sampleHeading");
myHeading2.innerText = "Environment Day";
// Manupulate CSS

myHeading2.style.color = "red";
myHeading2.style.backgroundColor = "blue";
// myHeading2.style.display = 'none';
// myHeading2.style.fontSize = "50px";
// font-size: 50px;
myHeading2.style.fontStyle = "italic";

// myHeading2.id = "newID";

// para.style.backgroundColor = "yellow";
para.style.padding = "20px";

// Create new HTML elements using JS

var newPara = document.createElement("p");
newPara.innerText = "I'm a new paragraph created using JavaScript";
document.body.appendChild(newPara);

var img = document.createElement("img");
img.src = "adsfasdfasd";
img.alt = "Nature Image";
document.body.appendChild(img);

//===================================
// Used to perform repetitive operations after certain time

// var headingFontSize = 100;
// function changeHeadingFontSize() {
//   if (headingFontSize < 0) {
//     clearInterval(myInterval); // To stop the function by ruuning after fontsize goes to 0
//   }
//   myHeading2.style.fontSize = headingFontSize + "px"; //100px
//   headingFontSize -= 10;
//   console.log(headingFontSize);
// }
// var myInterval = setInterval(changeHeadingFontSize, 1000);

// console.log(headingFontSize);
