// Extract the product Id from the URL query parameters
// location.search

// Call the product details API with the product id
// "https://5d76bf96515d1a0014085cf9.mockapi.io/product/" + productId

// https://5d76bf96515d1a0014085cf9.mockapi.io/product/1
// https://5d76bf96515d1a0014085cf9.mockapi.io/product/2
// https://5d76bf96515d1a0014085cf9.mockapi.io/product/3
// https://5d76bf96515d1a0014085cf9.mockapi.io/product/4
// https://5d76bf96515d1a0014085cf9.mockapi.io/product/5
// https://5d76bf96515d1a0014085cf9.mockapi.io/product/10

var productId = 5;
var ajax = new XMLHttpRequest();
ajax.open('GET',"https://5d76bf96515d1a0014085cf9.mockapi.io/product/"+productId);


// Use below code to extract product ID from URL
// http://127.0.0.1:5500/4%20Oct/pdp/pdp.html?productId=5
var queryParams = location.search;
var params = new URLSearchParams(queryParams);
var productId = params.get('productId');
console.log(productId);