/*
Problem Statement:
Write a function that reverses a string. The input string is given as an array of characters s. You must do this by modifying the input array in-place with O(1)extra memory.

Examples:
Example 1:
Input:s = [“h”,”e”,”l”,”l”,”o”]

Output:[“o”,”l”,”l”,”e”,”h”]

Example 2:
Input:s = [“H”,”a”,”n”,”n”,”a”,”h”]

Output:[“h”,”a”,”n”,”n”,”a”,”H”]

Approach: Two Pointer Technique
Initialize two pointers, one at the start and one at the end of the array.
Swap the characters at both pointers.
Move the pointers towards the center until they meet.
*/

//SOLUTION

var reverseString = function (str) {
    let len = str.length;
    let halfLen = Math.floor(len / 2);
    for (let i = 0; i < halfLen; i++){
        let temp = str[i];
        str[i] = str[len - 1 - i];
        str[len - 1 - i] = temp;
    }
    return console.log(str);
}

let str = ["H","a","n","n","a","h"]
let result = reverseString(str);
console.log(result)