// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

// https://www.codewars.com/kata/57cc975ed542d3148f00015b/train/javascript


// function check(a, x) {
//  return a.includes(x)
//   }
  
  const check = (a,x) => a.includes(x)
  
  console.log((check([101, 45, 75, 105, 99, 107], 107), true))
  console.group(check(['what', 'a', 'great', 'kata'], 'kat'), false)