/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  const n = grid.length;
  let cnt = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (isEqual(grid[i], getColumn(grid, j))) {
        cnt++;
      }
    }
  }
  return cnt;
};

function isEqual(arr1, arr2) {
  const len1 = arr1.length;
  const len2 = arr2.length;
  if (len1 !== len2) {
    return false;
  }

  for (let i = 0; i < len1; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

function getColumn(grid, columnIndex) {
  const column = [];
  const n = grid.length;

  for (let i = 0; i < n; i++) {
    column.push(grid[i][columnIndex]);
  }

  return column;
}

const grid = [
  [3, 1, 2, 2],
  [1, 4, 4, 5],
  [2, 4, 2, 2],
  [2, 4, 2, 2]
];

const result = equalPairs(grid);
console.log(result); // Output: 1
