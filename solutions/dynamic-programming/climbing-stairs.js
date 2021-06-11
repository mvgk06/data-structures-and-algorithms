/*

Problem
https://leetcode.com/problems/climbing-stairs/

Approach

1. Top down
- For each stair I have two options either I can go to the 1st stair or the 2nd stair.
- Recursively solve the smaller sub problems and store the solutions in an array.
- If the top of the stair is reached then return 1 to indicate that we have found a way to reach the top.
- If the current stair becomes more than the top then return 0 to indicate that there is no way to reach the top.
- If the current sub problem is already computed return it instead of recomputing them again.

Time - O(n)
Space - O(n)

*/

const climbStairsHelper = (n, currStair, memo) => {

    if (currStair === n) {
        return 1;
    }

    if (currStair > n) {
        return 0;
    }

    if (memo[currStair] != -1) {
        return memo[currStair];
    }

    const firstStair = climbStairsHelper(n, currStair + 1, memo);
    const secondStair = climbStairsHelper(n, currStair + 2, memo);
    memo[currStair] = firstStair + secondStair;
    return memo[currStair];
};

const climbStairs = function (n) {
    const memo = new Array(n).fill(-1);
    return climbStairsHelper(n, 0, memo);
};