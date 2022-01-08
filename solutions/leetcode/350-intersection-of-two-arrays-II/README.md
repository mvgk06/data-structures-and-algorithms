# [350. Intersection of Two Arrays II](https://leetcode.com/problems/intersection-of-two-arrays-ii/)

## Solution 1 - Hash map

```js
const intersect = function (nums1, nums2) {
    const map = new Map();
    for (let i = 0; i < nums1.length; i++) {
        if (map.has(nums1[i])) {
            map.set(nums1[i], map.get(nums1[i]) + 1);
        } else {
            map.set(nums1[i], 1);
        }
    }
    const result = [];
    for (let i = 0; i < nums2.length; i++) {
        if (map.has(nums2[i])) {
            result.push(nums2[i]);
            map.set(nums2[i], map.get(nums2[i]) - 1);
            if (map.get(nums2[i]) === 0) {
                map.delete(nums2[i]);
            }
        }
    }
    return result;
};
```

-   Time - `O(n+m)`
-   Space - `O(n)`
-   Where `n` and `m` are the size of two arrays.
