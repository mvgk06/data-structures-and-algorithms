/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/dynamic-programming-and-greedy/goldmine-official/ojquestion

Approach

1. Top down
- The memo[i][j] represents the maximum gold that can be obtained if we start from the cell (i,j).
- We can start from any of the row in the first column.
- At each cell, we have three choices either we can go to top-right, right or bottom-right.
- After making a choice, recursively solve the smaller sub-problems and store the solution in the memo.
- If out of bounds, then return 0.
- If the current sub problem is already solved, then return it's solution instead of recomputing the solution again.

Time - O(n*m)
Space - O(n*m)

2. Bottom up
- Create a memo array and initialize with base cases.
- The memo[i][j] represents the maximum gold that can be obtained if we start from the cell (i,j).
- At each cell, we have three choices either we can go to top-right, right or bottom-right.
- Use the memo to get the solutions for smaller sub-problems.
- Print the maximum value in the first column of the memo which is the solution for the main problem.

Time - O(n*m)
Space - O(n*m)

3. Bottom up (space optimized)
- To compute the solution of sub problems in the current column we only need the solution of the next column.
- Use two arrays current and next to keep track of the solutions of the sub problems.
- Compute the solution for the current column using the next column.
- Update the next column as current column.
- Print the maximum value in the next array which is the solution for the main problem.

Time - O(n*m)
Space - O(n)

n - number of rows
m - number of columns

*/

/* Top down */

const maxGold = (arr, i, j, memo) => {
    if (i < 0 || i === arr.length || j < 0 || j === arr[i].length) {
        return 0;
    }
    if (memo[i][j] != -1) {
        return memo[i][j];
    }
    const topRight = maxGold(arr, i - 1, j + 1, memo);
    const right = maxGold(arr, i, j + 1, memo);
    const bottomRight = maxGold(arr, i + 1, j + 1, memo);
    memo[i][j] = arr[i][j] + Math.max(topRight, right, bottomRight);
    return memo[i][j];
};

const solve = (n, m, arr) => {
    const memo = new Array(n);
    for (let i = 0; i < n; i++) {
        memo[i] = new Array(m).fill(-1);
    }
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result = Math.max(result, maxGold(arr, i, 0, memo));
    }
    console.log(result);
};

/* Bottom up */

const solve2 = (n, m, arr) => {
    const memo = new Array(n);
    for (let i = 0; i < n; i++) {
        memo[i] = new Array(m).fill(0);
    }
    for (let j = m - 1; j >= 0; j--) {
        for (let i = 0; i < n; i++) {
            if (j === m - 1) {
                memo[i][j] = arr[i][j];
            }
            else if (i === 0) {
                if (n === 1) {
                    memo[i][j] = arr[i][j] + memo[i][j + 1];
                }
                else {
                    memo[i][j] = arr[i][j] + Math.max(memo[i][j + 1], memo[i + 1][j + 1]);
                }

            }
            else if (i === n - 1) {
                memo[i][j] = arr[i][j] + Math.max(memo[i - 1][j + 1], memo[i][j + 1]);
            }
            else {
                memo[i][j] = arr[i][j] + Math.max(memo[i - 1][j + 1], memo[i][j + 1], memo[i + 1][j + 1]);
            }
        }
    }
    let result = 0;
    for (let i = 0; i < n; i++) {
        result = Math.max(result, memo[i][0]);
    }
    console.log(result);
};

/* Bottom up (space optimized) */

const solve3 = (n, m, arr) => {
    let next = new Array(n);
    for (let i = 0; i < n; i++) {
        next[i] = arr[i][m - 1];
    }
    for (let j = m - 2; j >= 0; j--) {
        const curr = new Array(n);
        for (let i = 0; i < n; i++) {
            if (i === 0) {
                if (n === 1) {
                    curr[i] = arr[i][j] + next[i];
                }
                else {
                    curr[i] = arr[i][j] + Math.max(next[i], next[i + 1]);
                }

            }
            else if (i === n - 1) {
                curr[i] = arr[i][j] + Math.max(next[i - 1], next[i]);
            }
            else {
                curr[i] = arr[i][j] + Math.max(next[i - 1], next[i], next[i + 1]);
            }
        }
        next = [...curr];
    }
    let result = 0;
    for (let i = 0; i < n; i++) {
        result = Math.max(result, next[i]);
    }
    console.log(result);
};