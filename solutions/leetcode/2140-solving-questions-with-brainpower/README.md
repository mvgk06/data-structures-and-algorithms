# [2140. Solving Questions With Brainpower](https://leetcode.com/problems/solving-questions-with-brainpower/)

## Solution 1 - Top down DP

```js
const helper = (arr, i, memo) => {
    if (i >= arr.length) {
        return 0;
    }
    if (memo[i] !== -1) {
        return memo[i];
    }
    const ans = arr[i][0] + helper(arr, i + arr[i][1] + 1, memo);
    const skip = helper(arr, i + 1, memo);
    memo[i] = Math.max(ans, skip);
    return memo[i];
};

const mostPoints = function (arr) {
    const memo = new Array(arr.length).fill(-1);
    return helper(arr, 0, memo);
};
```

-   The `memo[i]` represents the maximum points that we can get if we start solving the questions from the `ith` index.
-   At each step we have two choices, either answer or skip the question.
-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the size of the array.

## Solution 2 - Bottom up DP

```js
const mostPoints = function (arr) {
    const n = arr.length,
        memo = new Array(n).fill(0);
    memo[n - 1] = arr[n - 1][0];
    for (let i = n - 2; i >= 0; i--) {
        const next = i + arr[i][1] + 1;
        memo[i] = Math.max(arr[i][0] + (memo[next] ? memo[next] : 0), memo[i + 1]);
    }
    return memo[0];
};
```

-   The `memo[i]` represents the maximum points that we can get if we start solving the questions from the `ith` index.
-   At each step we have two choices, either answer or skip the question.
-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the size of the array.
