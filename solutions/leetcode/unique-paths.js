/*

Problem

https://leetcode.com/problems/unique-paths/

Approach

1. Top down
- Each state in memo[i][j] represents the number of ways to reach the destination cell from (i, j).
- For each cell, we have two choices either we can go right or down.
- After making a choice, recursively solve the smaller sub-problems and store the solutions in the memo.
- If the row or col becomes invalid, then return 0 to indicate that no path exists.
- If the destination cell is reached, then return 1 to indicate that a path exist.
- If the current subproblem is already computed, then return it instead of recomputing them.

Time - O(m*n)
Space - O(m*n)

2. Bottom up
- Create a memo array and initialize with base cases.
- Each state in memo[i][j] represents the number of ways to reach the destination cell from (i, j).
- For each cell, we have two choices either we can go right or down.
- Use the memo to get the solution of the smaller sub-problems.
- Return the cell (0, 0) that contains the solution for the main problem.

Time - O(m*n)
Space - O(m*n)

3. Bottom up (space optimized)
- To compute the current cell we only need the next column of current row and next row of current column.
- So use two arrays next and current to compute the sub-problems.
- Compute the current row using the current and the next row.
- Update the next row as current row.
- Return the first element of next row that contains the solution for the main problem.

Time - O(m*n)
Space - O(n)

m - number of rows
n - number of columns

*/

/* Top down */

const helper = (m, n, row, col, memo) => {
    if (row >= m || col >= n) {
        return 0;
    }
    if (row === m - 1 && col === n - 1) {
        return 1;
    }
    if (memo[row][col] != -1) {
        return memo[row][col];
    }
    const right = helper(m, n, row, col + 1, memo);
    const bottom = helper(m, n, row + 1, col, memo);
    memo[row][col] = right + bottom;
    return memo[row][col];
};

const uniquePaths = function (m, n) {
    const memo = new Array(m);
    for (let i = 0; i < memo.length; i++) {
        memo[i] = new Array(n).fill(-1);
    }
    return helper(m, n, 0, 0, memo);
};

/* Bottom up */

const uniquePaths2 = function (m, n) {
    const memo = new Array(m);
    for (let i = 0; i < memo.length; i++) {
        memo[i] = new Array(n).fill(0);
    }
    for (let j = 0; j < n; j++) {
        memo[m - 1][j] = 1;
    }
    for (let i = 0; i < m; i++) {
        memo[i][n - 1] = 1;
    }
    for (let i = m - 2; i >= 0; i--) {
        for (let j = n - 2; j >= 0; j--) {
            memo[i][j] = memo[i][j + 1] + memo[i + 1][j];
        }
    }
    return memo[0][0];
};

/* Bottom up (space optimized) */

const uniquePaths3 = function (m, n) {
    let next = new Array(n).fill(1);
    for (let i = m - 2; i >= 0; i--) {
        const curr = new Array(n);
        curr[n - 1] = 1;
        for (let j = n - 2; j >= 0; j--) {
            curr[j] = curr[j + 1] + next[j];
        }
        next = [...curr];
    }
    return next[0];
};