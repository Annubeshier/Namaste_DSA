
// write a function that searchs for an element in an array nd return the index. If the element is not found, return -1.


function findingTheElement(arr,number) {2

    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === number) {
            return index;
        }
        
    }
    return -1;

}
let arr = [23, 14, 1, 5, 60, 56, 77, 100, 101, 3, 4, 7, 8, 9];

let result = findingTheElement(arr,77);
console.log(result)


// Write a function that returns the number of negative elements in an array 

function countNegatives(arr) {
    let count = 0;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] < 0) {
         count = count + 1;
        }
    }
    return count;

}

let arr1 = [3, -14, 1, -5, 60, -56, 77, -100, 101, -3, 4, 7, -8, 9];

let result1 = countNegatives(arr1);
console.log(result1);



// write a function that returns the largest number from an array 

function largestNumber(arr) {
    let largestNum = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largestNum) {
            largestNum = arr[i];
        }
       
    }
    return largestNum;

}

let arr3 = [-23, -14,-1, -5, 60, -56, -770, -1000000];

let result3 = largestNumber(arr3);
console.log(result3)

//write a function that return the smallest number from an array


function smallestNumber(arr) {
    let smallestNum = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallestNum) {
            smallestNum = arr[i];
        }
       
    }
    return smallestNum;

}

let arr4 = [23, 14, 1, 5, 60, 56, 77, -100, -101, 3, 4, 7, 8, 9];

let result4 = smallestNumber(arr4);
console.log(result4)