/*

Problem

https://leetcode.com/problems/maximum-difference-between-increasing-elements/

Approach

1. Brute force
- Traverse all the pairs.
- If the left is smaller than right, then update the result.

Time - O(n^2)
Space - O(1)

2. Optimized
- Keep track of minimum so far.
- If the minimum so far is smaller than current element, then update the result.
- Else update the minimum so far.

Time - O(n)
Space - O(1)

n - number of elements

*/

/* Brute force */

const maximumDifference = function (nums) {
    let result = -1;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                result = Math.max(result, nums[j] - nums[i]);
            }
        }
    }
    return result;
};

/* Optimized */

const maximumDifference2 = function (nums) {
    let min = nums[0], result = -1;
    for (let i = 1; i < nums.length; i++) {
        if (min < nums[i]) {
            result = Math.max(result, nums[i] - min);
        }
        else {
            min = nums[i];
        }
    }
    return result;
};