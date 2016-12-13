// Reverse the provided string. Basic Algorythm Scripting from https://www.freecodecamp.com/challenges/reverse-a-string

var string = "";

function reverseString(str) {

 string = str;
 var newString = string.split("").reverse().join("");
 return newString;
}

reverseString("hello");
