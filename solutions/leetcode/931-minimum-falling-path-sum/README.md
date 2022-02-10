# [931. Minimum Falling Path Sum](https://leetcode.com/problems/minimum-falling-path-sum/)

## Solution 1 - Top down DP

```js
const helper = (mat, paths, i, j, memo) => {
    if (j < 0 || j >= mat.length) {
        return 1e5;
    }
    if (i === mat.length - 1) {
        return mat[i][j];
    }
    if (memo[i][j] !== -1) {
        return memo[i][j];
    }
    let curr = Number.MAX_VALUE;
    for (let k = 0; k < paths.length; k++) {
        const row = i + paths[k][0],
            col = j + paths[k][1];
        curr = Math.min(curr, helper(mat, paths, row, col, memo));
    }
    memo[i][j] = mat[i][j] + curr;
    return memo[i][j];
};

const minFallingPathSum = function (matrix) {
    const n = matrix.length,
        memo = new Array(n);
    for (let i = 0; i < n; i++) {
        memo[i] = new Array(n).fill(-1);
    }
    const paths = [
        [1, -1],
        [1, 0],
        [1, 1],
    ];
    let result = Number.MAX_VALUE;
    for (let j = 0; j < n; j++) {
        result = Math.min(result, helper(matrix, paths, 0, j, memo));
    }
    return result;
};
```

-   The `memo[i][j]` represents the minimum falling path sum if we start from the cell `(i,j)`.
-   From each cell we can either go bottom left, bottom or bottom right.
-   Time - `O(n^2)`
-   Space - `O(n^2)`
-   Where `n` is the number of rows, columns.

## Solution 2 - Bottom up DP

```js
const minFallingPathSum = function (matrix) {
    const n = matrix.length,
        memo = new Array(n);
    for (let i = 0; i < n; i++) {
        memo[i] = new Array(n);
    }
    const paths = [
        [1, -1],
        [1, 0],
        [1, 1],
    ];
    for (let j = 0; j < n; j++) {
        memo[n - 1][j] = matrix[n - 1][j];
    }
    for (let i = n - 2; i >= 0; i--) {
        for (let j = 0; j < n; j++) {
            let curr = Number.MAX_VALUE;
            for (let k = 0; k < paths.length; k++) {
                const row = i + paths[k][0],
                    col = j + paths[k][1];
                if (col >= 0 && col < n) {
                    curr = Math.min(curr, memo[row][col]);
                }
            }
            memo[i][j] = matrix[i][j] + curr;
        }
    }
    let result = Number.MAX_VALUE;
    for (let j = 0; j < n; j++) {
        result = Math.min(result, memo[0][j]);
    }
    return result;
};
```

-   The `memo[i][j]` represents the minimum falling path sum if we start from the cell `(i,j)`.
-   From each cell we can either go bottom left, bottom or bottom right.
-   Time - `O(n^2)`
-   Space - `O(n^2)`
-   Where `n` is the number of rows, columns.

## Solution 3 - Bottom up DP (space optimized)

```js
const minFallingPathSum = function (matrix) {
    const n = matrix.length,
        paths = [
            [1, -1],
            [1, 0],
            [1, 1],
        ];
    let next = new Array(n);
    for (let j = 0; j < n; j++) {
        next[j] = matrix[n - 1][j];
    }
    for (let i = n - 2; i >= 0; i--) {
        const curr = new Array(n);
        for (let j = 0; j < n; j++) {
            let currRes = Number.MAX_VALUE;
            for (let k = 0; k < paths.length; k++) {
                const col = j + paths[k][1];
                if (col >= 0 && col < n) {
                    currRes = Math.min(currRes, next[col]);
                }
            }
            curr[j] = matrix[i][j] + currRes;
        }
        next = curr;
    }
    let result = Number.MAX_VALUE;
    for (let j = 0; j < n; j++) {
        result = Math.min(result, next[j]);
    }
    return result;
};
```

-   Time - `O(n^2)`
-   Space - `O(n)`
-   Where `n` is the number of rows, columns.
