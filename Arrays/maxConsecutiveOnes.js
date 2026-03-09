/*
Problem Statement:
Given a binary array nums, return the maximum number of consecutive 1’s in the array.

Examples
Example 1:

Input:nums = [1,1,0,1,1,1]

Output:3

Explanation The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

Example 2:

Input:nums = [1,0,1,1,0,1]

Output:2
*/


//SOLUTION

function maxConsecutiveOnes(value) { 
    let maxCount = 0;
    let currentCount = 0;
    for (let i = 0; i < value.length; i++) { 
        if (value[i] === 0) {

           // maxCount = currentCount > maxCount ? currentCount : maxCount;
            maxCount = Math.max(currentCount, maxCount);
            currentCount = 0;
        }
        else { 
            currentCount++;
        }
    }
    // comparison can also be done using ternary operator but Math.max is more concise and readable
   // return currentCount > maxCount ? currentCount : maxCount;
   
   return  maxCount = Math.max(currentCount, maxCount);  //this comparison is required if the array ends up with 1's because in that case the loop will end without comparing the last count of 1's with maxCount. So we need to do one final comparison after the loop to ensure we get the correct result.
}
let value = [0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1];
let result = maxConsecutiveOnes(value);
console.log(result);