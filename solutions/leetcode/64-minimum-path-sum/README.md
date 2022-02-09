# [64. Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/)

## Solution 1 - Top down DP

```js
const helper = (grid, i, j, memo) => {
    if (i >= grid.length || j >= grid[i].length) {
        return Number.MAX_VALUE;
    }
    if (i === grid.length - 1 && j === grid[i].length - 1) {
        return grid[i][j];
    }
    if (memo[i][j] !== -1) {
        return memo[i][j];
    }
    const right = helper(grid, i, j + 1, memo);
    const down = helper(grid, i + 1, j, memo);
    memo[i][j] = grid[i][j] + Math.min(right, down);
    return memo[i][j];
};

const minPathSum = function (grid) {
    const memo = new Array(grid.length);
    for (let i = 0; i < memo.length; i++) {
        memo[i] = new Array(grid[i].length).fill(-1);
    }
    return helper(grid, 0, 0, memo);
};
```

-   The `memo[i][j]` represents the minimum path sum if we start from the cell `(i,j)`.
-   From each cell we can either go right or down.
-   Time - `O(n*m)`
-   Space - `O(n*m)`
-   Where `n` is the number of rows, `m` is the number of columns.

## Solution 2 - Bottom up DP

```js
const minPathSum = function (grid) {
    const n = grid.length,
        m = grid[0].length;
    const memo = new Array(n);
    for (let i = 0; i < n; i++) {
        memo[i] = new Array(m).fill(0);
    }
    memo[n - 1][m - 1] = grid[n - 1][m - 1];
    for (let j = m - 2; j >= 0; j--) {
        memo[n - 1][j] = grid[n - 1][j] + memo[n - 1][j + 1];
    }
    for (let i = n - 2; i >= 0; i--) {
        memo[i][m - 1] = grid[i][m - 1] + memo[i + 1][m - 1];
    }
    for (let i = n - 2; i >= 0; i--) {
        for (let j = m - 2; j >= 0; j--) {
            memo[i][j] = grid[i][j] + Math.min(memo[i][j + 1], memo[i + 1][j]);
        }
    }
    return memo[0][0];
};
```

-   The `memo[i][j]` represents the minimum path sum if we start from the cell `(i,j)`.
-   From each cell we can either go right or down.
-   Time - `O(n*m)`
-   Space - `O(n*m)`
-   Where `n` is the number of rows, `m` is the number of columns.

## Solution 3 - Bottom up DP (space optimized)

```js
const minPathSum = function (grid) {
    const n = grid.length,
        m = grid[0].length;
    let next = new Array(n);
    next[m - 1] = grid[n - 1][m - 1];
    for (let j = m - 2; j >= 0; j--) {
        next[j] = grid[n - 1][j] + next[j + 1];
    }
    for (let i = n - 2; i >= 0; i--) {
        const curr = new Array(n);
        curr[m - 1] = grid[i][m - 1] + next[m - 1];
        for (let j = m - 2; j >= 0; j--) {
            curr[j] = grid[i][j] + Math.min(curr[j + 1], next[j]);
        }
        next = curr;
    }
    return next[0];
};
```

-   Time - `O(n*m)`
-   Space - `O(m)`
-   Where `n` is the number of rows, `m` is the number of columns.
