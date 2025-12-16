//     FUNCTIONS IN JAVASCRIPT

// A function is a block of code designed to perform a particular task.
// It is executed when "something" invokes it (calls it).

// **********************SIMPLE FUNCTION EXAMPLE **********************

function printHelloWorld(){
    console.log("Hello World!");  // upon execution 'Hello World!'  will be printed on the console
}

printHelloWorld();  // Function invocation

// **********************FUNCTION WITH PARAMETER **********************

function greet(name){
  console.log("Namaste "+ name);  // upon execution 'Namaste John'  will be printed on the console
}
greet("John"); // Function invocation with argument 'John'


//   **********************FUNCTION WITH RETURN VALUE **********************

function square(number){
    let result = number*number;
    return result;  // returns the square of the number
}

let squaredVal = square(5); // Function invocation with argument 5 and storing the return value in squaredVal
console.log(squaredVal); // prints 25 on the console


// **********************FUNCTION EXPRESSION **********************
const add = function(a, b){
    return a + b;  // returns the sum of a and b
}   
let sum = add(3, 4); // Function invocation with arguments 3 and 4
console.log(sum); // prints 7 on the console    

// **********************ARROW FUNCTION **********************
const multiply = (x, y) => {
    return x * y;  // returns the product of x and y
}   