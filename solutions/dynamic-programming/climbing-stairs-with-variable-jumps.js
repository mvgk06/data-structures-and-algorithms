/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/dynamic-programming-and-greedy/climb-stairs-with-variable-jumps-official/ojquestion

Approach

1. Top down
- Each state in the memo represents the number of ways to reach the last stair from the current stair.  
- At each stair, we have k choices.
- After making a choice, recursively solve the smaller subproblem and store the solution in the memo.
- If the last stair is reached, then return 1 to indicate that a way is found.
- If out of bounds, then return 0 to indicate that no way is possible.
- If the current subproblem is already computed then return it instead of recomputing them.

2. Bottom up
- Create a memo and initialize with base cases.
- Each state in the memo represents the number of ways to reach the last stair from the current stair.  
- At each stair, we have k choices.
- Use the memo to get the solution for smaller subproblems.
- Return the first value in the memo which is the number of ways to reach the last stair from 0.

Time - O(n*k)
Space - O(n)

n - number of stairs
k - average jump length

*/

/* Top down */

const waysToClimb = (currStair, n, jumps, memo) => {
    if (currStair === n) {
        return 1;
    }
    if (currStair > n) {
        return 0;
    }
    if (memo[currStair] != -1) {
        return memo[currStair];
    }
    let ways = 0;
    for (let i = 1; i <= jumps[currStair]; i++) {
        ways += waysToClimb(currStair + i, n, jumps, memo);
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
    const memo = new Array(n + 1).fill(0);
    memo[n] = 1;
    for (let i = n - 1; i >= 0; i--) {
        let ways = 0;
        for (let j = 1; j <= jumps[i]; j++) {
            if (i + j <= n) {
                ways += memo[i + j];
            }
        }
        memo[i] = ways;
    }
    const result = memo[0];
    console.log(result);
};