
function done(nums) { 

    while (nums.some(Array.isArray)) {
        nums = [].concat(...nums);
    }
    return nums;
}
function findMax(nums) {
    let max = 0;
    let sortedArr = done(nums);
    for (let i = 0; i < sortedArr.length; i++) { 
        if (sortedArr[i] > max) {
            max = sortedArr[i];
        }
    }
    return max;
}

let nestedArr = [3, 4, 58, [9, 8, 9, [10, 11]], [111, 2]];
console.log(findMax(nestedArr))