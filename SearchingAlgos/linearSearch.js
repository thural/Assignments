function linearSearch(arr, elem) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elem) return i
    }
    
    return -1
}

console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8], 3))