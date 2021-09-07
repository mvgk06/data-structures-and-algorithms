/*

Problem

https://leetcode.com/problems/pascals-triangle/

Approach

1. Top down
- Each state in the memo[i][j] represents the pascal value of the cell (i,j).
- For each cell we have to sum the values of top and diagonal cells.
- Recursively solve the smaller sub-problems and store the solution in the memo.
- If i or j becomes negative, then return 0.
- If j is equal to 0 or i then return 1.
- If the current subproblem is already solved, then return it instead of recomputing them.
- Recursivley compute the pascal triangle from the last row.

Time - O(n^2)
Space - O(n^2)

2. Bottom up
- Each state in the memo[i][j] represents the pascal value of the cell (i,j).
- Create a memo array and initialize with base cases.
- For each cell we have to sum the values of top and diagonal cells.
- Use the memo to get the solution for smaller sub-problems.

Time - O(n^2)
Space - O(n^2)

n - number of rows

*/

/* Top down */

const generateHelper = (memo, i, j) => {
    if (i < 0 || j < 0) {
        return 0;
    }
    if (j === 0 || j === i) {
        memo[i][j] = 1;
        return memo[i][j];
    }
    if (memo[i][j] != -1) {
        return memo[i][j];
    }
    const top = generateHelper(memo, i - 1, j);
    const diagonal = generateHelper(memo, i - 1, j - 1);
    memo[i][j] = top + diagonal;
    return memo[i][j];
};

const generate = function (n) {
    const memo = new Array(n);
    for (let i = 0; i < n; i++) {
        memo[i] = new Array(i + 1).fill(-1);
    }
    memo[0][0] = 1;
    for (let j = 0; j < n; j++) {
        generateHelper(memo, n - 1, j);
    }
    return memo;
};

/* Bottom up */

const generate2 = function (n) {
    const memo = new Array(n);
    for (let i = 0; i < n; i++) {
        memo[i] = new Array(i + 1);
        memo[i][0] = 1;
        memo[i][i] = 1;
        for (let j = 1; j < i; j++) {
            memo[i][j] = memo[i - 1][j] + memo[i - 1][j - 1];
        }
    }
    return memo;
};