const input = 'aabbbcddddbaaa';
//o/p: a1b2cd3ba2
const countString = (input) => {
  let str = '';
  let prev_string = '';
  let counter = 0;
  input.split('').forEach((char, index) => {
    if (prev_string != '') {
      if (prev_string === char) {
        counter++;
      } else if (prev_string != char) {
        if (counter === 0) counter = '';
        str = str + prev_string;
        str = str + counter;
        counter = 0;
      } else {
        counter = 0;
      }
    }

    prev_string = char;
  });
  if (counter != 0) {
    str = str + prev_string;
    str = str + counter;
  }

  console.log(str);
};

const output = countString(input);




function compressString(input) {
    let result = ''; // Initialize the result string
    let count = 1; // Counter for consecutive characters

    for (let i = 1; i <= input.length; i++) {
        // Check if the current character is the same as the previous one
        if (input[i] === input[i - 1]) {
            count++; // Increment the count
        } else {
            // Append the character to the result
            result += input[i - 1];
            // Append the count if it's greater than 1
            if (count > 1) result += count;
            count = 1; // Reset the count
        }
    }

    return result;
}

// Example usage
//const input = 'aabbbcddddbaaa';
console.log(compressString(input)); // Output: a1b2cd3ba2