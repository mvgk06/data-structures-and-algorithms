/*

Problem
https://leetcode.com/problems/jump-game/

Approach

1. Top down
- For each index, try all possible jump lengths.
- After making a choice, recursively solve the sub-problems and store the solution in an array.
- If the last index is reached, then return 1 to indicate that the solution is found.
- Else return 0 to indicate that the solution is not found.
- If the current subproblem is already computed, then return it instead of recomputing them.

Time - O(n)
Space - O(n)

n - number of elements

*/

/* Top down */

const canJumpHelper = (nums, currIndex, memo) => {

    if (currIndex === nums.length - 1) {
        return 1;
    }

    if (currIndex > nums.length - 1) {
        return 0;
    }

    if (memo[currIndex] != -1) {
        return memo[currIndex];
    }

    for (let i = 1; i <= nums[currIndex]; i++) {
        memo[currIndex] = canJumpHelper(nums, currIndex + i, memo);
        if (memo[currIndex] === 1) {
            return 1;
        }
    }

    return 0;
};

const canJump = function (nums) {
    const memo = new Array(nums.length).fill(-1);
    const result = canJumpHelper(nums, 0, memo);
    if (result === 1) {
        return true;
    }
    return false;
};
