//Remove all falsy values from an array.

//Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

var invalidEntries = 0;

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  
  function filterValues(obj) {
  if (obj !== false && obj !== "" && obj !== 0 && obj !== undefined && obj !== null && !Number.isNaN(obj)) {
    
    return true;
    
  } else {
    invalidEntries++;
    return false;
  }
}  

var arrFilter = arr.filter(filterValues);
return arrFilter;

}

bouncer([1, null, NaN, 2, undefined]);
