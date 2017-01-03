//Return the length of the longest word in the provided sentence.
//Your response should be a number.

function findLongestWord(str) {
  
  var newString = str.split(" ");
  var longestString = newString[0].length;
  
  for(i=0;i<newString.length;i++){
    
    if(longestString<newString[i].length){
      
        longestString = newString[i].length;
    }
  }
  return longestString;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
