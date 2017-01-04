//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

function titleCase(str) {
  
  var newStr = str.toLowerCase();
  newStr = newStr.split(" ");
 
  
  
  for(i=0;i<newStr.length;i++){
    
      newStr[i] = newStr[i].split("");
  }
  
  var midStr = newStr;
  
    for(i=0;i<newStr.length;i++){
     
      for(x=0;x<newStr[i].length;x++){
    
       if (x===0 ){ midStr[i][x] = newStr[i][x].toUpperCase();}
    }
  }
  
  var finalStr = midStr.join("").replace(/[_,().\s:/-]/gi, '').split(/(?=[A-Z])/).join(" ");
  
  return finalStr;
}

titleCase("I'M a little tea pot");
