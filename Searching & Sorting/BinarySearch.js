

function binarySearch(arr, target) { 
    let left = 0;
    let right = arr.length - 1;

    while (right >= left) { 
        let mid = Math.floor((left + right) / 2);

        if (target === arr[mid]) {
            return mid;
        }

        else if (target < arr[mid] ) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return -1;
}

console.log(binarySearch([1,3,4,5,7,8,10,11,12,13,14,15], 11))