function mergeSortUnique(arr1, arr2) {
    // Merge the two arrays
    const mergedArray = arr1.concat(arr2);

    // Remove duplicates using a Set
    const uniqueArray = [...new Set(mergedArray)];

    // Sort the array in ascending order
    uniqueArray.sort((a, b) => a - b);

    return uniqueArray;
}

// Example Usage
const array1 = [5, 3, 8, 6, 3];
const array2 = [7, 2, 4, 1, 8];

const result = mergeSortUnique(array1, array2);
console.log(result); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

/*
Time Complexity
Merging: 𝑂(𝑛+𝑚) where  𝑛 and 𝑚 are the lengths of the arrays.
Removing Duplicates: 𝑂(𝑛+𝑚) for creating the Set.
Sorting: 𝑂(𝑘log𝑘) where 𝑘 is the size of the unique array.
Total: 𝑂((𝑛+𝑚)+𝑘log𝑘).
Space Complexity
𝑂(𝑘), where 𝑘 is the size of the unique array after removing duplicates. */

//without using Sets
function mergeSortUniqueWithoutSet(arr1, arr2) {
    const mergedArray = arr1.concat(arr2);
    const uniqueArray = [];

    for (let num of mergedArray) {
        if (!uniqueArray.includes(num)) {
            uniqueArray.push(num);
        }
    }

    uniqueArray.sort((a, b) => a - b);
    return uniqueArray;
}

const result1 = mergeSortUniqueWithoutSet(array1, array2);
console.log(result1);