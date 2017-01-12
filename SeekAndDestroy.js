//You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

var invalidEntries = 0;

function destroyer(arr) {
  // Remove all the values
  
  var args = Array.prototype.slice.call(arguments, 1);
  
  function FilterValues(obj) {
    
    for(i=0; i<args.legth; i++){
      
    }
  
    if (obj !== args[0] && obj !== args[1] && obj !== args[2]) {
    
    return true;
    
  } else {
    invalidEntries++;
    return false;
  }
   
}

  var filtered = arr.filter(FilterValues);
  
  return filtered;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3, 5);
