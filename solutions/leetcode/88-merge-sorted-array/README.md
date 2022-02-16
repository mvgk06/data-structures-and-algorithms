# [88. Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/)

## Solution 1 - Two pointers

```js
const merge = function (nums1, m, nums2, n) {
    const temp = [];
    let i = 0,
        j = 0;
    while (i < m && j < n) {
        if (nums1[i] <= nums2[j]) {
            temp.push(nums1[i]);
            i++;
        } else {
            temp.push(nums2[j]);
            j++;
        }
    }
    while (i < m) {
        temp.push(nums1[i]);
        i++;
    }
    while (j < n) {
        temp.push(nums2[j]);
        j++;
    }
    for (let k = 0; k < nums1.length; k++) {
        nums1[k] = temp[k];
    }
};
```

-   Time - `O(m+n)`
-   Space - `O(m+n)`
-   Where `m` and `n` are size of the two arrays.

## Solution 2 - Two pointers (space optimized)

```js
const merge = function (nums1, m, nums2, n) {
    let i = m - 1,
        j = n - 1,
        k = m + n - 1;
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            k--;
            i--;
        } else {
            nums1[k] = nums2[j];
            k--;
            j--;
        }
    }
    while (j >= 0) {
        nums1[k] = nums2[j];
        k--;
        j--;
    }
};
```

-   Time - `O(m+n)`
-   Space - `O(1)`
-   Where `m` and `n` are size of the two arrays.
