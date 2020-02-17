module.exports = function countCats(matrix, count = 0) {
  for (let i = 0; i < matrix.length; i++) {
    if (Array.isArray(matrix[i]) && countCats(matrix[i], count)) {
      count += countCats(matrix[i]);
    } else if (matrix[i] === '^^') {
      count = count + 1;
    } else { }
  }
  return count;
};
