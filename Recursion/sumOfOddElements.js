/*
Problem Statement:
Write a recursive function sum(n) that calculates the sum of all odd numbers in an array arr up to index n.

Example:
Input: [5, 2, 6, 1, 3]

Odd Numbers: 5, 1, 3

Output: 9

Concepts:
Recursion: Repeatedly check whether arr[n] is odd, and add it only if true true.
Base Case: If n == 0, return arr[0] if it’s odd, otherwise 0.
Recursive Case: Return (arr[n] if odd) + sum(n - 1).
*/

let arr = [5, 4, 2, 3, 1, 6, 7, 9, 11];

function sum(n) {
  const isOdd = arr[n] % 2 !== 0;
  if (n === 0) {
    return isOdd ? arr[n] : 0;
  }

  return isOdd ? arr[n] + sum(n - 1) : 0 + sum(n - 1); // return ((isOdd? arr[n] : 0) + sum(n-1))
}
console.log(sum(arr.length - 1));
