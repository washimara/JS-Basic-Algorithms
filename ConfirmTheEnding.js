//Check if a string (first argument, str) ends with the given target string (second argument, target).

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var wordLenght = (str.length)-target.length;
  var newStr = str.substring(wordLenght, str.length);
  if (newStr == target){
    return true;
  }else{
    return false;
  }
  return newStr;
}

confirmEnding("Bastian", "n");
