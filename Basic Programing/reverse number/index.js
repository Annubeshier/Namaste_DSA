/* 
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
 

Constraints:

-231 <= x <= 231 - 1
*/

// SOLUTION :

function reversedNumber(n) {
    let nCopy = n;
    let rev = 0 ;
    n = Math.abs(n);   // Math.abs is used to ignore the sign 
    while (n > 0) { 
        let remainder = n % 10;
        rev = 10 * rev + remainder;
        n = Math.floor(n / 10);  // to get the whole number and skipping the decimal value
    }
    let limit = Math.pow(2, 31);  // to calculate the pow 
     // let limit = 2**31; another way to calculate the power
    if (rev < -limit || rev > limit - 1) return 0;
    return nCopy < 0 ? -rev : rev;
}

let result = reversedNumber(-12345348);
console.log(result);