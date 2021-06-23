/* 

Problem
https://leetcode.com/problems/coin-change/

Approach

1. Top down
- For each index, we have two choices either we pick or don't pick the current coin.
- After making the choice, recursively solve the smaller sub-problems and store the solution in an array.
- If the end of the array is reached then there are no more choices to make, if the amount is 0 then the minimum number of coins required is 0 else it is not possible to get the required amount so return a maximum number.
- If the current subproblem is already computed then return it instead of computing them again.

Time - O(n*amount)
Space - O(n*amount)

2. Bottom up
- Create a memo array and initialize the base cases.
- For each index in the memo, we have two choices either we pick or don't pick the current coin.
- Use the memo to get the solution of the smaller sub-problems.
- Return the cell (n-1, amount) which contains the solution for the main problem.

Time - O(n*amount)
Space - O(n*amount)

n - number of elements
amount - total amount

*/

/* Top down */

const coinChangeHelper = (coins, amount, index, memo) => {

    if (index === coins.length) {
        if (amount === 0) {
            return 0;
        }
        return Number.MAX_VALUE;
    }

    if (memo[index][amount] != -1) {
        return memo[index][amount];
    }

    if (coins[index] <= amount) {
        const pick = 1 + coinChangeHelper(coins, amount - coins[index], index, memo);
        const dontPick = coinChangeHelper(coins, amount, index + 1, memo);
        memo[index][amount] = Math.min(pick, dontPick);
        return memo[index][amount];
    }

    const dontPick = coinChangeHelper(coins, amount, index + 1, memo);
    memo[index][amount] = dontPick;
    return memo[index][amount];
};

const coinChange = function (coins, amount) {
    const memo = new Array(coins.length);
    for (let i = 0; i < memo.length; i++) {
        memo[i] = new Array(amount + 1).fill(-1);
    }
    const result = coinChangeHelper(coins, amount, 0, memo);
    if (result != Number.MAX_VALUE) {
        return result;
    }
    return -1;
};

/* Bottom up */

const coinChange2 = function (coins, amount) {
    const memo = new Array(coins.length);
    for (let i = 0; i < memo.length; i++) {
        memo[i] = new Array(amount + 1).fill(-1);
    }

    for (let j = 1; j < memo[0].length; j++) {
        if (j % coins[0] === 0) {
            memo[0][j] = (j / coins[0]);
        }
        else {
            memo[0][j] = Number.MAX_VALUE;
        }
    }

    for (let i = 0; i < memo.length; i++) {
        memo[i][0] = 0;
    }

    for (let i = 1; i < memo.length; i++) {
        for (let j = 1; j < memo[i].length; j++) {
            if (coins[i] <= j) {
                memo[i][j] = Math.min(1 + memo[i][j - coins[i]], memo[i - 1][j]);
            }
            else {
                memo[i][j] = memo[i - 1][j];
            }
        }
    }

    const result = memo[coins.length - 1][amount];
    if (result != Number.MAX_VALUE) {
        return result;
    }
    return -1;
};