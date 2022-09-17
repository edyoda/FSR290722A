// console.log("Misc topics");
var div = document.getElementById('myArticle');
console.log(div.innerText); // Only gives the text part by ignoring the HTML tags
console.log(div.innerHTML); // It gives all HTML content including text


// div.innerText = "<p>Sample new text</p>";
// div.innerHTML = "<p>Sample new text<span>SPAN TEXT</span></p>";

// div.innerHTML = ''; // This will delete the inner content of the div but will keep the div as it is.
// div.remove(); //This will delete the div and its inner content both.

console.log(div.parentNode); // To get parent of an HTML element

// 
var article = document.getElementById('pParent');
// console.log(article.childNodes) // It will give all the childrens inside a parent
// console.log(article.lastElementChild.innerText);
// article.lastElementChild.innerText = "asdfasdfasd";

// var secondP = document.querySelector('#pParent :nth-child(1)');
// console.log('#pParent :nth-child(1)');



// setTimeout // Used to execute a peice of code after a certian interval of time
// setInterval // Used to REPEATE a peice of code in certain interval of time.
// clearTimeout // Used to STOP setInterval or setTimeout


// function onTimeout() {
//     console.log("Hello from TimeOut");
// }

// setTimeout(onTimeout,5000);

// var counter = 1;
// function onSetInterval() {
//     if(counter > 5) {
//         clearTimeout(myInterval);
//     } else {
//         console.log("Hello from setInterval");
//         counter++;
//     }
// }
// var myInterval = setInterval(onSetInterval,2000);

var heading = document.getElementById('heading');
// console.log(heading.style.margin);

console.log(window.getComputedStyle(heading).fontSize);

var person = {
    fName: "John",
    lName: "Doe",
    address: "123, ABC Street"
};

var arr = ["abc","def"];
console.table(arr);


/* <div class="card">
    <img src="" alt="Test" />
    <div class="content-wrapper">
        <h1>Test heading</h1>
        <p>Lorem Ipsum</p>
    </div>
</div> */

var card = document.createElement('div');

var img = document.createElement('img');
img.src = "";
img.alt = "Test";

var childDiv = document.createElement('div');

var heading = document.createElement('h1');
heading.innerText = "Test heading";
// createTextNode 
var paragraph = document.createElement('p');
paragraph.innerText = "Lorem Ipsum";

childDiv.append(heading,paragraph);
childDiv.classList.add('content-wrapper');

card.append(img,childDiv);
card.classList.add('card');

document.body.append(card);



// function test() {

// }
// test()

// var test = function() {

// }
// test()


function test() {
    var userName = "John";
}


console.log(userName);