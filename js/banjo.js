// https://www.codewars.com/kata/53af2b8861023f1d88000832/train/javascript

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

function areYouPlayingBanjo(name) {

    return name + (name[0].toLowerCase() === 'r' ? ' plays banjo' : ' does not play banjo')
}


// function areYouPlayingBanjo(name) {
 
//     if(name[0].toLowerCase() === 'r'){
//         return name + " plays banjo" 
//   }else{
//     return name + " does not play banjo"
//   }
//     }

console.log(areYouPlayingBanjo("Adam"), "Adam does not play banjo")
console.log(areYouPlayingBanjo("Ringo"), "Ringo plays banjo")