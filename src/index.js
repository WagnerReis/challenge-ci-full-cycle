function calculateAverage(numbers) {
  if (!Array.isArray(numbers)) {
      return null;
  }
  
  if (numbers.length === 0) {
      return 0;
  }

  let length = 0
  
  const sum = numbers.reduce((acc, curr) => {
    if (typeof curr !== 'number') {
          return acc;
      }
      length++
      return acc + curr;
  }, 0);
  
  return sum / length;
}

module.exports = { calculateAverage };

console.log(calculateAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))