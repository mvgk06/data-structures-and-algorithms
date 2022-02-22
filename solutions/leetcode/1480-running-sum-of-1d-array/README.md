# [1480. Running Sum of 1d Array](https://leetcode.com/problems/running-sum-of-1d-array/)

## Solution 1 - Prefix sum

```js
const runningSum = function (nums) {
    const n = nums.length,
        prefix = new Array(n);
    prefix[0] = nums[0];
    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] + nums[i];
    }
    return prefix;
};
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the size of the array.
