# [198. House Robber](https://leetcode.com/problems/house-robber/)

## Solution 1 - Top down DP

```js
const helper = (nums, i, memo) => {
    if (i < 0) {
        return 0;
    }
    if (memo[i] !== -1) {
        return memo[i];
    }
    const rob = nums[i] + helper(nums, i - 2, memo);
    const dontRob = helper(nums, i - 1, memo);
    memo[i] = Math.max(rob, dontRob);
    return memo[i];
};

const rob = function (nums) {
    const memo = new Array(nums.length).fill(-1);
    return helper(nums, nums.length - 1, memo);
};
```

-   The `memo[i]` represents the maximum money that can be robbed if we rob till the `ith` house.
-   At each index, we can either rob or don't rob the current house.
-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the size of the array.

## Solution 2 - Bottom up DP

```js
const rob = function (nums) {
    const n = nums.length,
        memo = new Array(n);
    memo[0] = nums[0];
    memo[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < n; i++) {
        memo[i] = Math.max(nums[i] + memo[i - 2], memo[i - 1]);
    }
    return memo[n - 1];
};
```

-   The `memo[i]` represents the maximum money that can be robbed if we rob till the `ith` house.
-   At each index, we can either rob or don't rob the current house.
-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the size of the array.

## Solution 3 - Bottom up DP (space optimized)

```js
const rob = function (nums) {
    const n = nums.length;
    if (n === 1) {
        return nums[0];
    }
    let prev2 = nums[0],
        prev = Math.max(nums[0], nums[1]);
    for (let i = 2; i < n; i++) {
        const curr = Math.max(nums[i] + prev2, prev);
        prev2 = prev;
        prev = curr;
    }
    return prev;
};
```

-   Time - `O(n)`
-   Space - `O(1)`
-   Where `n` is the size of the array.
