//Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

function largestOfFour(arr) {
  // You can do this!
  var biggestNumber = 0;
  var finalArr = [];
  
  for(i=0;i<arr.length;i++){
    
    biggestNumber = 0;
    
    for(x=0;x<arr[i].length;x++){
      
      if(arr[i][x]>biggestNumber){
        
        biggestNumber = arr[i][x];
        
      }
    }
    finalArr[i] = biggestNumber;
  }
  
  return finalArr;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
