/* write a function that will check if the number is palindrome or not. */

function isPalindrome(num) {
    let numCopy = num
    let reverseNumber = 0;
    while (num > 0) {
        let remainder = num % 10;
        reverseNumber = 10 * reverseNumber + remainder;
        num = Math.floor(num / 10);
    }
    if (reverseNumber === numCopy) {
        return "Number is palindrome";
    }
    else {
        return "number is not palindrome";
    }
}
let result = isPalindrome(124521);
console.log(result);
