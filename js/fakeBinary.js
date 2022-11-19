// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript




function fakeBin(x) {
    console.log (x.split('').map(n => n < 5 ? 0 : 1).join(''))
}



// function fakeBin(str){
//     var newStr = "";
//     for(var i=0;i<str.length;i++){
//       if(Number(str[i])>=5){
//         newStr += "1"
//       }
//       else{
//         newStr += "0";
//       }
//     }
//     return newStr;
//   }


fakeBin('45385593107843568'), '01011110001100111'