# [26. Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

## Solution 1 - Brute force

-   Copy the unique elements from the input array to a temp array.
-   Copy the unique elements from the temp array back to the input array.
-   Return the number of the unique elements.
-   Complexity
    -   Time - `O(n)`
    -   Space - `O(n)`
    -   Where `n` is the size of the array.

```js
const removeDuplicates = function (nums) {
    const n = nums.length;
    if (n <= 1) {
        return n;
    }
    const temp = new Array(n);
    temp[0] = nums[0];
    let i = 0;
    for (let j = 1; j < n; j++) {
        if (temp[i] !== nums[j]) {
            i++;
            temp[i] = nums[j];
        }
    }
    for (let k = 0; k <= i + 1; k++) {
        nums[k] = temp[k];
    }
    return i + 1;
};
```

## Solution 2 - Two pointers

-   Use two pointers, `i` to keep track of last index of the unique elements and `j` to to traverse the input.
-   If the current element is unique, then increment `i` and swap the values at `i` and `j`.
-   Return `i+1` which is the number of the unique elements.
-   Complexity
    -   Time - `O(n)`
    -   Space - `O(1)`
    -   Where `n` is the size of the array.

```js
const removeDuplicates = function (nums) {
    const n = nums.length;
    if (n <= 1) {
        return n;
    }
    let i = 0;
    for (let j = 0; j < n; j++) {
        if (nums[i] !== nums[j]) {
            i++;
            const temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }
    }
    return i + 1;
};
```
