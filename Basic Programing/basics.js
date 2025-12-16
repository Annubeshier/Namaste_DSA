//                          DATATYPES IN JAVASCRIPT

const a = 10;
a = 30;
//changing a constant variable will throw an error 

const x = 10 ;
const y = 20 ;

const sum = x + y ;
console.log("The sum of x and y is: " + sum); // this will result to 30 


let firstName = "John";
let lastName = "Doe";
 let fullName = firstName + " " + lastName;
console.log("Full Name: " + fullName); 

// this will result to  ==>   Full Name: John Doe as a string concatenation is done in the background
//  similarly if we add a string and a number then the result will be a string concatenation as Javascript does the conversion in background and then concatenates the two values

let b =  3;
let c = 5;
let result = b + c; // this will result to 8 as both are numbers
 
//but if we keep a string in between these two numbers then the result will be a string concatenation
let result2 = b + " " +c; // this will result to "3 5" as string concatenation is done here

/* *********************************************************************************************************
************************************************************************************************************/

//                          ARRAYS IN JAVASCRIPT
//ARRAY ===> container that holds multiple value whereas variable holds a single value
//there is an index and against that there would be a value 

let arr = [2, 4, 5, 22, 44, 56, 778, 100, 9];

arr[0] // here the index is 0 and the value corresponding to that index is 2
arr[3] // here the index is 3 and the value corresponding to that index is 22
arr[8] // here the index is 8 and the value corresponding to that index is 9

//also if there is no value against an index then it will return undefined

let arr2 =["hellow", "world", 22 , true , 34.5];  // array can hold multiple data types as well

//also there can be nested arrays as well 

let arr3 = [2,3,4, [5,6,7 , [8,9,10]]];

// to access value 10 we have to write like arr3[3][3][2] ==> this will return 10


/* *********************************************************************************************************
************************************************************************************************************/

//                        OBJECTS IN JAVASCRIPT

//objects are key value pairs just like arrays where the data is stored in index-value pairs 
//just like arrays objects can store different types of data as well including nested objects and arrays

let obj = {
    name : "John",
    age : 30,
    isAdult : true,
    hobbies : ["reading", "gaming", "coding"],
    address: {
        street : "U-26",
        city : "New Delhi",
        country : "India"
    }
}

// to access any value in objects we use '.' operator or we can also use '[]' operator

console.log(obj.name);
console.log(obj["name"]);

// both the above lines will return "John"