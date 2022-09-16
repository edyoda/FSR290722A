// console.log("Events|DOM");

// NOTE : IF YOU DECLARE A VARIABLE INSIDE THE FUNCITON, IT WILL ONLY BE ACCESIBLE INSIDE THE FUNCTION.
// IF YOU DECLARE THE VARIABLE OUTSIDE THE FUNCTION, YOU CAN USE IT INSIDE AND OUTSIDE BOTH PLACES.
/*
    1. Store the value entered by user in input field in any variable
    2. On click of Add Item button, use the value stored in the variable and add it to the end of the list.
        1. Create a li
        2. Set the text of li to the user input value
        3. Insert the li to the ul
        4. Clear the input field value
*/

// STEP 1
var inputField = document.getElementById("todoInputField");
var toDoItemText;
function onInputFieldChange(e) {
  toDoItemText = e.target.value;
}

inputField.addEventListener("keyup", onInputFieldChange);

// STEP 2
var addItemBtn = document.getElementById("addItemBtn");
var errorSpan = document.getElementById("errorSpan");
var ul = document.getElementById("todoList");
function onAddItem() {
  if (toDoItemText.length < 8) {
    // alert("Please enter at least 8 character");
    inputField.classList.add("error");
    errorSpan.style.display = "inline";
  } else {
    inputField.classList.remove("error");
    errorSpan.style.display = "none";
    // 1. Create a li
    var li = document.createElement("li");

    // 2. Set the text of li to the user input value
    li.innerText = toDoItemText;

    // 3. Insert the li to the ul
    ul.append(li);

    // 4. Clear the input field value
    inputField.value = "";
  }
}
addItemBtn.addEventListener("click", onAddItem);

var heading = document.getElementById("heading");
heading.innerText = "New Title - Modifed";
heading.style.color = "red";
heading.id = "abcd";
// add a class to html element
heading.classList.add("myclass1");
heading.classList.add("class2exaple");

//remove a class form an html element
heading.classList.remove("testClass");

// var br = document.createElement('br');

// console.log(ul);
console.log(ul.firstElementChild.innerText);
console.log(ul.lastElementChild.innerText);

// Delte an HTML node using JS

ul.firstElementChild.remove();
ul.lastElementChild.remove();

// ul.remove();
heading.remove();

function createCard(imageSource) {
  var parentDiv = document.createElement("div");

  var childDiv = document.createElement("div");

  var paragrpah = document.createElement("p");
  paragrpah.innerText = "Sample Text";

  var img = document.createElement("img");
  img.src = imageSource;
    // "https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg?w=300";
  img.alt = "Wallpaper";

  childDiv.append(img);
  childDiv.append(paragrpah);

  parentDiv.append(childDiv);

  parentDiv.classList.add("card");

  document.body.append(parentDiv);
}
for (var i = 0; i < 10; i++) {
    createCard("https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg?w=300");
}
