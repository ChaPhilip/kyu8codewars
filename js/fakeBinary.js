// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript


function fakeBin(x){
  
    let newStr = '';
    for(let i = 0 ; i < x.length; i++){
      if(Number(x[i]) >= 5){
        newStr += '1'
      }else{
        newStr += '0'
      }
    }
    return newStr
  
  }


function fakeBin(x) {
    console.log (x.split('').map(n => n < 5 ? 0 : 1).join(''))
}




fakeBin('45385593107843568'), '01011110001100111'