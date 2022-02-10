# [120. Triangle](https://leetcode.com/problems/triangle/)

## Solution 1 - Top down DP

```js
const helper = (triangle, i, j, memo) => {
    if (i === triangle.length - 1) {
        return triangle[i][j];
    }
    if (memo[i][j] !== -1) {
        return memo[i][j];
    }
    const bottom = helper(triangle, i + 1, j, memo);
    const bottomRight = helper(triangle, i + 1, j + 1, memo);
    memo[i][j] = triangle[i][j] + Math.min(bottom, bottomRight);
    return memo[i][j];
};

const minimumTotal = function (triangle) {
    const memo = new Array(triangle.length);
    for (let i = 0; i < memo.length; i++) {
        memo[i] = new Array(triangle[i].length).fill(-1);
    }
    return helper(triangle, 0, 0, memo);
};
```

-   The `memo[i][j]` represents the minimum path sum if we start from the cell `(i,j)`.
-   From each cell we can either go bottom or bottom right.
-   Time - `O(n*m)`
-   Space - `O(n*m)`
-   Where `n` is the number of rows, `m` is the number of columns.

## Solution 2 - Bottom up DP

```js
const minimumTotal = function (triangle) {
    const n = triangle.length,
        memo = new Array(n);
    for (let i = 0; i < n; i++) {
        memo[i] = new Array(triangle[i].length).fill(-1);
    }
    for (let j = 0; j < triangle[n - 1].length; j++) {
        memo[n - 1][j] = triangle[n - 1][j];
    }
    for (let i = n - 2; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            memo[i][j] = triangle[i][j] + Math.min(memo[i + 1][j], memo[i + 1][j + 1]);
        }
    }
    return memo[0][0];
};
```

-   The `memo[i][j]` represents the minimum path sum if we start from the cell `(i,j)`.
-   From each cell we can either go bottom or bottom right.
-   Time - `O(n*m)`
-   Space - `O(n*m)`
-   Where `n` is the number of rows, `m` is the number of columns.

## Solution 3 - Bottom up DP (space optimized)

```js
const minimumTotal = function (triangle) {
    const n = triangle.length;
    let next = new Array(n);
    for (let j = 0; j < triangle[n - 1].length; j++) {
        next[j] = triangle[n - 1][j];
    }
    for (let i = n - 2; i >= 0; i--) {
        const curr = new Array(triangle[i].length);
        for (let j = 0; j < triangle[i].length; j++) {
            curr[j] = triangle[i][j] + Math.min(next[j], next[j + 1]);
        }
        next = curr;
    }
    return next[0];
};
```

-   Time - `O(n*m)`
-   Space - `O(m)`
-   Where `n` is the number of rows, `m` is the number of columns.
