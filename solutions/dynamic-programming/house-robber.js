/*

Problem
https://leetcode.com/problems/house-robber/

Approach

1. Top down
- For every index I have two choices I can either rob the house or don't rob the house.
- Recursively solve the smaller sub problems, store the solution of the sub problem in an array and return it.
- If the current index goes out of bounds return 0 to indicate that no money can be robbed.
- If the current sub problem is already computed return the computed solution instead of recomputing them. 

Time - O(n)
Space - O(n)

*/

const robHelper = (nums, currIndex, memo) => {

    if (currIndex >= nums.length) {
        return 0;
    }

    if (memo[currIndex] != -1) {
        return memo[currIndex];
    }

    const robCurr = nums[currIndex] + robHelper(nums, currIndex + 2, memo);
    const dontRobCurr = robHelper(nums, currIndex + 1, memo);

    memo[currIndex] = Math.max(robCurr, dontRobCurr);
    return memo[currIndex];

};

const rob = function (nums) {
    const memo = new Array(nums.length).fill(-1);
    return robHelper(nums, 0, memo);
};