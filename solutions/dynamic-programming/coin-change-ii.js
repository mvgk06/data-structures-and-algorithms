/*

Problem
https://leetcode.com/problems/coin-change-2/

Approach

1. Top down
- For each index, we have two choices either we can pick or don't pick the coin.
- After making the choice, recursively solve the smaller sub-problems and store the solution in an array.
- If the end of the array is reached if the amount is 0 return 1 to indicate that we have found a way.
- Else return 0 to indicate that no way is possible.
- If the current subproblem is already computed then return it instead of recomputing them.

Time - O(n*amount)
Space - O(n*amount)

2. Bottom up
- Create a memo array and initialize with base cases.
- For each index, we have two choices either we can pick or don't pick the coin.
- Use the memo to get the solutions to the smaller sub-problems.
- Return the cell (n, amount) which contains the solution to the main problem.

Time - O(n*amount)
Space - O(n*amount)

n - number of coins
amount - total amount

*/

/* Top down */

const changeHelper = (coins, amount, index, memo) => {
    if (index === coins.length) {
        if (amount === 0) {
            return 1;
        }
        else {
            return 0;
        }
    }

    if (memo[index][amount] != -1) {
        return memo[index][amount];
    }

    if (coins[index] <= amount) {
        const pick = changeHelper(coins, amount - coins[index], index, memo);
        const dontPick = changeHelper(coins, amount, index + 1, memo);
        memo[index][amount] = pick + dontPick;
        return memo[index][amount];
    }

    const dontPick = changeHelper(coins, amount, index + 1, memo);
    memo[index][amount] = dontPick;
    return memo[index][amount];

};

const change = function (amount, coins) {

    const memo = new Array(coins.length);
    for (let i = 0; i < memo.length; i++) {
        memo[i] = new Array(amount + 1).fill(-1);
    }

    return changeHelper(coins, amount, 0, memo);
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
                memo[i][j] = (memo[i][j - coins[i - 1]] + memo[i - 1][j]);
            }
            else {
                memo[i][j] = memo[i - 1][j];
            }
        }
    }

    return memo[coins.length][amount];
};