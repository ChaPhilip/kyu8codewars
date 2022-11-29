// https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript
// Find the smallest integer in the array
//Given [34, 15, 88, 2] your solution will return 2

class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
    
  }
  
    console.log(findSmallestInt([78,56,232,12,8]),8,'Should return the smallest int 8')
