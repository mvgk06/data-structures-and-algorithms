/*

Problem
https://leetcode.com/problems/climbing-stairs/

Approach

1. Top down
- For each stair I have two choices either I can go to the 1st stair or the 2nd stair.
- Recursively solve the smaller sub problems and store the solutions in an array.
- If the top of the stair is reached then return 1 to indicate that we have found a way to reach the top.
- If the current stair becomes more than the top then return 0 to indicate that there is no way to reach the top.
- If the current sub problem is already computed return it instead of recomputing them again.

Time - O(n)
Space - O(n)

2. Bottom up
- Create a memo array and initialize with base cases.
- For each stair I have two choices either I could have came from the stair i-1 or i-2.
- Use the memo to get the solution of the smaller sub problems.
- Return the nth index of memo which contains the solution for the main problem.

Time - O(n)
Space - O(n)

*/

/* Top down */

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
    const memo = new Array(n + 1).fill(-1);
    return climbStairsHelper(n, 0, memo);
};

/* Bottom up */

const climbStairs2 = function (n) {
    const memo = new Array(n + 1).fill(0);
    memo[1] = 1;
    memo[2] = 2;

    for (let i = 3; i < memo.length; i++) {
        memo[i] = memo[i - 1] + memo[i - 2];
    }

    return memo[n];
};