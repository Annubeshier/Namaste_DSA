// write a function that returns the second largest number from an array

/*  
the second largest number will the number which is just smaller than the  first largest number in the array.

  INDEX       FIRST LARGEST     SECOND LARGEST
  0           -Infinity          -Infinity
  1            23                -Infinity
  2            23                  14
  3            23                  14       
  4            60                  23
  5            60                  56
  6            77                  60
  7            90                  77

*/

function secondLargestNumber(arr) {
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

let arr = [23, 14, 1, 5, 60, 56, 77, 90];

let result = secondLargestNumber(arr);
console.log(result);

/*   SOLUTION INCLUDING CORNER CASES :



function secondLargestNumber(arr) {
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;
    if (arr.length < 2) {
        return "Array should have atleast 2 elements."
    }
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > firstLargest) {
            secondLargest = firstLargest
            firstLargest = arr[i];
        }

        else if (arr[i] > secondLargest && arr[i] != firstLargest) { //if array has duplicates 
            secondLargest = arr[i];
        }

    }
    return secondLargest;

}

let arr = [23, 14, 1, 5,14,12,23,1,5, 60, 56, 77, 90];

let result = secondLargestNumber(arr);
console.log(result)
*/
