# [26. Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

## Solution 1 - Brute force

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

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the size of the array.

## Solution 2 - Two pointers

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

-   Time - `O(n)`
-   Space - `O(1)`
-   Where `n` is the size of the array.
