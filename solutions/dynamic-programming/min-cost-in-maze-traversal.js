/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/dynamic-programming-and-greedy/min-cost-maze-traversal-official/ojquestion

Approach

1. Top down
- Each state in the memo[i][j] represents the minimum cost obtained if we start traveling from the cell (i,j).
- At each cell we have two choices either we can go right or down.
- After making the choice, recursively solve the smaller sub-problems and store the solution in the memo.
- If the cell (n-1, m-1) is reached, return the coins in that cell.
- If out of bounds return a maximum value.
- If the current subproblem is already solved then return it instead of recomputing them.

Time - O(n*m)
Space - O(n*m)

2. Bottom up
- Create a memo and initialize the base cases.
- Each state in the memo[i][j] represents the minimum cost obtained if we start traveling from the cell (i,j).
- At each cell we have two choices either we can go right or down.
- Use the memo to get the solutions for smaller sub-problems.
- Return the cell (0,0) which contains the solution to the main problem.

Time - O(n*m)
Space - O(n*m)

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
    for (let i = n - 1; i >= 0; i--) {
        for (let j = m - 1; j >= 0; j--) {
            if (i === n - 1 && j === m - 1) {
                memo[i][j] = arr[i][j];
            }
            else if (i === n - 1) {
                memo[i][j] = memo[i][j + 1] + arr[i][j];
            }
            else if (j === m - 1) {
                memo[i][j] = memo[i + 1][j] + arr[i][j];
            }
            else {
                memo[i][j] = Math.min(memo[i + 1][j], memo[i][j + 1]) + arr[i][j];
            }
        }
    }
    const result = memo[0][0];
    console.log(result);
};