/*

Problem
https://leetcode.com/problems/unique-paths/

Approach

1. Top down
- For each cell (row, col), we have two choices either we can go right or down.
- After making a choice, recursively solve the smaller subproblems and store the solutions in an array.
- If the row or col becomes invalid, then return 0 to indicate that no path is available.
- If the destination cell (m-1,n-1) is reached, then return 1 to indicate that a path is found.
- If the current subproblem is already computed, then return it instead of recomputing them.

Time - O(m*n)
Space - O(m*n)

2. Bottom up
- Create a memo array and initialize with base cases.
- For each cell (i, j), we have two choices either we can go right or down.
- Use the memo to get the solution of the smaller sub-problems.
- Return the cell (m-1,n-1) that contains the solution for the main problem.

Time - O(m*n)
Space - O(m*n)

m - number of rows
n - number of columns

*/

/* Top down */

const numberOfWaysToDestination = (m, n, row, col, memo) => {

    if (row >= m || col >= n) {
        return 0;
    }

    if (row === m - 1 && col === n - 1) {
        return 1;
    }

    if (memo[row][col] != -1) {
        return memo[row][col];
    }

    const right = numberOfWaysToDestination(m, n, row, col + 1, memo);
    const bottom = numberOfWaysToDestination(m, n, row + 1, col, memo);

    memo[row][col] = right + bottom;

    return memo[row][col];
};

const uniquePaths = function (m, n) {

    const memo = new Array(m);
    for (let i = 0; i < memo.length; i++) {
        memo[i] = new Array(n).fill(-1);
    }

    return numberOfWaysToDestination(m, n, 0, 0, memo);

};

/* Bottom up */

const uniquePaths2 = function (m, n) {

    const memo = new Array(m + 1);
    for (let i = 0; i < memo.length; i++) {
        memo[i] = new Array(n + 1).fill(0);
    }

    for (let j = 0; j < memo[0].length; j++) {
        memo[0][j] = 1;
    }

    for (let i = 0; i < memo.length; i++) {
        memo[i][0] = 1;
    }

    for (let i = 1; i < memo.length; i++) {
        for (let j = 1; j < memo[i].length; j++) {
            memo[i][j] = memo[i][j - 1] + memo[i - 1][j];
        }
    }

    return memo[m - 1][n - 1];

};