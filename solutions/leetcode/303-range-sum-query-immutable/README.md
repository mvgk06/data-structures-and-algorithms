# [303. Range Sum Query - Immutable](https://leetcode.com/problems/range-sum-query-immutable/)

## Solution 1 - Prefix sum

```js
class NumArray {
    constructor(nums) {
        const n = nums.length;
        this.prefix = new Array(n).fill(0);
        this.prefix[0] = nums[0];
        for (let i = 1; i < n; i++) {
            this.prefix[i] = this.prefix[i - 1] + nums[i];
        }
    }
    sumRange(l, r) {
        if (l === 0) {
            return this.prefix[r];
        }
        return this.prefix[r] - this.prefix[l - 1];
    }
}
```

-   Time - `O(n+q)`
-   Space - `O(n)`
-   Where `n` is the size of the array, `q` is the number of queries.
