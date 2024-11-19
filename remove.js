function distinct(a) {
  const seen = new Set();
  return a.filter(item => {
    if (seen.has(item)) {
      return false;
    }
    seen.add(item);
    return true;
  });
}

// Example usage:
const array = [1, 2, 3, 2, 4, 1, 5];
console.log(distinct(array)); // Output: [1, 2, 3, 4, 5]

