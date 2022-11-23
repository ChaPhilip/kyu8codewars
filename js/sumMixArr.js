// https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.


// function sumMix(x){

//     let total = 0

//     for(let i = 0; i < x.length; i++){
//         total += Number(x[i])
//     }

//     return total
// }

// function sumMix(x){
//     return x.map(a=> +a).reduce((a,c)=> a + c)
// }

let sumMix = x => x.map(a => +a).reduce((a,c)=> a + c)


console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42)
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41)
console.log(sumMix([9, 3, '7', '3']), 22)