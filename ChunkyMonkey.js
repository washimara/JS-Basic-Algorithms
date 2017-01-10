// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  // Break it up.
  
  var finalArr = [];
  
  for(i=0;i<arr.length/size;i++){   

      finalArr[i] = arr.slice(i*size,size+i*size);
       
  }

  return finalArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
