/*

Problem

https://leetcode.com/problems/range-sum-query-immutable/

Approach
- Create a prefix array and compute the prefix sum.
- Based on the range return the sum.

For each query

Time - O(1)
Space - O(1)

*/

class NumArray {
    constructor(nums) {
        this.prefix = new Array(nums.length).fill(0);
        this.prefix[0] = nums[0];
        for (let i = 1; i < nums.length; i++) {
            this.prefix[i] = this.prefix[i - 1] + nums[i];
        }
    }
    sumRange(left, right) {
        if (left === 0) {
            return this.prefix[right];
        }
        return this.prefix[right] - this.prefix[left - 1];
    };
};
