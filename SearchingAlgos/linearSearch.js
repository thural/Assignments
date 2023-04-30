function linearSearch(arr, elem) {
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elem) index = i
    }
    return index
}

console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8], 3))