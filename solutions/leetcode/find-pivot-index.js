/*

Problem

https://leetcode.com/problems/find-pivot-index/

Approach

1. Prefix sum
- Create a prefix array and compute the prefix sum.
- Traverse the input, get the left and right sum using the prefix array.
- If the left and the right sum is equal, then return the current index.

Time - O(n)
Space - O(n)

2. Prefix sum (space optimized)
- Instead of using prefix array, compute the sum.
- Initialize the left sum as 0.
- Traverse the input, compute the right sum using the sum, left sum and the current element.
- If the left sum and the right sum is equal, then return the current index.

Time - O(n)
Space - O(1)

n - number of elements

*/

/* Prefix sum */

const rangeSum = (prefix, l, r) => {
    if (l === 0) {
        return prefix[r];
    }
    return prefix[r] - prefix[l - 1];
};

const pivotIndex = function (nums) {
    const n = nums.length, prefix = new Array(n).fill(0);
    prefix[0] = nums[0];
    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] + nums[i];
    }
    for (let i = 0; i < n; i++) {
        const leftSum = rangeSum(prefix, 0, i) - nums[i], rightSum = rangeSum(prefix, i + 1, n - 1);
        if (leftSum === rightSum) {
            return i;
        }
    }
    return -1;
};

/* Prefix sum (space optimized) */

const pivotIndex2 = function (nums) {
    const n = nums.length;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += nums[i];
    }
    let leftSum = 0;
    for (let i = 0; i < n; i++) {
        if (leftSum === sum - leftSum - nums[i]) {
            return i;
        }
        leftSum += nums[i];
    }
    return -1;
};