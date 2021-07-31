/*

Problem

https://leetcode.com/problems/concatenation-of-array/

Approach
- Traverse the array copy the ith element to ith and (i+n)th index of the result.
- Return the result.

Time - O(n)
Space - O(2*n)

n - number of elements

*/

const getConcatenation = function (nums) {
    const n = nums.length;
    const result = new Array(2 * n);
    for (let i = 0; i < n; i++) {
        result[i] = nums[i];
        result[i + n] = nums[i];
    }
    return result;
};