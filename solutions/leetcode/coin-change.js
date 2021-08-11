/*

Problem

https://leetcode.com/problems/coin-change/

Approach

1. Top down
- Each state in the memo[i][j] represents the minimum coins required to get the amount j if we can pick elements till ith index.
- For each index, we have two choices either we pick or don't pick the current coin.
- After making the choice, recursively solve the smaller sub-problems and store the solution in the memo.
- If index is out of bounds, if the amount is 0 then the minimum number of coins required is 0.
- Else it is not possible to get the required amount so return a maximum number.
- If the current subproblem is already computed then return it instead of recomputing them again.

Time - O(n*amount)
Space - O(n*amount)

2. Bottom up
- Create a memo array and initialize the base cases.
- Each state in the memo[i][j] represents the minimum coins required to get the amount j if the size of the input is i.
- For each index, we have two choices either we pick or don't pick the current coin.
- Use the memo to get the solution of the smaller sub-problems.
- Return the cell (n, amount) which contains the solution for the main problem.

Time - O(n*amount)
Space - O(n*amount)

3. Bottom up (space optimized)
- To compute the current row, we need the solutions only from the current and the previous row. 
- So we can just have two arrays (previous and current) to keep track of the solution of the subproblems.
- Use the current and the previous row to get the solution of the current row, then copy the contents of the current row into the previous row.
- Return the last element which contains the solution of the main problem.

Time - O(n*amount)
Space - O(amount)

4. Optimal path
- Traverse the memo backwards from the final state to the base state.
- Based on the transitions compute the optimal path.

Time - O(n)
Space - O(1)

n - number of elements
amount - total amount

*/

/* Top down */

const coinChangeHelper = (coins, amt, i, memo) => {
    if (i < 0) {
        if (amt === 0) {
            return 0;
        }
        return Number.MAX_VALUE;
    }
    if (memo[i][amt] != -1) {
        return memo[i][amt];
    }
    if (coins[i] <= amt) {
        const pick = 1 + coinChangeHelper(coins, amt - coins[i], i, memo);
        const dontPick = coinChangeHelper(coins, amt, i - 1, memo);
        memo[i][amt] = Math.min(pick, dontPick);
    }
    else {
        const dontPick = coinChangeHelper(coins, amt, i - 1, memo);
        memo[i][amt] = dontPick;
    }
    return memo[i][amt];
};

const coinChange = function (coins, amount) {
    const memo = new Array(coins.length);
    for (let i = 0; i < memo.length; i++) {
        memo[i] = new Array(amount + 1).fill(-1);
    }
    const result = coinChangeHelper(coins, amount, coins.length - 1, memo);
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

/* Bottom up (space optimized) */

const coinChange3 = function (coins, amount) {
    let prevMemo = new Array(amount + 1).fill(Number.MAX_VALUE);
    prevMemo[0] = 0;
    for (let i = 1; i <= coins.length; i++) {
        const currMemo = new Array(amount + 1);
        currMemo[0] = 0;
        for (let j = 1; j <= amount; j++) {
            if (coins[i - 1] <= j) {
                currMemo[j] = Math.min(1 + currMemo[j - coins[i - 1]], prevMemo[j]);
            }
            else {
                currMemo[j] = prevMemo[j];
            }
        }
        prevMemo = [...currMemo];
    }
    const result = prevMemo[amount];
    if (result != Number.MAX_VALUE) {
        return result;
    }
    return -1;
};

/* Optimal path */

const optimalPath = (coins, amount, memo) => {
    const path = [];
    let i = coins.length, j = amount;
    while (i > 0 && j > 0) {
        if (coins[i - 1] <= j && 1 + memo[i][j - coins[i - 1]] < memo[i - 1][j]) {
            path.push(i - 1);
            j -= coins[i - 1];
        }
        else {
            i -= 1;
        }
    }
    return path.reverse();
};