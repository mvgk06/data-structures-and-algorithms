# [283. Move Zeroes](https://leetcode.com/problems/move-zeroes/)

## Solution 1 - Two pointers

```js
const moveZeroes = function (nums) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != 0) {
            const temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i++;
        }
    }
};
```

-   Time - `O(n)`
-   Space - `O(1)`
-   Where `n` is the size of the array.
