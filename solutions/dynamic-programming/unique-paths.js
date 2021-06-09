/*

Problem
https://leetcode.com/problems/unique-paths/

Approach

1. Top down
- For every cell (row,col) I have two choices either I can go right or down.
- Recursively solve the smaller sub problems and store the solutions in an array.
- If the row and col becomes invalid return 0 to indicate that no path is available.
- If the destination cell (m-1,n-1) is reached return 1 to indicate that a path is found.
- If the current sub problem is already computed return the computed solution instead of recomputing them.

Time - O(m*n)
Space - O(m*n)

*/

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
    for (let i = 0; i < m; i++) {
        memo[i] = new Array(n).fill(-1);
    }

    return numberOfWaysToDestination(m, n, 0, 0, memo);

};