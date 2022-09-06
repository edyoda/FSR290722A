// console.log("Arrays");

// var product1 = "Mobile";
// var product2 = "Laptop";
// var product3 = "Shoes";

var users = ["Mobile", "Laptop", "Shoes"]; // array of strings
// console.log(users);

var prices = [100, 200, 300, 50]; // array of numbers
// console.log(prices);

var sample = [true, false, false, true]; // array of booleans
// console.log(sample);

var products = [
  { name: "mobile", price: 100 },
  {
    name: "Laptop",
    price: 10000,
  },
]; // array of objects => JSON

var product = {
    name: "Mobile",
    price: 200,
    isRefurbished: false
}

var users = ["John", "Alex", "Jane", "Roy", "Peter", "Tony", "Stephen"];
// index starts from 0 and ends at n-1, n is the length of the array
// console.log("Users=>",users[4]);

// console.log(users[10]);

// console.log(users.length);

// Add an item an array
// users[7] = "Divyansh";
// console.log(users);

// users[12] = "ABC";
// console.log(users);

// console.log(users[10]);

// console.log(users[0]); // first item of the array
// console.log(users[users.length - 1]); // last item of the array
// console.log(users)
// users[users.length] = "ABC";
// users[users.length] = "XYZ";
// console.log(users);

// console.log(users);
// // .push(new item)
// users.push("ABC");
// console.log(users);
// users.push("XYZ");
// console.log(users);
// console.log(users.length);

// // Deleting an item from array
// // pop()
// users.pop();
// console.log(users);

// // Operation at the start of the array
// // unshift()
// users.unshift("Vision");
// console.log(users);

// shift()
users.shift();
// console.log(users);

// Operations on the middle of the array
// splice()


// Using splice for inserting an item at specific index
// users[1] = "ABC";
users.splice(1,0,"ABC");
// console.log(users);

users.splice(4,0,"Wanda");
// console.log(users);

// Multiple insertion using splice method
users.splice(2,0,"Hela","Thanos","Galactus");
// console.log(users);


// Replace an item using splice
// users.splice(2,1,"XYZ");
// users.splice(2,1,"XYZ","Ghamora"); // remove one and add 2 items
users.splice(2,2,"Ghamora","Groot"); // replace multiple items in an array using splice method
// console.log(users);

// Deleting items using splice
// users.splice(5,1); // deleting single item
// users.splice(5,2); // deleting multiple items
// console.log(users);

// sort() => To sort the array items
// users.sort();
// console.log(users);

// revers() => To reverse the order of the array

// users.reverse();
// console.log(users);

users.sort().reverse();
console.log(users);

var newUsers = ["Spider Man","Bat Man","Super Man","Wanda"];
console.log("---------------------");
console.log(newUsers.includes("Bat Man"));
console.log(newUsers.includes("Aqua Man"));

// console.log(users.concat(newUsers));

console.log(typeof users);
console.log(typeof product);

console.log(Array.isArray(users));

console.log(users.toString());


var message = "Hello there welcome to JS tutorial";
console.log(message.split("e"));

var products = [];
var product1 = {
    name: "Mobile",
    price: 2000,
    inStock: true
};
products.push(product1);

var product2 = {
    name: "Laptop",
    price: 50000,
    inStock: true,
};

console.log(Object.keys(product2));
console.log(Object.values(product2));
console.log(Object.entries(product2));

products.push(product2);

console.log(products);

// 2D array
var myArray = [
    ["A","B","C"],
    ["X","Y","Z"]
];
console.log(myArray);

console.log(myArray[1][1]);


// Matrix : 
/*
1 2 3
4 5 6
7 8 9

*/

var matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(matrix)


var tempArray = ["john",1,false, null, "doe"]; // WRONG WAY
console.log(tempArray); 