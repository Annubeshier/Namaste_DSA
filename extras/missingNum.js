function missingNum(arr , n) {
    let missing = [];
    for (let i = 1; i <= n; i++){
        if (!arr.includes(i)) {
            missing.push(i);
        }
    }
    return missing;
}

let arr = [1,2,3,4,5,6,7,8];
let len = 10;
console.log(missingNum(arr,len))
