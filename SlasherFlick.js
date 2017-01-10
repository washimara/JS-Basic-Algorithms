//Return the remaining elements of an array after chopping off n elements from the head.
//The head means the beginning of the array, or the zeroth index.

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  
  var sliced = arr.slice(howMany,arr.length+howMany);
  
  return sliced;
}

slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5);
