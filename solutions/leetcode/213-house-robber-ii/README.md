# [213. House Robber II](https://leetcode.com/problems/house-robber-ii/)

## Solution 1 - Top down DP

```js
const helper = (nums, start, i, memo) => {
    if (i < start) {
        return 0;
    }
    if (memo[i] !== -1) {
        return memo[i];
    }
    const rob = nums[i] + helper(nums, start, i - 2, memo);
    const dontRob = helper(nums, start, i - 1, memo);
    memo[i] = Math.max(rob, dontRob);
    return memo[i];
};

const rob = function (nums) {
    const n = nums.length;
    if (n === 1) {
        return nums[0];
    }
    const memo = new Array(n).fill(-1);
    const skipFirst = helper(nums, 1, n - 1, memo);
    memo.fill(-1);
    const skipLast = helper(nums, 0, n - 2, memo);
    return Math.max(skipFirst, skipLast);
};
```

-   The `memo[i]` represents the maximum money that can be robbed if we rob till the `ith` house.
-   At each index, we can either rob or don't rob the current house.
-   Skip the first or the last house inorder to break the cycle and return the maximum of both the results.
-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the size of the array.

## Solution 2 - Bottom up DP

```js
const helper = (nums, memo, skipFirst) => {
    const n = nums.length;
    memo[0] = skipFirst ? 0 : nums[0];
    memo[1] = skipFirst ? nums[1] : Math.max(nums[0], nums[1]);
    for (let i = 2; i < n; i++) {
        memo[i] = Math.max(nums[i] + memo[i - 2], memo[i - 1]);
    }
    return skipFirst ? memo[n - 1] : memo[n - 2];
};

const rob = function (nums) {
    const n = nums.length;
    if (n === 1) {
        return nums[0];
    }
    const memo = new Array(n).fill(-1);
    const skipFirst = helper(nums, memo, true);
    const skipLast = helper(nums, memo, false);
    return Math.max(skipFirst, skipLast);
};
```

-   The `memo[i]` represents the maximum money that can be robbed if we rob till the `ith` house.
-   At each index, we can either rob or don't rob the current house.
-   Skip the first or the last house inorder to break the cycle and return the maximum of both the results.
-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the size of the array.

## Solution 3 - Bottom up DP (space optimized)

```js
const helper = (nums, skipFirst) => {
    const n = nums.length;
    let prev2 = skipFirst ? 0 : nums[0];
    let prev = skipFirst ? nums[1] : Math.max(nums[0], nums[1]);
    for (let i = 2; i < n; i++) {
        const curr = Math.max(nums[i] + prev2, prev);
        prev2 = prev;
        prev = curr;
    }
    return skipFirst ? prev : prev2;
};

const rob = function (nums) {
    if (nums.length === 1) {
        return nums[0];
    }
    const skipFirst = helper(nums, true);
    const skipLast = helper(nums, false);
    return Math.max(skipFirst, skipLast);
};
```

-   Time - `O(n)`
-   Space - `O(1)`
-   Where `n` is the size of the array.
