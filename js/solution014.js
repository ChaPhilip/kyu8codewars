//Remove String Spaces
//Simple, remove the spaces from the string, then return the resultant string.


// function noSpace(x){
//     let emptyString = ''
// for (let i = 0; i < x.length; i++){

//   if (x[i] === ' '){
//     emptyString += ''
//   }
//   else{
//     emptyString += x[i]
//   }
 
// } return emptyString
// }

//method
function noSpace(x){
    return x.split(' ').join('')
}

console.log(noSpace('I will miss Breece Hall'))