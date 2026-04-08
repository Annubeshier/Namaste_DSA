function FindLargest(arr) {
    let largest = -Infinity;
    let smallest = Infinity;

    for (let i = 0; i < arr.length; i++){
        if (arr[i] > largest) {
            largest = arr[i]
        }
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return console.log(largest , " , ",smallest);
}

let arr = [100, 1234, 10, 4, 1212];
console.log(FindLargest(arr))
