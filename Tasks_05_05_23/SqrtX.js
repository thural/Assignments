var mySqrt = function (x) {
    let result = 0
    for (let i = 0; x >= i * i; i++) {
        result = i
    }
    return result
};

console.log(mySqrt(8))