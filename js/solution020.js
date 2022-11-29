// Abbreviate a Two Word Name

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F
// function abbrevName(name){
// let nameArray = name.split(" ")

// return (nameArray[0][0] + "." +nameArray[1][0]).toUpperCase()
// }

    
// function abbrevName(name){

//     return name.split(' ').map(i => i[0].toUpperCase()).join('.')

// }



function abbrevName(name){
    return name[0].toUpperCase() + "." + name[name.indexOf(" ")+1].toUpperCase()
}


console.log(abbrevName("Sam Harris"), "S.H")