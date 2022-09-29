// console.log("Ajax using jQuery");

$(document).ready(function () {
  //   console.log($("#heading"));

  // AJAX ===========================
  /* 
    Pre requisits :
    1. End Point (URL) : https://jsonplaceholder.typicode.com/todos
    2. Method : GET
*/

  //   var btn = document.getElementById("btn");
  //   console.log(btn);
  //   var ul = document.getElementById("myList");

  //   function onReadyStateChange(e) {
  //     if (e.target.readyState === 4 && e.target.status === 200) {
  //       var data = JSON.parse(e.target.responseText);
  //       for (var i = 0; i < data.length; i++) {
  //         var toDo = data[i];
  //         var li = document.createElement("li");
  //         li.innerText = toDo.title;
  //         ul.append(li);
  //       }
  //     }
  //   }

  //   function onBtnClick() {
  //     var ajax = new XMLHttpRequest();
  //     ajax.open("GET", "https://jsonplaceholder.typicode.com/todos");
  //     ajax.send();
  //     ajax.addEventListener("readystatechange", onReadyStateChange);
  //   }

  //   btn.addEventListener("click", onBtnClick);

  //   IMPLEMENTATION USING JQUERY

  // Step 1 : Register a click event on btn
  $("#btn").on("click", function () {
    // GET REQUEST BELOW
    // $.ajax({
    //   url: "https://jsonplaceholder.typicode.com/gjhgjkfgjfgj",
    //   method: "GET",
    //   success: function (data) {
    //     for (var i = 0; i < data.length; i++) {
    //       var toDo = data[i];
    //       $("#myList").append("<li>" + toDo.title + "</li>");
    //     }
    //   },
    //   error: function (error) {
    //     alert("Something went wrong, please try agian after sometime!");
    //   },
    // });
    // $.get(
    //   "https://jsonplaceholder.typicode.com/todos",
    //   function (data, status) {
    //     // console.log(data, status);
    //   }
    // )
    //   .done(function (data) {
    //     console.log(data);
    //   })
    //   .fail(function () {
    //     console.log("Error in API Call");
    //   });
  });

  $("#postBtn").on("click", function () {
    var postData = {
      id: 123,
      title: "Go to market",
      completed: false,
    };
    // POST REQUEST BELOW
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/todos",
      method: "POST",
      data: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
      success: function (data) {
        console.log(data);
      },
      error: function () {
        alert("Something went wrong, please try again after some time!");
      },
    });
  });
});



var str = "THE WEATHER IS SUNNY TODAY, IT WILL PROBABLY NOT RAIN TODAY";
console.log(str.includes('SUNNY'))
console.log(str.match('/SUNNY/'))