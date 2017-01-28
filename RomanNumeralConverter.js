//Convert the given number into a roman numeral.

function convertToRoman(num) {

  var numArr = num.toString().split(''),
      result=[];
  
      function NumToRomanThousand(num) {
    
    switch(num){
      case "0": return "";
      case "1": return "M";
      case "2": return "MM"; 
      case "3": return "MMM";
      default: return "Cannot process the number";
    }
       
  }
  
    function NumToRomanHundred(num) {
    
    switch(num){
      case "0": return "";
      case "1": return "C";
      case "2": return "CC"; 
      case "3": return "CCC";
      case "4": return "CD";
      case "5": return "D";
      case "6": return "DC";
      case "7": return "DCC";
      case "8": return "DCCC";
      case "9": return "CM";
      default: return "Cannot process the number";
    }
       
  }
  
  function NumToRomanDecimal(num) {
    
    switch(num){
      case "0": return "";
      case "1": return "X";
      case "2": return "XX"; 
      case "3": return "XXX";
      case "4": return "XL";
      case "5": return "L";
      case "6": return "LX";
      case "7": return "LXX";
      case "8": return "LXXX";
      case "9": return "XC";
      default: return "Cannot process the number";
    }
       
  }
  
    function NumToRoman(num) {
    
    switch(num){
      case "0": return "";
      case "1": return "I";
      case "2": return "II"; 
      case "3": return "III";
      case "4": return "IV";
      case "5": return "V";
      case "6": return "VI";
      case "7": return "VII";
      case "8": return "VIII";
      case "9": return "IX";
      default: return "Cannot process the number";
    }
       
  }
  
  
  if(numArr.length==1){
    
    result = NumToRoman(numArr[0]);    
    return result;
    
  }else if(numArr.length==2){
    
    result = NumToRomanDecimal(numArr[0])+NumToRoman(numArr[1]);
    return result;
  }else if(numArr.length==3){
    
    result = NumToRomanHundred(numArr[0])+NumToRomanDecimal(numArr[1])+NumToRoman(numArr[2]);
    return result;
  }else if(numArr.length==4){
    
    result = NumToRomanThousand(numArr[0])+NumToRomanHundred(numArr[1])+NumToRomanDecimal(numArr[2])+NumToRoman(numArr[3]);
    return result;
  }
  
 
}

convertToRoman(1000);
