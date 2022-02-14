# [278. First Bad Version](https://leetcode.com/problems/first-bad-version/)

## Solution 1 - Binary search

```js
const solution = function (isBadVersion) {
    return function (n) {
        let start = 1,
            end = n,
            result = -1;
        while (start <= end) {
            const mid = Math.floor(start + (end - start) / 2);
            if (isBadVersion(mid)) {
                result = mid;
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return result;
    };
};
```

-   Time - `O(logn)`
-   Space - `O(1)`
-   Where `n` is a number.
