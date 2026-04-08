// Find employees list getting salary less then the max salary in organization.

let employees = [
    { name: "Alice", salary: 50000 },
    { name: "Bob", salary: 70000 },
    { name: "Charlie", salary: 60000 },
    { name: "David", salary: 90000 },
    { name: "Eve", salary: 90000 }
];

function maxSalary(emp) {
    if (emp.length === 0) return [];
    let max = Math.max(...emp.map(e => e.salary));
    let maxSalEmp = emp.filter(e => e.salary < max);
    return maxSalEmp;   
}

console.log(maxSalary(employees));