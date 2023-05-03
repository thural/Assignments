//ArraySorting - tək və cüt ədədlər artan sıra ilə:
//[1,4,26,4,7,9,13] => [1,7,9,13,4,4,26]

function bubbleSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr
}

function sortOddAndEvenArray(arr){
    let oddNums = [];
    let evenNums = [];

    for (let i=0; i < arr.length; i++){
        if (arr[i] % 2 === 0) evenNums.push(arr[i])
        else oddNums.push(arr[i])
    }

    oddNums = bubbleSort(oddNums)
    evenNums = bubbleSort(evenNums)

    return [...oddNums,...evenNums]
}

console.log(sortOddAndEvenArray([1,4,26,4,7,9,13]))
