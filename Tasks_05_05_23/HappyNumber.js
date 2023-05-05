function isHappy(n) {
    let result = n;
    let maxResult = 0;
    while (true) {
        
        result = String(result)
            .split('')
            .map(str => Number(str))
            .reduce((accumulator, val) => accumulator + (val * val), 0);

            console.log(result)

        if (result == 1) return true
        if (result > maxResult) maxResult = result
        else if(result == maxResult) return false
    }
};

console.log(isHappy(1999999999))