/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/dynamic-programming-and-greedy/goldmine-official/ojquestion

Approach

1. Top down
- Each state in the memo[i][j] represents the maximum gold that can be obtained if we start from position (i,j).
- We can start from any of the row in the first column.
- At each point, we have three choices either we can go to top-right, right or bottom-right.
- After making the choice, recursively solve the smaller sub-problems and store the solution in the memo.
- If out of bounds return 0.
- If the current sub problem is already computed then return it instead of recomputing them.

Time - O(n*m)
Space - O(n*m)

2. Bottom up
- Each state in the memo[i][j] represents the maximum gold that can be obtained if we start from position (i,j).
- Create a memo array and initialize with base cases.
- At each point, we have three choices either we can go to top-right, right or bottom-right.
- Use the memo to get the solutions for smaller sub-problems.
- Return the maximum value in the first column of the memo.

Time - O(n*m)
Space - O(n*m)

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

    const c1 = maxGold(arr, i - 1, j + 1, memo);
    const c2 = maxGold(arr, i, j + 1, memo);
    const c3 = maxGold(arr, i + 1, j + 1, memo);

    memo[i][j] = arr[i][j] + Math.max(c1, c2, c3);
    return memo[i][j];
};

const solve = (n, m, arr) => {
    const memo = new Array(n);
    for (let i = 0; i < memo.length; i++) {
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
    for (let i = 0; i < memo.length; i++) {
        memo[i] = new Array(m).fill(0);
    }

    for (let j = m - 1; j >= 0; j--) {
        for (let i = 0; i < n; i++) {
            if (j === memo[i].length - 1) {
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
            else if (i === memo.length - 1) {
                memo[i][j] = arr[i][j] + Math.max(memo[i - 1][j + 1], memo[i][j + 1]);
            }
            else {
                memo[i][j] = arr[i][j] + Math.max(memo[i - 1][j + 1], memo[i][j + 1], memo[i + 1][j + 1]);
            }
        }
    }

    let result = 0;
    for (let i = 0; i < memo.length; i++) {
        result = Math.max(result, memo[i][0]);
    }

    console.log(result);
};