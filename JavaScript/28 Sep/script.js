// // Ex : 1
// var vHeading = document.getElementById('heading');
// console.log(vHeading);

// // console.log($());

// var jHeading = $('#heading');
// console.log(jHeading);

// // Ex : 2
// var vParagraphs = document.getElementsByTagName('p');
// console.log(vParagraphs);

// var jParagraphs = $('p');
// console.log(jParagraphs);

// // Ex : 3
// var vItems = document.getElementsByClassName('mycls');
// console.log(vItems);

// var jItems = $('.mycls');
// console.log(jItems);

// Get/Update the text of any element
var vHeading = document.getElementById("heading");
console.log(vHeading.innerText);
// vHeading.innerText = "new jQuery";

var jHeading = $("#heading");
console.log(jHeading.text());
jHeading.text("new jquery heading");
// innerText = text()

// Get/Update the HTML of any element
var vMyDiv = document.getElementById("myDiv");
console.log(vMyDiv.innerHTML);
// vMyDiv.innerHTML = '<h2>New sub heading using vanilla JS</h2>';

var jMyDiv = $("#myDiv");
console.log(jMyDiv.html());
// jMyDiv.html('<h2>New sub heading using jQuery</h2>');
// innerHTML = html()

// Modify the styles of an element
// vHeading.style.color = "yellow";
// vHeading.style.backgroundColor = "green";
// vHeading.style.border = "2px solid black";
// vHeading.style.display = 'none';

jHeading.css("color", "blue");
jHeading.css("backgroundColor", "yellow");
jHeading.css("fontSize", "45px");
jHeading.css("border", "2px solid black");
// jHeading.css('display','none');
// jHeading.css('visibility','hidden');
// jHeading.hide(); //=> set display to none
// jHeading.show(); => set display to default value i.e, block,inline etc
// .styles = css()

// Adding/removing classes
// vHeading.classList.add('new-cls');
// vHeading.classList.remove('mycls');

jHeading.addClass("new-cls");
jHeading.removeClass("mycls");

var jParagraphs = $("p");
// jParagraphs.text("Hello");
// jParagraphs.eq(0).text("Hello");
// jParagraphs.eq(1).text("New Hello");

// $('p').eq(1).text('aaa');

// $('#heading').addClass('abc');

// Event listeners

$("#btn").on("click", function (e) {
  // console.log();
//   var currentDisplayValue = $("#heading").css("display");
//   if (
//     currentDisplayValue === "block" ||
//     currentDisplayValue === "inline-block" ||
//     currentDisplayValue === "inline"
//   ) {
//     // $('#heading').hide();
//     $("#heading").css("display", "none");
//   } else {
//     // $('#heading').show();
//     $("#heading").css("display", "block");
//   }



    $('#heading').toggleClass('hide');

});

// addEventListener = on();


// $('#mylist').append('<li>Go to market</li>','<li>Take Classes</li>')
// $('#mylist').append()

// $( "li" ).add( "p" ).add('h1').css( "background-color", "red" );
// $('p').css( "background-color", "red" );
// $('li').css( "background-color", "red" );
// $('h1').css( "background-color", "red" );


$('p').add('h1').css( "background-color", "red" );