function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        let indexOfMin = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexOfMin]) indexOfMin = j
        }

        if (indexOfMin != i) {
            let tmp = arr[i];
            arr[i] = arr[indexOfMin];
            arr[indexOfMin] = tmp;
        }
    }
    return arr
}

console.log(selectionSort([3, 2, 1, 4, 8, 6, 9, 5, 7]))