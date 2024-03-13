function hasTargetSum(array, target) {
  // Iterate through the array
  for (let i = 0; i < array.length; i++) {
    // Iterate through the array again starting from the next element
    for (let j = i + 1; j < array.length; j++) {
      // Check if the sum of the current pair of numbers equals the target
      if (array[i] + array[j] === target) {
        return true; // If found, return true
      }
    }
  }
  // If no pair is found, return false
  return false;
}

module.exports = hasTargetSum;
