/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/dynamic-programming-and-greedy/buy-and-sell-stocks-ota-official/ojquestion

Approach

1. Top down
- Each state in the memo[i] represents the minimum value so far we can get when including the ith element.
- At each point, we take the min of current and the min so far for i-1.
- Recursively solve the smaller sub-problems and store the solutions in the memo.
- If the index becomes 0, then return the first element in the array.
- If the current subproblem is already solved, then return it instead of recomputing them.

Time - O(n)
Space - O(n)

2. Bottom up
- Create a memo and initialize the base cases.
- Each state in the memo[i] represents the minimum value so far we can get when including the ith element.
- At each point, we take the min of current and the min so far for i-1.
- Use the memo to get the solution for smaller sub-problems.
- Compute the maximum profit using the memo.

Time - O(n)
Space - O(n)

n - number of elements

*/

/* Top down */

const buyAndSellStocks = (arr, index, memo) => {
    if (index === 0) {
        memo[index] = arr[index];
        return memo[index];
    }
    if (memo[index] != -1) {
        return memo[index];
    }
    const minBuySoFar = Math.min(arr[index], buyAndSellStocks(arr, index - 1, memo));
    memo[index] = minBuySoFar;
    return memo[index];
};

const solve = (n, arr) => {
    const memo = new Array(n).fill(-1);
    buyAndSellStocks(arr, n - 1, memo);
    let result = 0;
    for (let i = 0; i < memo.length; i++) {
        result = Math.max(result, arr[i] - memo[i]);
    }
    console.log(result);
};

/* Bottom up */

const solve2 = (n, arr) => {
    const memo = new Array(n).fill(-1);
    memo[0] = arr[0];
    for (let i = 1; i < memo.length; i++) {
        memo[i] = Math.min(arr[i], memo[i - 1]);
    }
    let result = 0;
    for (let i = 0; i < memo.length; i++) {
        result = Math.max(result, arr[i] - memo[i]);
    }
    console.log(result);
};

