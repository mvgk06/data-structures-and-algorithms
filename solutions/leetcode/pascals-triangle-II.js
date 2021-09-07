/*

Problem

https://leetcode.com/problems/pascals-triangle-ii/

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

3. Bottom up (space optimized)
- To compute the current row we only need the previous row.
- So use two arrays, one for the current and the other is for the previous row.
- Compute the current row using the previous row.
- Update the previous row as current row.

Time - O(n^2)
Space - O(n)

n - number of rows

*/

/* Top down */

const helper = (memo, i, j) => {
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
    const top = helper(memo, i - 1, j);
    const diagonal = helper(memo, i - 1, j - 1);
    memo[i][j] = top + diagonal;
    return memo[i][j];
};

const getRow = function (rowIndex) {
    const memo = new Array(rowIndex + 1);
    for (let i = 0; i <= rowIndex; i++) {
        memo[i] = new Array(i + 1).fill(-1);
    }
    for (let j = 0; j <= rowIndex; j++) {
        helper(memo, rowIndex, j);
    }
    return memo[rowIndex];
};

/* Bottom up */

const getRow2 = function (rowIndex) {
    const memo = new Array(rowIndex + 1);
    for (let i = 0; i <= rowIndex; i++) {
        memo[i] = new Array(i + 1);
        memo[i][0] = 1;
        memo[i][i] = 1;
        for (let j = 1; j < i; j++) {
            memo[i][j] = memo[i - 1][j - 1] + memo[i - 1][j];
        }
    }
    return memo[rowIndex];
};

/* Bottom up (space optimized) */

const getRow3 = function (rowIndex) {
    let prev = [];
    for (let i = 0; i <= rowIndex; i++) {
        const curr = new Array(i + 1);
        curr[0] = 1;
        curr[i] = 1;
        for (let j = 1; j < i; j++) {
            curr[j] = prev[j - 1] + prev[j];
        }
        prev = [...curr];
    }
    return prev;
};