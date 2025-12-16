// ***********************IF-ELSE STATEMENT***********************

// The if-else statement is a conditional statement that executes a block of code based on whether a specified condition is true or false.

//create a function which accepts age and check if a persoon is eligible to vote or not

function checkVotingEligibility(age) {
  if (age >= 18) {
    return "Eligible to vote";
  } else {
    return "Not eligible to vote";
  }
}

let eligibilityStatus = checkVotingEligibility(20); // Function invocation with argument 20
console.log(eligibilityStatus); // prints "Eligible to vote" on the console

let eligibilityStatus2 = checkVotingEligibility(16); // Function invocation with argument 16
console.log(eligibilityStatus2); // prints "Not eligible to vote" on the console

// ***********************IF-ELSE-IF STATEMENT***********************

// The if-else if statement is used to specify a new condition to test, if the first condition is false.

function isAdult(age) {
  if (age < 1) {
    console.log("Invalid age");
  } 
  else if (age >= 18) {
    console.log("voter is eligible for voting");
  } 
  else {
    console.log("voter is under age");
  }
}

isAdult(31);
isAdult(-1);
isAdult(12);
isAdult(21);


// function to check if a number is even or odd

function isEvenOd(num){

    if(num % 2 === 0 ){
        console.log(num + " is an Even number");
    }
    else{
        console.log(num + " is an Odd number");
    }
}
isEvenOd(4); // prints "4 is an Even number" on the console
isEvenOd(7); // prints "7 is an Odd number" on the console

//function to check negative, positive or zero
function isNegativePositive(num) {

    if (num > 0) {
        console.log(num + " is an positive number");
    }
    else if (num < 0) { 
        console.log(num + " is a negative number ")
    }
    else {
        console.log(num + " is equal to zero");
    }
}
isNegativePositive(0); // prints "4 is an Even number" on the console
isNegativePositive(7);
isNegativePositive(-20)