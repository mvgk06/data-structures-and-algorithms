/*

Problem
https://leetcode.com/problems/house-robber/

Approach

1. Top down
- For every index, we have two choices we can either rob or don't rob the house.
- After making the choice, recursively solve the smaller sub-problems, and store the solutions in an array.
- If the index goes out of bounds then return 0 to indicate that no money can be robbed.
- If the current subproblem is already computed then return it instead of recomputing them. 

Time - O(n)
Space - O(n)

2. Bottom up
- Create a memo array and initialize with the base cases.
- For every index, we have two choices we can either rob or don't rob the house.
- Use the memo to get the solutions of smaller sub-problems.
- Return the last element in the memo which contains the solution for the main problem. 

Time - O(n)
Space - O(n)

n - number of houses

*/

/* Top down */

const robHelper = (nums, index, memo) => {

    if (index >= nums.length) {
        return 0;
    }

    if (memo[index] != -1) {
        return memo[index];
    }

    const rob = nums[index] + robHelper(nums, index + 2, memo);
    const dontRob = robHelper(nums, index + 1, memo);

    memo[index] = Math.max(rob, dontRob);
    return memo[index];

};

const rob = function (nums) {
    const memo = new Array(nums.length).fill(-1);
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