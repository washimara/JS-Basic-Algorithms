//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
function diffArray(arr1, arr2) {
  var newArr = [];
  var element;
  var idx;
  var coincidence = 0;

  var arr3 = arr1.concat(arr2);
  
  
      for(i=0;i<arr3.length;i++){ //0
                
            element = arr3[i]; // element = 1
            idx = arr3.indexOf(element); // idx  = 0
        
            while (idx != -1) {
            coincidence++;//  coincidence = 1
            idx = arr3.indexOf(element, idx + 1); //2 arr3.indexOf(2), IDX = 1

            }
        
                if(coincidence==2){
                  coincidence = 0;
                  x++;
               }else if(coincidence == 1){
                  newArr.push(element);
                  coincidence = 0;
                  x++;
            

    }
    
  }

  
  return newArr;
  //return newArr;
  
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
