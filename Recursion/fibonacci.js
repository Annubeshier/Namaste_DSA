/*
What is a Fibonacci Number?
The Fibonacci sequence is a famous mathematical series in which each number is the sum of two preceding ones It’s defined by the recurrence relation:

F(0) = 0
F(1) = 1
F(n) = F(n-1) + F(n-2) for n > 1
This generates a series like:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

Each number is the sum of the two before it.
This sequence appears frequently in nature (e.g., flower petals, pine cones, and spiral shells), in algorithms (like dynamic programming), and even in computer science problems related to recursion, time complexity, and optimization.
Approach: Recursion
Recursion is a technique where a function solves a problem by calling itself on smaller sub-problems.

In the context of Fibonacci:

To compute fib(n), we:
Ask: “What is fib(n-1)?”
Ask: “What is fib(n-2)?”
Return: the sum of the two fib(n) = fib(n-1) + fib(n-2)
This continues until we reach the base cases:
If n == 0, return 0
If n == 1, return 1
Time Complexity: O(2n)
This is because each function call makes 2 recursive calls, leading to a binary tree of calls. For large n, this becomes very inefficient, as many subproblems are solved repeatedly.
Space Complexity: O(n)
Although the number of calls is exponential, the maximum call depth is n.
So, the space used on the call stack is linear in the worst case.
Sample Outputs:

JavaScript
*/

//SOLUTION

function fibo(n) {
  if (n <= 1) return n;

  return fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(5));


/*********  SERIES ************* */
/*Write a function fib() that takes an integer n and returns the series up to nth Fibonacci number.
For example: 
fib(1); // => 1 
fib(2); // => 1, 1 
fib(3); // => 1, 1, 2 
fib(4); // => 1, 1, 2, 3 
fib(5); // => 1, 1, 2, 3, 5 
fib(6); // => 1, 1, 2, 3, 5, 8 
*/

function fibonacci(n) {
    let result = [1];
    if (n <= 0) return [];

    if (n > 1) result.push(1);
    for (let i = 2; i < n; i++){
        result.push(result[i-1] + result[i-2])
    }
    return result.join(",");
}

console.log(fibonacci(10));  //1,1,2,3,5,8,13,21,34........nth term is the sum of (n-1)th and (n-2)th term

// ALTERNATE SOLUTION

function fibonacciSeries(n) {

    let result = [];
    for (let i = 1; i < n; i++){
        result.push(fib(i));
    }
    return result.join(",");
  
}
function fib(n) {
    if (n === 0 || n === 1 || n === 2) return 1;
    return fib(n - 1) + fib(n - 2);
}
console.log(fibonacciSeries(10));
