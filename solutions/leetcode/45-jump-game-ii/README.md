# [45. Jump Game II](https://leetcode.com/problems/jump-game-ii/)

## Solution 1 - Top down DP

```js
const helper = (nums, i, memo) => {
    if (i === nums.length - 1) {
        return 0;
    }
    if (i >= nums.length) {
        return Number.MAX_VALUE;
    }
    if (memo[i] !== -1) {
        return memo[i];
    }
    let moves = Number.MAX_VALUE;
    for (let j = 1; j <= nums[i]; j++) {
        moves = Math.min(moves, 1 + helper(nums, i + j, memo));
    }
    memo[i] = moves;
    return memo[i];
};

const jump = function (nums) {
    const memo = new Array(nums.length).fill(-1);
    return helper(nums, 0, memo);
};
```

-   The `memo[i]` represents the minimum number of jumps to reach the last stair from the `ith` stair.
-   At each stair, we can jump at most `k` length.
-   Time - `O(n*k)`
-   Space - `O(n)`
-   Where `n` is the size of the array, `k` is the maximum jump length.

## Solution 2 - Bottom up DP

```js
const jump = function (nums) {
    const n = nums.length,
        memo = new Array(n).fill(-1);
    memo[n - 1] = 0;
    for (let i = n - 2; i >= 0; i--) {
        let moves = Number.MAX_VALUE;
        for (let j = 1; j <= nums[i]; j++) {
            if (i + j < n) {
                moves = Math.min(moves, 1 + memo[i + j]);
            }
        }
        memo[i] = moves;
    }
    return memo[0];
};
```

-   The `memo[i]` represents the minimum number of jumps to reach the last stair from the `ith` stair.
-   At each stair, we can jump at most `k` length.
-   Time - `O(n*k)`
-   Space - `O(n)`
-   Where `n` is the size of the array, `k` is the maximum jump length.
