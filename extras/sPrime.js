/*

 5. Print the first “n” prime numbers. N is anything a user might enter. 

For example: n = 5 Output is 2,3,5,7,11 

n = 8 Output is 2,3,5,7,11,13,17,19 

*/

function printFirstNPrimes(n) {
    const primes = [];
    let num = 2;

    while (primes.length < n) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }

    console.log(primes.join(","));
}

function isPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }

    return true;
}

// Example usage:
printFirstNPrimes(5); // 2,3,5,7,11
//printFirstNPrimes(8); // 2,3,5,7,11,13,17,19