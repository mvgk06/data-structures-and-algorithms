# [62. Unique Paths](https://leetcode.com/problems/unique-paths/)

## Solution 1 - Top down DP

```js
const helper = (m, n, i, j, memo) => {
    if (i >= m || j >= n) {
        return 0;
    }
    if (i === m - 1 && j === n - 1) {
        return 1;
    }
    if (memo[i][j] !== -1) {
        return memo[i][j];
    }
    const right = helper(m, n, i, j + 1, memo);
    const down = helper(m, n, i + 1, j, memo);
    memo[i][j] = right + down;
    return memo[i][j];
};

const uniquePaths = function (m, n) {
    const memo = new Array(m);
    for (let i = 0; i < m; i++) {
        memo[i] = new Array(n).fill(-1);
    }
    return helper(m, n, 0, 0, memo);
};
```

-   The `memo[i][j]` represents the number of ways to reach the destination cell from `(i, j)`.
-   From each cell, we can either go right or down.
-   Time - `O(m*n)`
-   Space - `O(m*n)`
-   Where `m` is the number of rows, `n` is the number of columns.

## Solution 2 - Bottom up DP

```js
const uniquePaths = function (m, n) {
    const memo = new Array(m);
    for (let i = 0; i < m; i++) {
        memo[i] = new Array(n).fill(0);
    }
    for (let j = 0; j < n; j++) {
        memo[m - 1][j] = 1;
    }
    for (let i = 0; i < m; i++) {
        memo[i][n - 1] = 1;
    }
    for (let i = m - 2; i >= 0; i--) {
        for (let j = n - 2; j >= 0; j--) {
            memo[i][j] = memo[i][j + 1] + memo[i + 1][j];
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
const uniquePaths = function (m, n) {
    let next = new Array(n).fill(1);
    for (let i = m - 2; i >= 0; i--) {
        const curr = new Array(n);
        curr[n - 1] = 1;
        for (let j = n - 2; j >= 0; j--) {
            curr[j] = curr[j + 1] + next[j];
        }
        next = curr;
    }
    return next[0];
};
```

-   Time - `O(m*n)`
-   Space - `O(n)`
-   Where `m` is the number of rows, `n` is the number of columns.
