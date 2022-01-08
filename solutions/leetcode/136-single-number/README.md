# [136. Single Number](https://leetcode.com/problems/single-number/)

## Solution 1 - Bit manipulation

```js
const singleNumber = function (nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result ^= nums[i];
    }
    return result;
};
```

-   Time - `O(n)`
-   Space - `O(1)`
-   Where `n` is the size of the array.
