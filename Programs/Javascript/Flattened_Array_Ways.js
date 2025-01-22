//A flattened array is an array that has been converted from a nested or multi-dimensional structure into a single-level array.
//Flattening Simplifies the array by removing its nested levels, so all elements are directly accessible in a single dimension.
//const nestedArray = [1, [2, 3], [4, [5, 6]]];
//const flattenedArray = [1, 2, 3, 4, 5, 6];

//1.Using Array.prototype.flat:

const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flattenedArray = nestedArray.flat(Infinity); // Use Infinity for full flattening
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]

//2.Using recursion:

function flattenArray(arr) {
  return arr.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val),
    []
  );
}
console.log(flattenArray(nestedArray)); // Output: [1, 2, 3, 4, 5, 6]

//3. Using a stack-based approach:

function flattenArray1(arr) {
  const stack = [...arr];
  const result = [];
  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next); // Push nested elements back into stack
    } else {
      result.push(next);
    }
  }
  return result.reverse(); // Reverse to maintain original order
}

console.log(flattenArray1(nestedArray)); // Output: [1, 2, 3, 4, 5, 6]
//4.Using a library like Lodash:
const _ = require('lodash');
const flattenedArray1 = _.flattenDeep(nestedArray);
console.log(flattenedArray1); // Output: [1, 2, 3, 4, 5, 6]
