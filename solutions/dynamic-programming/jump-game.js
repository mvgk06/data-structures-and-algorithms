/*

Problem
https://leetcode.com/problems/jump-game/

Approach

1. Top down
- For every index, try all possible jump lengths.
- Recursively solve the sub problems and store the solution in an array.
- If the index n-1 was reachable then return 0 to indicate that the solution was found and no need to try other choices.
- After trying all possible jump lengths return -1 to indicate that the solution was not found.
- If the index n-1 was reached, store the solution for n-1 as 0 and return it.
- If the current index exceeded n-1 then return -1 to indicate that the solution was not found.
- If the current sub problem is already computed return the computed solution instead of recomputing them.

Time - O(n)
Space - O(n)

*/

const canJumpHelper = (nums, currIndex, memo) => {

    if (currIndex === nums.length - 1) {
        memo[currIndex] = 0;
        return memo[currIndex];
    }

    if (currIndex > nums.length - 1) {
        return -1;
    }

    if (memo[currIndex] != 1) {
        return memo[currIndex];
    }

    for (let i = 1; i <= nums[currIndex]; i++) {
        memo[currIndex] = canJumpHelper(nums, currIndex + i, memo);
        if (memo[currIndex] === 0) {
            return 0;
        }
    }

    return -1;
};

const canJump = function (nums) {
    const memo = new Array(nums.length).fill(1);
    canJumpHelper(nums, 0, memo);
    if (memo[nums.length - 1] === 0) {
        return true;
    }
    return false;
};