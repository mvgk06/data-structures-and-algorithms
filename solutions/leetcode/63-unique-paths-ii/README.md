# [63. Unique Paths II](https://leetcode.com/problems/unique-paths-ii/)

## Solution 1 - Top down DP

```js
const helper = (grid, i, j, memo) => {
    if (i >= grid.length || j >= grid[i].length || grid[i][j] === 1) {
        return 0;
    }
    if (i === grid.length - 1 && j === grid[i].length - 1) {
        return 1;
    }
    if (memo[i][j] !== -1) {
        return memo[i][j];
    }
    const right = helper(grid, i, j + 1, memo);
    const down = helper(grid, i + 1, j, memo);
    memo[i][j] = right + down;
    return memo[i][j];
};

const uniquePathsWithObstacles = function (grid) {
    const m = grid.length,
        n = grid[0].length,
        memo = new Array(m);
    for (let i = 0; i < m; i++) {
        memo[i] = new Array(n).fill(-1);
    }
    return helper(grid, 0, 0, memo);
};
```

-   The `memo[i][j]` represents the number of ways to reach the destination cell from `(i, j)`.
-   From each cell, we can either go right or down.
-   Time - `O(m*n)`
-   Space - `O(m*n)`
-   Where `m` is the number of rows, `n` is the number of columns.

## Solution 2 - Bottom up DP

```js
const uniquePathsWithObstacles = function (grid) {
    const m = grid.length,
        n = grid[0].length,
        memo = new Array(m);
    for (let i = 0; i < m; i++) {
        memo[i] = new Array(n).fill(0);
    }
    if (grid[m - 1][n - 1] !== 1) {
        memo[m - 1][n - 1] = 1;
    } else {
        memo[m - 1][n - 1] = 0;
    }
    for (let j = n - 2; j >= 0; j--) {
        if (grid[m - 1][j] !== 1) {
            memo[m - 1][j] = memo[m - 1][j + 1];
        } else {
            memo[m - 1][j] = 0;
        }
    }
    for (let i = m - 2; i >= 0; i--) {
        if (grid[i][n - 1] !== 1) {
            memo[i][n - 1] = memo[i + 1][n - 1];
        } else {
            memo[i][n - 1] = 0;
        }
    }
    for (let i = m - 2; i >= 0; i--) {
        for (let j = n - 2; j >= 0; j--) {
            if (grid[i][j] !== 1) {
                memo[i][j] = memo[i][j + 1] + memo[i + 1][j];
            } else {
                memo[i][j] = 0;
            }
        }
    }
    return memo[0][0];
};
```

-   The `memo[i][j]` represents the number of ways to reach the destination cell from `(i, j)`.
-   From each cell, we can either go right or down.
-   Time - `O(m*n)`
-   Space - `O(m*n)`
-   Where `m` is the number of rows, `n` is the number of columns.

## Solution 3 - Bottom up DP (space optimized)

```js
const uniquePathsWithObstacles = function (grid) {
    const m = grid.length,
        n = grid[0].length;
    let next = new Array(n);
    if (grid[m - 1][n - 1] !== 1) {
        next[n - 1] = 1;
    } else {
        next[n - 1] = 0;
    }
    for (let j = n - 2; j >= 0; j--) {
        if (grid[m - 1][j] !== 1) {
            next[j] = next[j + 1];
        } else {
            next[j] = 0;
        }
    }
    for (let i = m - 2; i >= 0; i--) {
        const curr = new Array(n);
        if (grid[i][n - 1] !== 1) {
            curr[n - 1] = next[n - 1];
        } else {
            curr[n - 1] = 0;
        }
        for (let j = n - 2; j >= 0; j--) {
            if (grid[i][j] !== 1) {
                curr[j] = curr[j + 1] + next[j];
            } else {
                curr[j] = 0;
            }
        }
        next = curr;
    }
    return next[0];
};
```

-   Time - `O(m*n)`
-   Space - `O(n)`
-   Where `m` is the number of rows, `n` is the number of columns.
