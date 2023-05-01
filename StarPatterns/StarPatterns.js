function squareStar(n) {
    let output = "";
    let str = "";

    for (let i = 0; i < n; i++) {
        str += "*"
    }

    for (let i = 0; i < n; i++) {
        output += str + "\n"
    }

    return output
}

function hollowSquareStar(n) {
    let output = "";
    let str1 = "";
    let str2 = "";

    for (let i = 0; i < n; i++) {
        str2 += "*"
    }

    output += str2 + "\n";

    for (let i = 0; i < n - 2; i++) {
        str1 += " "
    }

    for (let i = 0; i < n - 2; i++) {
        output += "*" + str1 + "*" + "\n"
    }

    output += str2 + "\n";

    return output
}

function leftTriangleStar(n) {
    let output = "";

    for (let k = 0; k < n; k++) {
        let str1 = "";
        let str2 = "";

        for (let i = 0; i < n - k - 1; i++) {
            str1 += " ";
        };

        for (let i = k; i >= 0; i--) {
            str2 += "*";
        };

        output += str2 + str1 + "\n"
    };

    return output
}

function rightTriangleStar(n) {
    let output = "";

    for (let k = 0; k < n; k++) {
        let str1 = "";
        let str2 = "";

        for (let i = 0; i < n - k - 1; i++) {
            str1 += " ";
        };

        for (let i = k; i >= 0; i--) {
            str2 += "*";
        };

        output += str1 + str2 + "\n"
    };
    return output
}

function downwardTriangleStar(n) {
    let output = "";
    for (let k = 0; k < n; k++) {
        let str1 = "";
        let str2 = "";
        for (let i = 0; i < n - k; i++) {
            str1 += "*";
        };
        for (let i = k; i >= 0; i--) {
            str2 += " ";
        };
        output += str1 + str2 + "\n"
    };
    return output
}

function pyramidTriangleStar(n) {
    let output = "";
    for (let i = 0; i < n; i++) {
        let str1 = "";
        let str2 = "";

        for (let j = 1; j <= n - i; j++) {
            str1 += " ";
        };

        for (let k = 0; k < 2 * i - 1; k++) {
            str2 += "*";
        };

        output += str1 + str2 + str1 + "\n"
    };
    return output
}

function reversedPyramidtriangleStar(n) {
    let output = "";
    for (let i = n - 1; i >= 0; i--) {
        let str1 = "";
        let str2 = "";

        for (let j = 1; j <= n - i; j++) {
            str1 += " ";
        };

        for (let k = 0; k < 2 * i - 1; k++) {
            str2 += "*";
        };

        output += str1 + str2 + str1 + "\n"
    };
    return output
}

function diamondtriangleStar(n) {
    let output = "";

    let top = pyramidTriangleStar(n);

    output += top;

    let middle = "";
    for (let i = 0; i < (2 * n) - 1; i++) {
        middle += "*"
    };

    output += middle + "\n";
    let bottom = reversedPyramidtriangleStar(n);
    output += bottom;
    return output
}

console.log(squareStar(5))
console.log(hollowSquareStar(5))
console.log(leftTriangleStar(5))
console.log(rightTriangleStar(5))
console.log(downwardTriangleStar(5))
console.log(pyramidTriangleStar(5))
console.log(reversedPyramidtriangleStar(5))
console.log(diamondtriangleStar(5))