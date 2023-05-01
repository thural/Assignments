//Given a function that checks if a number is positive (isPositive), inline it within a function that returns the square of a positive number or zero for negative numbers.

function square(num) {
    return num * num
}

function isPositive(num, callback) {
    if (num < 0) return false
    return callback(num)
}



console.log(isPositive(4, square))
console.log(isPositive(-4, square))