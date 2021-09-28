/*

Problem

https://leetcode.com/problems/find-the-middle-index-in-array/

Approach

1. Prefix sum
- Compute the sum of elements in the array.
- Build the prefix sum, if the right and the left sum is equal, then return the current index.
- If there is no match, then return -1.

Time - O(n)
Space - O(n)

2. Prefix sum (space optimized)
- We need only the previous prefix sum to compute the solution.
- Use a variable lsum to keep track of the prefix sum.
- If the right and the left sum is equal, then return the current index.
- If there is no match, then return -1.

Time - O(n)
Space - O(1)

n - number of elements

*/

/* Prefix sum */

const findMiddleIndex = function (nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    const prefix = new Array(nums.length);
    prefix[0] = nums[0];
    if (sum - nums[0] === 0) {
        return 0;
    }
    for (let i = 1; i < nums.length; i++) {
        if (sum - (prefix[i - 1] + nums[i]) === prefix[i - 1]) {
            return i;
        }
        prefix[i] = prefix[i - 1] + nums[i];
    }
    return -1;
};

/* Prefix sum (space optimized) */

const findMiddleIndex2 = function (nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    let lSum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (sum - (lSum + nums[i]) === lSum) {
            return i;
        }
        lSum += nums[i];
    }
    return -1;
};