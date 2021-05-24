function convertToRoman(num) {
    let arr = [];
  
    while(num > 0) {
      switch (true) {
        case (num >= 1000): 
          arr.push('M');
          num -= 1000;
          break;
        case (num >= 900): 
          arr.push('CM');
          num -= 900;
          break;
        case (num >= 500): 
          arr.push('D');
          num -= 500;
          break;
        case (num >= 400): 
          arr.push('CD');
          num -= 400;
          break;
        case (num >= 100): 
          arr.push('C');
          num -= 100;
          break;
        case (num >= 90): 
          arr.push('XC');
          num -= 90;
          break;
        case (num >= 50): 
          arr.push('L');
          num -= 50;
          break;
        case (num >= 40): 
          arr.push('XL');
          num -= 40;
          break;
        case (num >= 10): 
          arr.push('X');
          num -= 10;
          break;
        case (num >= 9): 
          arr.push('IX');
          num -= 9;
          break;
        case (num >= 5): 
          arr.push('V');
          num -= 5;
          break;
        case (num >= 4):
          arr.push('IV');
          num -= 4;
          break;
        case (num > 0) : 
          arr.push('I');
          num--;
          break;
  
      }
    }
  
   return arr.join("");
  }
  
  console.log(convertToRoman(36));