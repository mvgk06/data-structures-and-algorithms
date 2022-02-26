# [53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)

## Solution 1 - Top down DP

```js
const helper = (nums, i, memo) => {
    if (i < 0) {
        return 0;
    }
    if (memo[i] !== -1) {
        return memo[i];
    }
    const maxSoFar = helper(nums, i - 1, memo);
    memo[i] = Math.max(maxSoFar + nums[i], nums[i]);
    return memo[i];
};

const maxSubArray = function (nums) {
    const n = nums.length,
        memo = new Array(n).fill(-1);
    helper(nums, n - 1, memo);
    let res = -Number.MAX_VALUE;
    for (const sol of memo) {
        res = Math.max(res, sol);
    }
    return res;
};
```

-   The `memo[i]` represents the maximum subarray sum ending at `ith` index.
-   At each index, we can either join the existing subarray or start a new one.
-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the size of the array.

## Solution 2 - Bottom up DP

```js
const maxSubArray = function (nums) {
    const n = nums.length,
        memo = new Array(n).fill(0);
    memo[0] = nums[0];
    for (let i = 1; i < n; i++) {
        memo[i] = Math.max(memo[i - 1] + nums[i], nums[i]);
    }
    let res = -Number.MAX_VALUE;
    for (const sol of memo) {
        res = Math.max(res, sol);
    }
    return res;
};
```

-   The `memo[i]` represents the maximum subarray sum ending at `ith` index.
-   At each index, we can either join the existing subarray or start a new one.
-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the size of the array.

## Solution 3 - Bottom up DP (space optimized)

```js
const maxSubArray = function (nums) {
    const n = nums.length;
    let prev = nums[0],
        res = prev;
    for (let i = 1; i < n; i++) {
        const curr = Math.max(prev + nums[i], nums[i]);
        res = Math.max(res, curr);
        prev = curr;
    }
    return res;
};
```

-   Time - `O(n)`
-   Space - `O(1)`
-   Where `n` is the size of the array.
