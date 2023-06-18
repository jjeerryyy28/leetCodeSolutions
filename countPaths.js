/**
 * @param {number[][]} grid
 * @return {number}
 */
var countPaths = function (grid) {
  let MOD = Math.pow(10, 9) + 7;
  let result = 0;
  let m = grid.length,
    n = grid[0].length;
  let dp = Array(m)
    .fill(null)
    .map((_) => Array(n).fill(0));

  const dfs = (m1, n1, preVal) => {
    if (m1 < 0 || m1 == m || n1 < 0 || n1 == n || grid[m1][n1] <= preVal)
      return 0;
    if (dp[m1][n1]) return dp[m1][n1];
    return (dp[m1][n1] =
      (1 +
        dfs(m1 + 1, n1, grid[m1][n1]) +
        dfs(m1 - 1, n1, grid[m1][n1]) +
        dfs(m1, n1 + 1, grid[m1][n1]) +
        dfs(m1, n1 - 1, grid[m1][n1])) %
      MOD);
  };
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      result += dfs(i, j, -1) % MOD;
    }
  }

  return result % MOD;
};
