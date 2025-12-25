//loop within a loop is known as NESTED LOOPS.

for(let i = 0 ; i < 3 ; i++){
    for(let j = 0 ; j < 3 ; j++){
        console.log(i , j);
    }
}

/* OUTPUT 
0 0
0 1
0 2 
1 0
1 1
1 2
2 0
2 1
2 2 
*/

for(let i = 0 ; i <3 ; i++){
    for(let j = 0; j < i ; j++){
        console.log(i , j)
    }
}
/* OUTPUT
1 0
2 0
2 1
*/

for(let i = 0 ; i < 5 ; i++){
    for(let j = 0 ; j <= i ; j++){
        console.log(i, j);
    }
}

/* 
OUTPUT
0 0
1 0
1 1 
2 0
2 1
2 2 
3 0
3 1
3 2 
3 3
4 0
4 1 
4 2
4 3
4 4
*/

for(let i = 0 ; i < 3 ; i++){
    for(let j = i ; j > 0 ; j--){
        console.log(i , j);
    }
}
/* OUTPUT
1 1
2 2
2 1
*/

for(let i = 0 ; i < 3 ; i++){
    for(let j = i ; j >=0 ; j--){
        console.log(i , j);
    }
}
/* OUTPUT
0 0
1 1
1 0 
2 2
2 1
2 0  
*/

for(let i = 5 ; i > 0 ; i--){
    for(let j = 0 ; j < i ; j++){
        console.log(i , j);
    }
}

/* OUTPUT 
5 0
5 1
5 2     
5 3
5 4
4 0
4 1
4 2 
4 3
3 0
3 1 
3 2
2 0
2 1
1 0
*/