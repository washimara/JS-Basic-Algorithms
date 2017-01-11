//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

//For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

function mutation(arr) {
  
  var array1 = arr[0];
  var array2 = arr[1];

  var array3 = [];
  var array4 = array1.toString().toLowerCase();
  
  for (i = 0; i < array2.length; i++) {
      array3.push(array2[i].toLowerCase());
  }
  
  
  for (i = 0; i < array3.length; i++) {
      if(array4.indexOf(array3[i])  === -1){
            return false;
         }
  }
  
  return true;
}

mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
