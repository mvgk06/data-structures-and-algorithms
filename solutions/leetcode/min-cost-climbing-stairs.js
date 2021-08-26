/*

Problem

https://leetcode.com/problems/min-cost-climbing-stairs/

Approach

1. Top down
- Each state represents the minimum cost to reach the last stair from current stair.
- For each stair, we pay the coins for the current stair and have two choices either we can go to 1st or the 2nd stair.
- After making the choice, recursively solve the smaller sub-problems and store the solutions in the memo.
- If the last stair is reached, then return 0 which is the minimum cost.
- If out of bounds, then return 1e6 to indicate that last stair is not reachable.
- If the current subproblem is already computed return it instead of recomputing them again.
- Return the minimum of first and second element in the memo which is the minimum cost to reach the last stair.

Time - O(n)
Space - O(n)

2. Bottom up
- Create a memo array and initialize with base cases.
- Each state represents the minimum cost to reach the last stair from current stair.
- For each stair, we pay the coins for the current stair and have two choices either we can go to 1st or the 2nd stair.
- Use the memo to get the solution of the smaller sub-problems.
- Return the minimum of first and second element in the memo which is the minimum cost to reach the last stair.

Time - O(n)
Space - O(n)

3. Bottom up  (space optimized)
- To compute the current state, we need only the previous two states.
- Use two variables first, second to keep track of the previous two states.
- Compute the solution for the current state and update the previous states.
- Return the final state that contains the solution for the main problem.

Time - O(n)
Space - O(1)

4. Optimal Path
- Traverse the memo backwards from the final state to the base state.
- Based on the transitions compute the optimal path.

Time - O(n)
Space - O(1)

n - number of stairs

*/

/* Top down */

const helper = (cost, i, memo) => {
    if (i > cost.length) {
        return 1e6;
    }
    if (i === cost.length) {
        return 0;
    }
    if (memo[i] != -1) {
        return memo[i];
    }
    const first = helper(cost, i + 1, memo);
    const second = helper(cost, i + 2, memo);
    memo[i] = cost[i] + Math.min(first, second);
    return memo[i];
};

const minCostClimbingStairs = function (cost) {
    const memo = new Array(cost.length).fill(-1);
    helper(cost, 0, memo);
    return Math.min(memo[0], memo[1]);
};

/* Bottom up */

const minCostClimbingStairs2 = function (cost) {
    const n = cost.length, memo = new Array(n).fill(-1);
    memo[n - 1] = cost[n - 1];
    memo[n - 2] = cost[n - 2];
    for (let i = n - 3; i >= 0; i--) {
        memo[i] = cost[i] + Math.min(memo[i + 1], memo[i + 2]);
    }
    return Math.min(memo[0], memo[1]);
};

/* Bottom up (space optimized) */

const minCostClimbingStairs3 = function (cost) {
    const n = cost.length;
    let first = cost[n - 2], second = cost[n - 1];
    for (let i = n - 3; i >= 0; i--) {
        const curr = cost[i] + Math.min(first, second);
        second = first;
        first = curr;
    }
    return Math.min(first, second);
};

/* Optimal path */

const optimalPath = (cost, memo) => {
    const n = cost.length, path = [];
    let i = 0;
    if (memo[1] < memo[0]) {
        i = 1;
    }
    path.push(i);
    while (i + 2 < n) {
        if (memo[i + 1] < memo[i + 2]) {
            path.push(i + 1);
            i = i + 1;
        }
        else {
            path.push(i + 2);
            i = i + 2;
        }
    }
    return path;
};