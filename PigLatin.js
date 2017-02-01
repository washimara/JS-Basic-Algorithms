//Translate the provided string to pig latin.

//Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

function translatePigLatin(str) {
  
  var result=[];
  
  function isVowel(c) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1;
}
  
  if(!isVowel(str[0])){
    
    if(!isVowel(str[1]) ){
      
      return result = str.slice(2) + str[0] + str[1] + "ay";
    }else{
      
      return result = str.slice(1) + str[0] + "ay";
    }
   
  }else{
    
    return result = str + "way"; 
  }
  
  
}

translatePigLatin("glove");
