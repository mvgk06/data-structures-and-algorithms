/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/dynamic-programming-and-greedy/climb-stairs-with-minimum-moves-official/ojquestion

https://leetcode.com/problems/jump-game-ii

Approach

1. Top down
- Each state in the memo represents the minimum number of moves to reach the last stair from the current stair.
- At each stair, we have k choices.
- After making a choice, recursively solve the smaller subproblem and store the solution in the memo.
- If the last stair is reached, then return 0 which is the minimum moves to reach the last stair.
- If out of bounds, then return a maximum value to indicate that last stair is not reachable.
- If the current subproblem is already computed then return it instead of recomputing them.

2. Bottom up
- Create a memo and initialize with base cases.
- Each state in the memo represents the minimum number of moves to reach the last stair from the current stair.  
- At each stair, we have k choices.
- Use the memo to get the solution for smaller subproblems.
- Return the first value in the memo which is the minimum number of moves to reach the last stair from 0.

Time - O(n*k)
Space - O(n)

n - number of stairs
k - average jump length

*/

/* Top down */

const waysToClimb = (currStair, n, jumps, memo) => {
    if (currStair === n) {
        return 0;
    }
    if (currStair > n) {
        return Number.MAX_VALUE;
    }
    if (memo[currStair] != -1) {
        return memo[currStair];
    }
    let ways = Number.MAX_VALUE;
    for (let i = 1; i <= jumps[currStair]; i++) {
        ways = Math.min(ways, 1 + waysToClimb(currStair + i, n, jumps, memo));
    }
    memo[currStair] = ways;
    return memo[currStair];
};

const solve = (n, jumps) => {
    const memo = new Array(n + 1).fill(-1);
    const result = waysToClimb(0, n, jumps, memo);
    console.log(result);
};

/* Bottom up */

const solve2 = (n, jumps) => {
    const memo = new Array(n + 1).fill(-1);
    memo[n] = 0;
    for (let i = n - 1; i >= 0; i--) {
        let ways = Number.MAX_VALUE;
        for (let j = 1; j <= jumps[i]; j++) {
            if (i + j <= n) {
                ways = Math.min(ways, 1 + memo[i + j]);
            }
        }
        memo[i] = ways;
    }
    const result = memo[0];
    console.log(result);
};