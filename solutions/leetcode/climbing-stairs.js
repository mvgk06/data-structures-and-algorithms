/*

Problem

https://leetcode.com/problems/climbing-stairs/

Approach

1. Top down
- Each state represents the number of ways to reach the last stair from current stair.
- For each stair, we have two choices either we can go to 1st or the 2nd stair.
- After making the choice, recursively solve the smaller sub-problems and store the solutions in the memo.
- If the last stair is reached, then return 1 to indicate that we have found a way.
- If out of bounds, then return 0 to indicate that last stair is not reachable.
- If the current subproblem is already computed return it instead of recomputing them again.

Time - O(n)
Space - O(n)

2. Bottom up
- Create a memo array and initialize with base cases.
- Each state represents the number of ways to reach the last stair from current stair.
- For each stair, we have two choices either we can go to 1st or the 2nd stair.
- Use the memo to get the solution of the smaller sub-problems.
- Return the last element of the memo which is the number of ways to reach the last stair.

Time - O(n)
Space - O(n)

n - number of stairs

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
    const memo = new Array(n).fill(-1);
    return climbStairsHelper(n, 0, memo);
};

/* Bottom up */

const climbStairs = function (n) {
    const memo = new Array(n + 1).fill(0);
    memo[n] = 1;
    for (let i = n - 1; i >= 0; i--) {
        if (i + 1 <= n && i + 2 <= n) {
            memo[i] = memo[i + 1] + memo[i + 2];
        }
        else if (i + 1 <= n) {
            memo[i] = memo[i + 1];
        }
    }
    return memo[0];
};