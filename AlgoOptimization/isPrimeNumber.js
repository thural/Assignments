// Write a function that checks if a given number is prime. Optimize the loop to stop checking once the number is found to be divisible by any other number.

function isPrimeNumber(num) {
    if (num == 1) return false
    else if (num == 2 || num == 3) return true;

    for (let i = 2; i < num; i++) {
        if (num % i == 0) return false
    }

    return true
}

console.log(isPrimeNumber(13))
console.log(isPrimeNumber(4))