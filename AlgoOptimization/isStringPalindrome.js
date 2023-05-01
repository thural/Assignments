//Write a function that checks if a given string is a palindrome. Implement a check to skip further comparisons once a mismatch is found.

function isStringPalindrome(str) {
    const length = Math.floor(str.length / 2);
    if (length == 0) return false;
    for (let i = 0; i < length; i++) {
        if (str.charAt(i) !== str.charAt(length - i - 1)) return false
    }
    return true
}

console.log(isStringPalindrome("LOLL"))
console.log(isStringPalindrome("LOL"))