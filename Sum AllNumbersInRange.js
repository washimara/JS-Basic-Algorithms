//We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
//The lowest number will not always come first.

function sumAll(arr) {
  
  var sum=0;
  
  Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

Array.prototype.min = function() {
  return Math.min.apply(null, this);
};

  for(i=arr.min();i<=arr.max();i++){
    
    sum +=i;
  }
  
  return sum;
  
}

sumAll([1, 4]);
