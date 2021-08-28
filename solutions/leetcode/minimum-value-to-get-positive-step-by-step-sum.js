/*

Problem

https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/

Approach

1. Prefix sum
- Create a prefix array and compute the prefix sum.
- Initialize the result as either 1 or the first prefix sum whichever is minimum. 
- Update the result when a better minimum intermediate value is found.
- If the result is negative, then it means that we need to start with at least absolute value of result+1 to make all the intermediate values to be greater than 1.
- Else return the result.

Time - O(n)
Space - O(n)

2. Prefix sum (space optimized)
- Instead of using a prefix array, compute of the sum.
- Initialize the result as either 1 or the sum whichever is minimum. 
- Update the result when a better minimum intermediate value is found.
- If the result is negative, then it means that we need to start with at least absolute value of result+1 to make all the intermediate values to be greater than 1.
- Else return the result.

Time - O(n)
Space - O(1)

n - number of elements

*/

/* Prefix sum */

const minStartValue = function (nums) {
    const n = nums.length, prefix = new Array(n);
    prefix[0] = nums[0];
    let result = Math.min(1, prefix[0]);
    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] + nums[i];
        result = Math.min(result, prefix[i]);
    }
    if (result < 0) {
        return 1 + Math.abs(result);
    }
    return result;
};

/* Prefix sum (space optimized) */

const minStartValue2 = function (nums) {
    const n = nums.length;
    let sum = nums[0], result = Math.min(1, sum);
    for (let i = 1; i < n; i++) {
        sum += nums[i];
        result = Math.min(result, sum);
    }
    if (result < 0) {
        return 1 + Math.abs(result);
    }
    return result;
};