// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/javascript

// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.


function twoSort(s){

    let last = s.sort()[0]
    let a = last[0]

    for(i = 1 ; i < last.length; i++){
        a += '***' + last[i]
    }
    return a
}




// function twoSort(s) {

//     return s.sort()[0].split('').join('***')


// }

// let twoSort = s => s.sort()[0].split('').join('***')





console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' )