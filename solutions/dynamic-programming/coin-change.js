/* 

Problem
https://leetcode.com/problems/coin-change/

Approach

1. Top down
- For each index if the current coin value is less than equal to the amount then I have two choices either I pick or don't pick the current coin.
- Else I have only one choice that is to not pick the current coin.
- Recursively solve the smaller sub problems and store the solution in an array.
- If the end of the array is reached then there are no more choices to make, if the amount is 0 then the minimum number of coins required is 0 else it is not possible to get the required amount so return maximum number.
- If the current sub problem is already computed then return it instead of computing them again.

Time - O(n*amount)
Space - O(n*amount)

2. Bottom up
- Create a memo array and initialize the base cases.
- For each index in the memo, if the current coin value is less than equal to the amount then I have two choices either I pick or don't pick the current coin.
- Else I have only one choice that is to not pick the current coin.
- Use the memo to get the solution of the smaller sub problems.
- Return the cell (n,amount) which contins the solution for the main problem.

Time - O(n*amount)
Space - O(n*amount)

*/

/* Top down */

const coinChangeHelper = (coins, amount, currIndex, memo) => {

    if (currIndex === coins.length) {
        if (amount === 0) {
            return 0;
        }
        return Number.MAX_VALUE;
    }

    if (memo[currIndex][amount] != -1) {
        return memo[currIndex][amount];
    }

    if (coins[currIndex] <= amount) {
        const pickCurrCoin = 1 + coinChangeHelper(coins, amount - coins[currIndex], currIndex, memo);
        const dontPickCurrCoin = coinChangeHelper(coins, amount, currIndex + 1, memo);
        memo[currIndex][amount] = Math.min(pickCurrCoin, dontPickCurrCoin);
        return memo[currIndex][amount];
    }

    const dontPickCurrCoin = coinChangeHelper(coins, amount, currIndex + 1, memo);
    memo[currIndex][amount] = dontPickCurrCoin;
    return memo[currIndex][amount];
};

const coinChange = function (coins, amount) {
    const memo = new Array(coins.length + 1);
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
    const memo = new Array(coins.length + 1);
    for (let i = 0; i < memo.length; i++) {
        memo[i] = new Array(amount + 1).fill(-1);
    }

    for (let j = 0; j < memo[0].length; j++) {
        memo[0][j] = Number.MAX_VALUE;
    }

    for (let i = 0; i < memo.length; i++) {
        memo[i][0] = 0;
    }

    for (let i = 1; i < memo.length; i++) {
        for (let j = 1; j < memo[i].length; j++) {
            if (coins[i - 1] <= j) {
                memo[i][j] = Math.min(1 + memo[i][j - coins[i - 1]], memo[i - 1][j]);
            }
            else {
                memo[i][j] = memo[i - 1][j];
            }
        }
    }

    const result = memo[coins.length][amount];
    if (result != Number.MAX_VALUE) {
        return result;
    }
    return -1;
};