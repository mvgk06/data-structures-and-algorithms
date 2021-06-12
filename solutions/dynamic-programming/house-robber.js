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

2. Bottom up
- Create a memo array and initialize with the base cases.
- For every index I have two choices I can either rob the house or don't rob the house.
- Use the memo to get the solutions of smaller sub problems.
- Return the nth index of memo which contains the solution for the main problem. 

Time - O(n)
Space - O(n)

*/

/* Top down */

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
    const memo = new Array(nums.length + 1).fill(-1);
    return robHelper(nums, 0, memo);
};

/* Bottom up */

const rob2 = function (nums) {
    const memo = new Array(nums.length + 1).fill(0);
    memo[1] = nums[0];
    memo[2] = Math.max(nums[0], nums[1]);

    for (let i = 3; i < memo.length; i++) {
        memo[i] = Math.max(nums[i - 1] + memo[i - 2], memo[i - 1]);
    }

    return memo[nums.length];
};