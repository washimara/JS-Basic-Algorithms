// Return true if the given string is a palindrome. Otherwise, return false

function palindrome(str) {
  
  var desired = str.replace(/[_,().\s:/-]/gi, '').toLowerCase();
  var finalString = desired.split("").reverse().join("").toLowerCase();
  if (desired == finalString){ return true; }
  else{ return false; }
}



palindrome("0_0 (: /-\ :) 0-0");
