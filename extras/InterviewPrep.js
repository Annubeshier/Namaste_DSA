const objArr = [
    { name: "A", age: 10 },
    { name: "B", age: 20 },
    { name: "C", age: 30 },
    { name: "D", age: 10 }
]
//OUTPUT: 
// let datatata = {
//     10: ["A", "D"],
//     20: ["B"],
//     30: ["C"],
// }

let newArr = objArr.reduce((acc, num) => { 
    const { name, age } = num;
    if (!acc[age]) {
        acc[age] = [];
    }
    acc[age].push(name);
    return acc 
}, {})