// console.log("Assignment discussion");

function q1(inputArr, searchElement) {
  // 1. Run a loop on array
  // 2. In the loop match the input element with every element encountered in each iteration
  // 2.1 If the index matches, then save the index in a variable
  // 3. Return the stored indexes
  var indexes = [];
  for (var counter = 0; counter < inputArr.length; counter++) {
    if (inputArr[counter] === searchElement) {
      // the item is matching
      // push the index in my array
    }
  }
  if (indexes.length === 0) {
    indexes.push(-1);
    // return -1;
  }
  //   return indexes;
  console.log(indexes);
}

var inputArr = [1, 2, 3, 4, 5, 1, 3];
var searchElement = 4;
q1(inputArr, searchElement);

q1([1, 2, 3, 4, 5, 1, 3], 1);
q1([1, 2, 3, 4, 5, 1, 3], 7);
// if(indexes.length === 1) {
//     console.log(indexes[0])
// } else {
//     console.log(indexes)
// }

function q4(str1, str2) {
  // 0. Convert the strings into arrays
  // 1. Sort both the arrays alphabatically
  // 2. Convert the arrays back to string
  // 3. If the sroted strigs match with each other its an anagram
  var arr1 = str1.toLowerCase().split("");
  arr1.sort();
  var sortedStr1 = arr1.join("");

  var arr2 = str2.toLowerCase().split("");
  arr2.sort();
  var sortedStr2 = arr2.join("");

  //   if (str1.split("").sort().join("") === str2.split("").sort().join("")) {
  if (sortedStr1 === sortedStr2) {
    console.log(str1, str2, "are anagrams");
  } else {
    console.log(str1, str2, "are not anagrams");
  }
}

// q4('listen','silentasdfsd');
q4("HEART", "earth");

function q5(str) {
  var output = "";
  for (var counter = str.length - 1; counter >= 0; counter--) {
    // output +=  str[counter];
    output = output + str[counter];
  }
  console.log(output);
}

q5("Heart");

function pyramid(noOfLines) {
  // How many lines do you want to print?
  // Use nested loops i.e, loop inside loop
  // Outer Loop : Prints each line
  // Inner Loop : Print the characters in line (Responsible for giving no of characters in each line)
  /*

    *
    **
    ***
    ****
    *****

    */

  /*

    1
    22
    333
    4444
    55555

    */

      /*

    1
    12
    123
    1234
    12345

    */
  for (var i = 1; i <= noOfLines; i++) {
    var line = "";

    for (var j = 1; j <= i; j++) {
      //   line += "*";
    //   line += i;
      line += j;
    }
    console.log(line);
  }
}

pyramid(8);
