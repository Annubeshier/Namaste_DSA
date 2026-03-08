//SOLTUION 1
//APPROACH - ITERATIVE

function flattenArray(value) { 
    let res = [];
    let valueCopy = value.slice();
    while (valueCopy.length) { 
        const item = valueCopy.shift();
        if (Array.isArray(item)) { 
            valueCopy.unshift(...item);
        }
        else {
            res.push(item)
        }
    }
    return res;
}

let arr = [1, [2, [3, [4, [5,6,7,[9,10]]]]]];
let result = flattenArray(arr);
console.log(result)


//SOLUTION 2
//APPROACH -  ITERATION USING SOME

function flattenArray(value) {
    while (value.some(Array.isArray)) { 
        value = [].concat(...value);
    }
    return value;

}

let arr = [1, [2, [3, [4, [5,6,7,[9,10]]]]]];
let result = flattenArray(arr);
console.log(result)


//SOLUTION 3 
// APPROACH  - RECURSION
function flattenArray(value) {
   return value.reduce((acc , curr)=> acc.concat(Array.isArray(curr) ? flattenArray(curr) : curr ) , [])

}

let arr = [1, [2, [3, [4, [5,6,7,[9,10]]]]]];
let result = flattenArray(arr);
console.log(result)