/*

Problem

https://leetcode.com/problems/unique-paths-ii/

Approach

1. Top down
- Each state in memo[i][j] represents the number of ways to reach the destination cell from (i, j).
- For each cell, we have two choices either we can go right or down.
- After making a choice, recursively solve the smaller sub-problems and store the solutions in the memo.
- If the row or col becomes invalid or we encounter an obstacle, then return 0 to indicate that no path exists.
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
- So use two arrays next and current to keep track of the sub-problems.
- Compute the current row using the current and the next row.
- Update the next row as current row.
- Return the first element of next row that contains the solution for the main problem.

Time - O(m*n)
Space - O(n)

m - number of rows
n - number of columns

*/

/* Top down */

const helper = (grid, i, j, memo) => {
    if (i >= grid.length || j >= grid[i].length || grid[i][j] === 1) {
        return 0;
    }
    if (i === grid.length - 1 && j === grid[i].length - 1) {
        return 1;
    }
    if (memo[i][j] != -1) {
        return memo[i][j];
    }
    const right = helper(grid, i, j + 1, memo);
    const bottom = helper(grid, i + 1, j, memo);
    memo[i][j] = right + bottom;
    return memo[i][j];
};

const uniquePathsWithObstacles = function (grid) {
    const m = grid.length, n = grid[0].length, memo = new Array(m);
    for (let i = 0; i < memo.length; i++) {
        memo[i] = new Array(n).fill(-1);
    }
    return helper(grid, 0, 0, memo);
};

/* Bottom up */

const uniquePathsWithObstacles2 = function (grid) {
    const m = grid.length, n = grid[0].length, memo = new Array(m);
    for (let i = 0; i < memo.length; i++) {
        memo[i] = new Array(n);
    }
    if (grid[m - 1][n - 1] != 1) {
        memo[m - 1][n - 1] = 1;
    }
    else {
        memo[m - 1][n - 1] = 0;
    }
    for (let j = n - 2; j >= 0; j--) {
        if (grid[m - 1][j] != 1) {
            memo[m - 1][j] = memo[m - 1][j + 1];
        }
        else {
            memo[m - 1][j] = 0;
        }
    }
    for (let i = m - 2; i >= 0; i--) {
        if (grid[i][n - 1] != 1) {
            memo[i][n - 1] = memo[i + 1][n - 1];
        }
        else {
            memo[i][n - 1] = 0;
        }
    }
    for (let i = m - 2; i >= 0; i--) {
        for (let j = n - 2; j >= 0; j--) {
            if (grid[i][j] != 1) {
                memo[i][j] = memo[i][j + 1] + memo[i + 1][j];
            }
            else {
                memo[i][j] = 0;
            }
        }
    }
    return memo[0][0];
};

/* Bottom up (space optimized) */

const uniquePathsWithObstacles3 = function (grid) {
    const m = grid.length, n = grid[0].length;
    let next = new Array(n);
    if (grid[m - 1][n - 1] != 1) {
        next[n - 1] = 1;
    }
    else {
        next[n - 1] = 0;
    }
    for (let j = n - 2; j >= 0; j--) {
        if (grid[m - 1][j] != 1) {
            next[j] = next[j + 1];
        }
        else {
            next[j] = 0;
        }
    }
    for (let i = m - 2; i >= 0; i--) {
        const curr = new Array(n);
        if (grid[i][n - 1] != 1) {
            curr[n - 1] = next[n - 1];
        }
        else {
            curr[n - 1] = 0;
        }
        for (let j = n - 2; j >= 0; j--) {
            if (grid[i][j] != 1) {
                curr[j] = curr[j + 1] + next[j];
            }
            else {
                curr[j] = 0;
            }
        }
        next = [...curr];
    }
    return next[0];
};