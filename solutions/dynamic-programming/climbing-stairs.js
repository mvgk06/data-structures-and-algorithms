/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/dynamic-programming-and-greedy/climb-stairs-official/ojquestion

https://leetcode.com/problems/climbing-stairs/

Approach

1. Top down
- Each state represents the number of ways to reach the last stair from current stair.
- For each stair, we have three choices either we can go to 1st, 2nd or the 3rd stair.
- After making the choice, recursively solve the smaller sub-problems and store the solutions in the memo.
- If the last stair is reached, then return 1 to indicate that we have found a way.
- If out of bounds, then return 0 to indicate that last stair is not reachable.
- If the current subproblem is already computed return it instead of recomputing them again.

Time - O(n)
Space - O(n)

2. Bottom up
- Create a memo array and initialize with base cases.
- Each state represents the number of ways to reach the last stair from current stair.
- For each stair, we have three choices either we can go to 1st, 2nd or the 3rd stair.
- Use the memo to get the solution of the smaller sub-problems.
- Return the last element of the memo which is the number of ways to reach the last stair from 0.

Time - O(n)
Space - O(n)

n - number of stairs

*/

/* Top down */

const waysToClimb = (n, currStair, memo) => {

    if (currStair === n) {
        return 1;
    }

    if (currStair > n) {
        return 0;
    }

    if (memo[currStair] != -1) {
        return memo[currStair];
    }

    const first = waysToClimb(n, currStair + 1, memo);
    const second = waysToClimb(n, currStair + 2, memo);
    const third = waysToClimb(n, currStair + 3, memo);
    memo[currStair] = first + second + third;
    return memo[currStair];
};

const solve = function (n) {
    const memo = new Array(n).fill(-1);
    const result = waysToClimb(n, 0, memo);
    console.log(result);
};

/* Bottom up */

const solve2 = function (n) {
    const memo = new Array(n + 1).fill(0);
    memo[0] = 1;
    memo[1] = 1;
    memo[2] = 2;
    memo[3] = 4;

    for (let i = 4; i < memo.length; i++) {
        memo[i] = memo[i - 1] + memo[i - 2] + memo[i - 3];
    }

    const result = memo[n];
    console.log(result);
};