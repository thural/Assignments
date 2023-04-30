function binarySearch(arr, elem) {
    let index = -1;
    let target = Math.floor(arr.length / 2);
    let i = 0;
    
    while (i < arr.length) {
        if (arr[target] === elem) index = target
        else if (arr[target] > arr[target - 1]) target = Math.floor(target / 2)
        else target = Math.floor((target + arr.length - 1) / 2);
        i++
    }

    return index
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 4))