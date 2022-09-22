// console.log("AJAX");

/*
    AJAX Call : 
    1. REST EndPoint : https://jsonplaceholder.typicode.com/todos
    2. HTTP Method : GET
*/

/*
    1. Instanciate an object of class XMLHttpRequest.
    2. Open a Http call using the method and a end point.
    3. Send the request
    4. To receive the data register a listnere on your ajax "readystatechange"
*/

var btn = document.getElementById("getToDoBtn");
var ul = document.getElementById("list");
var errSpan = document.getElementById('errorSpan');
var loader = document.getElementById('loader');

var todoItems;
function onAjaxResponse(e) {
//   console.log(e);
  if (e.currentTarget.readyState === 4) {
      // My order is delivered, now open the box and check the item
      loader.style.display = "none";
    console.log(e.currentTarget.status);
    if (e.currentTarget.status === 200) {
      // Verifying if the article received is fine or broken
      todoItems = JSON.parse(e.currentTarget.responseText);
    //   console.log(todoItems);

      for (var counter = 0; counter < todoItems.length; counter++) {
        var currentToDo = todoItems[counter];

        var li = document.createElement("li");
        li.innerText = "Title : " + currentToDo.title;

        ul.append(li);
      }
    } else if (e.currentTarget.status >= 400) {
        // Error handling
        errSpan.innerText = "Oops! There is some error, please try again after sometime.";
        // alert("Oops! There is some error, please try again after sometime.");
    }
  }
}

function onBtnClick() {
    loader.style.display = "block";
  var ajax = new XMLHttpRequest(); // Step 1
  ajax.open("GET", "https://jsonplaceholder.typicode.com/toasdfasdfdos"); // Step 2
  ajax.send(); // Step 3

  ajax.addEventListener("readystatechange", onAjaxResponse); // Step 4
}

btn.addEventListener("click", onBtnClick);

// var a = " [{name: John}]  ";

//========================================================
// POST METHOD : AJAX

var feedback;
var inputField = document.getElementById('feedback');
function onInputFieldChange(e) {
    feedback = e.target.value;
}
inputField.addEventListener('keyup',onInputFieldChange);

var submitBtn = document.getElementById('submitBtn');
function onSubmit() {
    try {
        var ajax = new XMLHttpRequest();
        ajax.open('POST','https://jsonplaceholder.typicode.com/todos');
        var data = {
            feedbackMessage : feedback
        };
        var dataToSend = JSON.stringify(data);
        ajax.send(dataToSend);
    } catch (err) {
        alert("Oops! Something went wrong, please try again");
        console.log("Network err", err);
    }
}
submitBtn.addEventListener('click',onSubmit);


console.log('111');


try {
    throw new Error('This is my new error');
} catch (error) {
    console.log("There is an error",error);
}

console.log("222");