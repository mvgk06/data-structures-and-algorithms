# [70. Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)

## Solution 1 - Top down DP

```js
const helper = (n, i, memo) => {
    if (i === n) {
        return 1;
    }
    if (i > n) {
        return 0;
    }
    if (memo[i] !== -1) {
        return memo[i];
    }
    const first = helper(n, i + 1, memo);
    const second = helper(n, i + 2, memo);
    memo[i] = first + second;
    return memo[i];
};

const climbStairs = function (n) {
    const memo = new Array(n).fill(-1);
    return helper(n, 0, memo);
};
```

-   The `memo[i]` represents the number of ways to reach the last stair from `ith` stair.
-   At each stair, we can go to 1st or the 2nd stair.
-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the size of the array.

## Solution 2 - Bottom up DP

```js
const climbStairs = function (n) {
    const memo = new Array(n + 1).fill(0);
    memo[n] = 1;
    memo[n - 1] = 1;
    for (let i = n - 2; i >= 0; i--) {
        memo[i] = memo[i + 1] + memo[i + 2];
    }
    return memo[0];
};
```

-   The `memo[i]` represents the number of ways to reach the last stair from `ith` stair.
-   At each stair, we can go to 1st or the 2nd stair.
-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the size of the array.

## Solution 3 - Bottom up DP (space optimized)

```js
const climbStairs = function (n) {
    let second = 1,
        first = 1;
    for (let i = n - 2; i >= 0; i--) {
        const curr = first + second;
        second = first;
        first = curr;
    }
    return first;
};
```

-   Time - `O(n)`
-   Space - `O(1)`
-   Where `n` is the size of the array.
