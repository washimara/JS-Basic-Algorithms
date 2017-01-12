//Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

var count = 0;
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.sort(function(a, b) {
  return a - b;
});
  
  for(i=0; i<arr.length; i++){
    if(num<=arr[i]){
      count = i;
      break;
    }else{
      count = i+1;
    } 
  }
  return count;
}

getIndexToIns([5, 3, 20, 3], 5);
