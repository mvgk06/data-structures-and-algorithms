# [2148. Count Elements With Strictly Smaller and Greater Elements](https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/)

## Solution 1 - Brute force

```js
const countElements = function (nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        let sm = false,
            gt = false;
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] < nums[i]) {
                sm = true;
            } else if (nums[j] > nums[i]) {
                gt = true;
            }
        }
        if (sm && gt) {
            result++;
        }
    }
    return result;
};
```

-   Time - `O(n^2)`
-   Space - `O(1)`
-   Where `n` is the size of the array.

## Solution 2 - Optimized

```js
const countElements = function (nums) {
    let min = Number.MAX_VALUE,
        max = -Number.MAX_VALUE;
    for (const num of nums) {
        min = Math.min(min, num);
        max = Math.max(max, num);
    }
    let result = 0;
    for (const num of nums) {
        if (num > min && num < max) {
            result++;
        }
    }
    return result;
};
```

-   Time - `O(n)`
-   Space - `O(1)`
-   Where `n` is the size of the array.
