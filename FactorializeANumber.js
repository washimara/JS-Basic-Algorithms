/* Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

*/

function factorialize(num) {
  
  /*if(!num){ return 1;}
  
  var fact = num * (num-1);
  var i = num - 1;
  
  for(i;i > 1;i--){
    fact = fact * (num-i);
  }
  return fact;
  */
  
  //Elegant Answer
  
  if (num === 0) { return 1; }
  return num * factorialize(num-1);
}

factorialize(10);
