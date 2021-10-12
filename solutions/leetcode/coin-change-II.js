/*

Problem

https://leetcode.com/problems/coin-change-2/

Approach

1. Top down
- The memo[i][j] represents the number of ways to get the amount j if we can pick elements till the ith index.
- For each index, we have two choices either we can pick or don't pick the current coin.
- After making the choice, recursively solve the smaller sub-problems and store the solution in the memo.
- If the index is out of bounds and if the amount is 0, then return 1 to indicate that we have found a way.
- Else return 0 to indicate that no way is possible.
- If the current subproblem is already solved, then return it's solution instead of recomputing the solution again.

Time - O(n*amount)
Space - O(n*amount)

2. Bottom up
- Create a memo array and initialize with base cases.
- The memo[i][j] represents the number of ways to get the amount j when the size of input is i.
- For each index, we have two choices either we can pick or don't pick the current coin.
- Use the memo to get the solutions to the smaller sub-problems.
- Return the cell (n, amount) which contains the solution to the main problem.

Time - O(n*amount)
Space - O(n*amount)

3. Bottom up (space optimized)
- To compute the current row, we need the solutions only from the current and the previous row. 
- So we can just have two arrays (previous and current) to keep track of the solution of the subproblems.
- Use the current and the previous row to get the solution of the current row, then copy the contents of the current row into the previous row.
- Return the last element which contains the solution of the main problem.

Time - O(n*amount)
Space - O(amount)

n - number of coins
amount - total amount

*/

/* Top down */

const changeHelper = (coins, amt, i, memo) => {
    if (i < 0) {
        if (amt === 0) {
            return 1;
        }
        return 0;
    }
    if (memo[i][amt] != -1) {
        return memo[i][amt];
    }
    if (coins[i] <= amt) {
        const pick = changeHelper(coins, amt - coins[i], i, memo);
        const dontPick = changeHelper(coins, amt, i - 1, memo);
        memo[i][amt] = pick + dontPick;
    }
    else {
        const dontPick = changeHelper(coins, amt, i - 1, memo);
        memo[i][amt] = dontPick;
    }
    return memo[i][amt];
};

const change = function (amount, coins) {
    const memo = new Array(coins.length);
    for (let i = 0; i < memo.length; i++) {
        memo[i] = new Array(amount + 1).fill(-1);
    }
    return changeHelper(coins, amount, coins.length - 1, memo);
};

/* Bottom up */

const change2 = function (amount, coins) {
    const memo = new Array(coins.length + 1);
    for (let i = 0; i < memo.length; i++) {
        memo[i] = new Array(amount + 1).fill(0);
    }
    for (let i = 0; i < memo.length; i++) {
        memo[i][0] = 1;
    }
    for (let i = 1; i < memo.length; i++) {
        for (let j = 1; j < memo[i].length; j++) {
            if (coins[i - 1] <= j) {
                memo[i][j] = memo[i][j - coins[i - 1]] + memo[i - 1][j];
            }
            else {
                memo[i][j] = memo[i - 1][j];
            }
        }
    }
    return memo[coins.length][amount];
};

/* Bottom up (space optimized) */

const change3 = function (amount, coins) {
    let prevMemo = new Array(amount + 1).fill(0);
    prevMemo[0] = 1;
    for (let i = 1; i <= coins.length; i++) {
        const currMemo = new Array(amount + 1);
        currMemo[0] = 1;
        for (let j = 1; j <= amount; j++) {
            if (coins[i - 1] <= j) {
                currMemo[j] = currMemo[j - coins[i - 1]] + prevMemo[j];
            }
            else {
                currMemo[j] = prevMemo[j];
            }
        }
        prevMemo = [...currMemo];
    }
    return prevMemo[amount];
};
