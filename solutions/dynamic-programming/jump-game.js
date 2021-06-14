/*

Problem
https://leetcode.com/problems/jump-game/

Approach

1. Top down
- For every index, try all possible jump lengths.
- Recursively solve the sub problems and store the solution in an array.
- If the index n-1 was reachable then return 1 to indicate that the solution was found and no need to try other choices.
- After trying all possible jump lengths return 0 to indicate that the solution was not found.
- If the index n-1 was reached, store the solution for n-1 as 1 and return it.
- If the current index exceeded n-1 then return 0 to indicate that the solution was not found.
- If the current sub problem is already computed return the computed solution instead of recomputing them.

Time - O(n)
Space - O(n)

2. Bottom up
- Create a memo array and initialize with the base cases.
- For every index, traverse the memo backwards, if that index and current index was reachable then store the solution as 1 for the current index.
- Return the nth index of memo which contains the solution for the main problem.

Time - O(n^2)
Space - O(n)

*/

/* Top down */

const canJumpHelper = (nums, currIndex, memo) => {

    if (currIndex === nums.length - 1) {
        memo[currIndex] = 1;
        return memo[currIndex];
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
    const memo = new Array(nums.length + 1).fill(-1);
    const result = canJumpHelper(nums, 0, memo);
    if (result === 1) {
        return true;
    }
    return false;
};

/* Bottom up */

const canJump2 = function (nums) {
    const memo = new Array(nums.length + 1).fill(-1);
    memo[1] = 1;
    if (nums[0] >= 1) {
        memo[2] = 1;
    }
    else {
        memo[2] = 0;
    }

    for (let i = 3; i < memo.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (memo[j] === 1) {
                if (nums[j - 1] >= (i - j)) {
                    memo[i] = 1;
                    break;
                }
            }
        }
    }

    const result = memo[nums.length];
    if (result === 1) {
        return true;
    }
    return false;
};