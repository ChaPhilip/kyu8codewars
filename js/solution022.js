// Convert number to reversed array of digits
// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]

//convert to a str so we can use str methods. split

// function digitize(n) {
//     return String(n).split('').map(Number).reverse()
//   }


let digit = n =>  console.log(String(n).split('').map(Number).reverse())


digit(1533)