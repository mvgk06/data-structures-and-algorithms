# [283. Move Zeroes](https://leetcode.com/problems/move-zeroes/)

## Solution 1 - Two pointers

-   Use two pointers, `i` to keep track of the first zero and `j` to traverse the input.
-   Traverse the input array and if the current element is non-zero, then swap the elements at `i`, `j` and increment `i`.
-   Complexity
    -   Time - `O(n)`
    -   Space - `O(1)`
    -   Where `n` is the size of the array.

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
