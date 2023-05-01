//Write a function that finds the first non-repeated character in a string. Implement a check to skip further iterations once the non-repeated character is found.

function firstNonRepeatedChar(str) {
    for (let i = 0; i < str.length; i++) {
        let nonRepeated = true

        for (let j = i + 1; j < str.length; j++) {

            if(str.charAt(i) === str.charAt(j)) {
                nonRepeated = false;
                break
            }

        }

        if(nonRepeated) return str.charAt(i)
    }
}

console.log(firstNonRepeatedChar("pineapple"))