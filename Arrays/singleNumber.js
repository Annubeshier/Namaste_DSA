/*Problem Statement:
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Examples:
Example 1:
Input: nums = [2, 2, 1]

Output: 1

Example 2:
Input: nums = [4, 1, 2, 1, 2]

Output: 4

Example 3:
Input: nums = [1]

Output: 1

Constraints:
1 ≤ nums.length ≤ 3 × 104
-3 × 104 ≤ nums[i] ≤ 3 × 104
Each element appears twice except one that appears only once.

*/



// SOLUTION 1  USING HASH MAPPING
/*
XOR of two same numbers is 0: a ^ a = 0.
XOR of a number with 0 is the number itself: a ^ 0 = a
So, if all elements occur twice except one, XOR-ing all gives that unique number.

Input: nums = [4, 2, 1, 0, 5]

Step 1: Initialize xor = 0

Loop through array:
    i = 0 → xor = 0 ^ 4 = 4
    i = 1 → xor = 4 ^ 2 = 6
    i = 2 → xor = 6 ^ 1 = 7
    i = 3 → xor = 7 ^ 0 = 7
    i = 4 → xor = 7 ^ 5 = 2

Final xor = 2
  
Output: 2
*/
function singleNumber(nums) { 
    let hash = {};
    for (let i = 0; i < nums.length; i++){
        if (!hash[nums[i]]) {
            hash[nums[i]] = 1;
        }
        else { 
            hash[nums[i]]++;
        }
    }
    for (let i = 0; i < nums.length; i++) { 
        if (hash[nums[i]] == 1) {
            return nums[i];
        }
    }
}
let value1 = [4,1,3,2,1,3,2];
let result1 = singleNumber(value1);
console.log(result);

//SOLUTION 2 USING BITWISE XOR 



function singleNumber(nums) { 
    let xor = 0;
    for (let i = 0; i < nums.length; i++) { 
        xor = xor ^ nums[i];
    }
    return xor;
}
let value = [4,1,3,2,1,3,2];
let result = singleNumber(value);
console.log(result);