//Square(n) Sum


// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.


// function squareSum(numbers){
//     return numbers.reduce(function(sum, n){
//       return (n*n) + sum;
//     }, 0)
//   }

function squareSum(numbers){
  total = 0
  for(i =0; i<numbers.length;i++){
    total += numbers[i]* numbers[i]
  }
  return total
}

let squareSum = (numbers) => numbers.reduce((sum,num)=> (num*num) + sum,0)


console.log(squareSum([1,2,3,4,5]))
