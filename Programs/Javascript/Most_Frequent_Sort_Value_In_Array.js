const arr = [1, 1, 2, 2, 3, 4, 4, 4, 7, 11, 9];

// Step 1: Count the frequency of each element
const frequencyMap = arr.reduce((map, num) => {
  map[num] = (map[num] || 0) + 1;
  return map;
}, {});

// Step 2: Sort by frequency and maintain original order if counts are the same
const sortedByFrequency = Object.entries(frequencyMap)
  .sort((a, b) => {
    if (b[1] === a[1]) {
      // Maintain original order by comparing indices in the array
      return arr.indexOf(Number(a[0])) - arr.indexOf(Number(b[0]));
    }
    return b[1] - a[1]; // Sort by count in descending order
  })
  .map(([key, value]) => ({ [key]: value })); // Convert to key-value pair objects

console.log(sortedByFrequency);

/*[
  { '4': 3 },
  { '1': 2 },
  { '2': 2 },
  { '3': 1 },
  { '7': 1 },
  { '11': 1 },
  { '9': 1 }
]*/
