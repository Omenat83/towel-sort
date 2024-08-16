
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let result = []
  if (!matrix) { return [] };
  result = matrix.flatMap((element, index, arr) => {
      return index % 2 === 0
          ? element.sort((a, b) => a - b)
          : element.sort((a, b) => b - a);
  });
  return result;   
}
