// LOOPS IN JAVASCRIPT

// A loop is used to repeat a block of code multiple times until a certain condition is met.
// The 'for' loop is one of the most commonly used loops in JavaScript.


// The loop consists of three main parts:
// 1. Initialization: let i = 0 - This initializes the loop counter 'i' to 0.
// 2. Condition: i < 5 - This condition is checked before each iteration. If it's true, the loop continues; if false, the loop stops.
// 3. Increment: i++ - This increments the loop counter 'i' by 1 after each iteration.


for(let i = 0 ; i < 5 ; i++){
    console.log("Hello World" + i); 
}

/*
this loop will print "Hello World" followed by the current value of 'i' from 0 to 4.
 
OUTPUT  : 
Hello World0
Hello World1
Hello World2
Hello World3
Hello World4

*/

for(let i = 5 ; i > 0 ; i--){
    console.log("Countdown: " + i);
}
// this is a reverse loop that counts down from 5 to 1.


/* LOOPS WITH ARRAYS*/

let arr = [1,2,3,4,5,6,7,8,9,11,23,24,56,34];

for(let index=0 ; index<arr.length ; index++){
    if(arr[index]%2 == 0){
        console.log(arr[index]); // this will print all even numbers from the array
    }
}
