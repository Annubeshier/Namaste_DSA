/* Write a function countDigits(n)that takes an integer n and returns how many digits it contains. 

Requirements:
              Handles both positive and negative integers.
              Return 1 if n is 0(since 0 is a single-digit number).    
*/



function countDigits(num) {
  if (num == 0) return 1; // check if the num is equal to zero

  num = Math.abs(num); // converting negative number to positive.
  let count = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}

let num = 34527491;
let result = countDigits(num);
console.log("The number of digits in " + num + " is " + result);
/* OUTPUT =====>        The number of digits in  34527491 is 8.   */
