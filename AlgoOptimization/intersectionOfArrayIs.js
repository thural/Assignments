//Write a function that finds the intersection of two sorted arrays. Implement a check to skip unnecessary comparisons when one of the arrays is empty.

function intersectionOfArrays(arr1, arr2) {
    const newArr = [];

    if (arr1.length < arr2.length) {
        const temp = arr1;
        arr1 = arr2;
        arr2 = temp;
    }

    for (let i = 0; i <= arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) newArr.push(arr1[i])
        }
    }

    return newArr
}

console.log(intersection([1, 2, 5], [1, 2, 3, 4, 5, 6, 7, 8]))