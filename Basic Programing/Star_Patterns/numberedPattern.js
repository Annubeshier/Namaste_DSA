/*PROBLEM
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/
/* SOLUTION */
let n = 5;

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + (j + 1);
  }
  console.log(row);
}
  
/*
let n = 5; 

for (let i = 0; i <= n; i++) {
    let row = "";
    for (let j = 1; j<= i; j++){
        row = row + " "+j;
    }
    console.log(row);
}
*/




/***************************************************************************************** */
  /*PROBLEM
1
2 2  
3 3 3
4 4 4 4
5 5 5 5 5
*/
/* SOLUTION */
let n1 = 5;
for (let i = 0; i <= n1; i++){
let row = "";
    for (let j = 0; j < i; j++){
        row = row + i;
    }
    console.log(row);
}
/*  ALTERNATE SOLUTION 
let n1 = 5;
for (let i = 0; i < n1; i++){
let row = "";
    for (let j = 0; j <= i; j++){
        row = row + (i+1);
    }
    console.log(row);
}
*/


/******************************************************************************************* */

/* PROBLEM 
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
*/

/* SOLUTION */

for (let i = 5; i > 0; i--){

    let row = "";
    for (let j = 0; j < i; j++){
        row = row + (j + 1);
    }
    console.log(row);
}

/* ALTERNATE SOLUTION
let n = 7;

for (let i = 0; i < n; i++){
    let row = "";

    for (let j = 0; j < n - i; j++){
        row = row + (j + 1);
    }
    console.log(row);
} 

*/


/*
 PROBLEM 
 
    * * * * *
    * * * *
    * * *
    * *
    *   
*/

/*SOLUTION */

let n2 = 5 ;
for(let i = 0 ; i < n2 ; i++){

    let row = "";
    for(let j = 0 ; j < n2 - i ; j++){
        row = row + "* ";
    }
    console.log(row);
}


/* PROBLEM

 1
 1 0
 1 0 1
 1 0 1 0
 1 0 1 0 1
 1 0 1 0 1 0
*/

/* SOLUTION */
let n3 = 5;

for(let i =0 ; i <n3 ; i++){
    let row = "";
    let toggle = 1;
    for(let j =0 ; j <=i ; j++){
        row = row + toggle;

        if(toggle == 1){
            toggle = 0;
        } else {
            toggle = 1;
        }

    }
    console.log(row);
}

/* PROBLEM 

1 
0 1
1 0 1
0 1 0 1
1 0 1 0 1
0 1 0 1 0 1
*/

/* SOLUTION */

let n4 = 5;
let toggleStart = 1;
for(let i = 0 ; i < n ; i++){

    let row = "";

    for(let j = 0 ; j <= i ; j++){
        row = row + toggleStart;
    
        if(toggleStart ==1){
            toggleStart = 0;
        }
        else{
            toggleStart = 1;
        }
    }
    console.log(row);
}