function binarySearch(arr, elem) {
    let target = Math.floor((arr.length) / 2);
    let i = 0;

    while (i < arr.length) {
        if (arr[target] === elem) return target
        else if (arr[target] > elem) target = Math.floor(target / 2)
        else target = Math.floor((arr.length - 1 + target) / 2);
        i++
    }

    return -1
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 5))