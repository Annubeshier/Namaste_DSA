/*
Problem Statement:
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Examples:
Example 1:
Input: nums = [3,0,1]

Output: 2

Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

Example 2:
Input: nums = [0,1]

Output: 2

Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

Example 3:
Input: nums = [9,6,4,2,3,5,7,0,1]

Output: 8

Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

Constraints:
n == nums.length
1 <= n <= 10 4
0 <= nums[i] <= n
All the numbers of nums are unique.

*/

//SOLUTION  - if only 1 number is missing from a sorted array 

function missingNumber(value) { 
    let n = value.length + 1;
    let totalSum = n * (n + 1) / 2;
    let partialSum = 0;
    for (let i = 0; i < value.length; i++) { 
        partialSum = partialSum + value[i];
    }
    return totalSum - partialSum;
}
let value = [3,2,4,5,1,7,0];
let result = missingNumber(value);
console.log(result);


/// IF there are multiple numbers missing from the array 

function missingNumFunction(arr){
    let expectedLength = 100;
    let missingNumbers = [];

    for(let i = 0; i<expectedLength ; i++){
        if(!arr.includes(i)){
            missingNumbers.push(i);
        }
    }
    return missingNumbers;

}
let arr1to100 = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
    12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
    25, 26, 27, 28, 29, 30, 32, 33, 34, 35,
    36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
    48, 49, 50, 51, 52, 54, 55, 56, 57, 58, 59,
    60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71,
    72, 73, 75, 76, 77, 78, 79, 80, 81, 82, 83,
    84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95,
    96, 97, 98, 99
]
 console.log(missingNumFunction(arr1to100));