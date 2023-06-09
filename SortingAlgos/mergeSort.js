function merge(left, right) {
    let arr = []
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }

    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [...arr, ...left, ...right]
}

function mergeSort(arr) {
    const half = arr.length / 2

    // Base case or terminating case
    if (arr.length < 2) {
        return arr
    }

    const left = arr.slice(0, half)
    const right = arr.slice(half)


    return merge(mergeSort(left), mergeSort(right))
}

console.log(mergeSort([3, 2, 1, 4, 8, 6, 9, 5, 7]))