// To find all sets of numbers from the array [1, 2, 3, 4, 5] that sum to 5, allowing values to be repeated, you can use a backtracking algorithm

function findSets(target, nums) {
  const results = [];
  
  function backtrack(tempSet, currentSum, startIndex) {
      if (currentSum === target) {
          results.push([...tempSet]); // Add a copy of the current set
          return;
      }
      if (currentSum > target) {
          return; // Stop exploring further if the sum exceeds the target
      }
      
      for (let i = startIndex; i < nums.length; i++) {
          tempSet.push(nums[i]); // Include the current number
          backtrack(tempSet, currentSum + nums[i], i); // Recur with the current number
          tempSet.pop(); // Backtrack: remove the last added number
      }
  }
  
  backtrack([], 0, 0);
  return results;
}

const nums = [1, 2, 3, 4, 5];
const targetSum = 5;

const sets = findSets(targetSum, nums);
console.log(sets);


/*[
    [1, 1, 1, 1, 1],
    [1, 1, 1, 2],
    [1, 1, 3],
    [1, 2, 2],
    [1, 4],
    [2, 3],
    [5]
  ]*/
