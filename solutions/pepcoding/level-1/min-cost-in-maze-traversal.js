/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/dynamic-programming-and-greedy/min-cost-maze-traversal-official/ojquestion

Approach

1. Top down
- The memo[i][j] represents the minimum cost obtained to reach the destination cell if we start traveling from the cell (i,j).
- At each cell we have two choices either we can go right or down.
- After making the choice, recursively solve the smaller sub-problems and store the solution in the memo.
- If the destination cell is reached, return the coins in that cell.
- If out of bounds, then return a maximum value.
- If the current subproblem is already solved, then return it's solution instead of recomputing the solution again.

Time - O(n*m)
Space - O(n*m)

2. Bottom up
- Create a memo and initialize the base cases.
- The memo[i][j] represents the minimum cost obtained to reach the destination cell if we start traveling from the cell (i,j).
- At each cell we have two choices either we can go right or down.
- Use the memo to get the solutions for smaller sub-problems.
- Print memo[0][0] which contains the solution for the main problem.

Time - O(n*m)
Space - O(n*m)

3. Bottom up (space optimized)
- To compute the current row we only need the next row.
- Use two arrays current and next to keep track of the sub-problems.
- Compute the current row using the current and the next row.
- Update the next as current row.
- Print the first element of the next row which contains the solution for the main problem.

Time - O(n*m)
Space - O(n)

n - number of rows
m - number of columns

*/

/* Top down */

const minCost = (arr, i, j, memo) => {
    if (i === arr.length - 1 && j === arr[i].length - 1) {
        memo[i][j] = arr[i][j];
        return memo[i][j];
    }
    if (i >= arr.length || j >= arr[i].length) {
        return Number.MAX_VALUE;
    }
    if (memo[i][j] != -1) {
        return memo[i][j];
    }
    const right = minCost(arr, i, j + 1, memo);
    const down = minCost(arr, i + 1, j, memo);
    memo[i][j] = arr[i][j] + Math.min(right, down);
    return memo[i][j];
};

const solve = (n, m, arr) => {
    const memo = new Array(n);
    for (let i = 0; i < memo.length; i++) {
        memo[i] = new Array(m).fill(-1);
    }
    const result = minCost(arr, 0, 0, memo);
    console.log(result);
};

/* Bottom up */

const solve2 = (n, m, arr) => {
    const memo = new Array(n);
    for (let i = 0; i < memo.length; i++) {
        memo[i] = new Array(m).fill(-1);
    }
    memo[n - 1][m - 1] = arr[n - 1][m - 1];
    for (let j = m - 2; j >= 0; j--) {
        memo[n - 1][j] = arr[n - 1][j] + memo[n - 1][j + 1];
    }
    for (let i = n - 2; i >= 0; i--) {
        memo[i][m - 1] = arr[i][m - 1] + memo[i + 1][m - 1];
    }
    for (let i = n - 2; i >= 0; i--) {
        for (let j = m - 2; j >= 0; j--) {
            memo[i][j] = arr[i][j] + Math.min(memo[i + 1][j], memo[i][j + 1]);
        }
    }
    const result = memo[0][0];
    console.log(result);
};

/* Bottom up (space optimized) */

const solve3 = (n, m, arr) => {
    let next = new Array(n);
    next[m - 1] = arr[n - 1][m - 1];
    for (let j = m - 2; j >= 0; j--) {
        next[j] = arr[n - 1][j] + next[j + 1];
    }
    for (let i = n - 2; i >= 0; i--) {
        const curr = new Array(n);
        curr[m - 1] = arr[i][m - 1] + next[m - 1];
        for (let j = m - 2; j >= 0; j--) {
            curr[j] = arr[i][j] + Math.min(next[j], curr[j + 1]);
        }
        next = [...curr];
    }
    const result = next[0];
    console.log(result);
};