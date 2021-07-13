/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/dynamic-programming-and-greedy/unbounded-knapsack-official/ojquestion

Approach

1. Top down
- Each state in the memo[i][j] represents the maximum value that can be obtained if the capacity is j and elements till ith index can be used.
- For each index, we have two choices either we pick or don't pick the element.
- After making the choice, recursively solve the smaller sub-problems and store the solution in the memo.
- If the capacity or index becomes 0, then return 0.
- If the current subproblem is already computed then return it instead of recomputing them.

Time - O(n*capacity)
Space - O(n*capacity)

2. Bottom up
- Each state in the memo[i][j] represents the maximum value that can be obtained if the capacity is j and the size of the input is i.
- Create a memo array and initialize with base cases.
- For each index, we have two choices either we pick or don't pick the element.
- Use the memo to get the solutions of smaller sub-problems.
- Return the cell (n, capacity) which contains the solution of the main problem.

Time - O(n*capacity)
Space - O(n*capacity)

3. Bottom up (2 arrays)
- For each cell, we need the solutions only from the previous row.
- So we can just have two arrays (previous and current) to keep track of the solution of the subproblems.
- Use the previous row to get the solution of the current row, then copy the contents of the current row into the previous row.
- Return the last element which contains the solution of the main problem.

Time - O(n*capacity)
Space - O(2*capacity)

4. Bottom up (1 array)
- Instead of using two rows to compute the solution we can just use the previous row to compute the current row.
- Return the last element which contains the solution of the main problem.

Time - O(n*capacity)
Space - O(capacity)

n - number of elements
capacity - total capacity

*/

/* Top down */

const knapsack = (profits, weights, capacity, index, memo) => {
    if (index < 0 || capacity <= 0) {
        return 0;
    }
    if (memo[index][capacity] != -1) {
        return memo[index][capacity];
    }
    if (weights[index] <= capacity) {
        const pick = profits[index] + knapsack(profits, weights, capacity - weights[index], index, memo);
        const dontPick = knapsack(profits, weights, capacity, index - 1, memo);
        memo[index][capacity] = Math.max(pick, dontPick);
    }
    else {
        const dontPick = knapsack(profits, weights, capacity, index - 1, memo);
        memo[index][capacity] = dontPick;
    }
    return memo[index][capacity];
};

const solve = (n, profits, weights, capacity) => {
    const memo = new Array(n);
    for (let i = 0; i < memo.length; i++) {
        memo[i] = new Array(capacity + 1).fill(-1);
    }
    const result = knapsack(profits, weights, capacity, n - 1, memo);
    console.log(result);
    choicesMade(n, weights, capacity, memo);
};

const choicesMade = (n, weights, capacity, memo) => {
    let i = n - 1, j = capacity;
    const choices = [];
    while (i > 0 && j > 0) {
        if (memo[i][j] !== memo[i - 1][j]) {
            choices.push(i);
            j = (j - weights[i]);
        }
        else {
            i -= 1;
        }
    }
    console.log(choices.reverse());
};

/* Bottom up */

const solve2 = (n, profits, weights, capacity) => {
    const memo = new Array(n + 1);
    for (let i = 0; i < memo.length; i++) {
        memo[i] = new Array(capacity + 1).fill(-1);
    }
    for (let i = 0; i < memo.length; i++) {
        for (let j = 0; j < memo[i].length; j++) {
            if (i === 0 || j === 0) {
                memo[i][j] = 0;
            }
            else if (weights[i - 1] <= j) {
                memo[i][j] = Math.max(profits[i - 1] + memo[i][j - weights[i - 1]], memo[i - 1][j]);
            }
            else {
                memo[i][j] = memo[i - 1][j];
            }
        }
    }
    const result = memo[n][capacity];
    console.log(result);
    choicesMade2(n, weights, capacity, memo);
};

const choicesMade2 = (n, weights, capacity, memo) => {
    let i = n, j = capacity;
    const choices = [];
    while (i > 0 && j > 0) {
        if (memo[i][j] !== memo[i - 1][j]) {
            choices.push(i - 1);
            j = (j - weights[i - 1]);
        }
        else {
            i -= 1;
        }
    }
    console.log(choices.reverse());
};

/* Bottom up (2 arrays) */

const solve3 = (n, profits, weights, capacity) => {
    let prevMemo = new Array(capacity + 1);
    prevMemo[0] = 0;
    for (let j = 1; j < prevMemo.length; j++) {
        if (weights[0] <= j) {
            prevMemo[j] = profits[0];
        }
        else {
            prevMemo[j] = 0;
        }
    }
    for (let i = 2; i <= n; i++) {
        const currMemo = new Array(capacity + 1);
        currMemo[0] = 0;
        for (let j = 1; j < currMemo.length; j++) {
            if (weights[i - 1] <= j) {
                currMemo[j] = Math.max(profits[i - 1] + currMemo[j - weights[i - 1]], prevMemo[j]);
            }
            else {
                currMemo[j] = prevMemo[j];
            }
        }
        prevMemo = [...currMemo];
    }
    const result = prevMemo[capacity];
    console.log(result);
};

/* Bottom up (1 array) */

const solve4 = (n, profits, weights, capacity) => {
    let memo = new Array(capacity + 1);
    memo[0] = 0;
    for (let j = 1; j < memo.length; j++) {
        if (weights[0] <= j) {
            memo[j] = profits[0];
        }
        else {
            memo[j] = 0;
        }
    }
    for (let i = 2; i <= n; i++) {
        for (let j = 0; j < memo.length; j++) {
            if (weights[i - 1] <= j) {
                memo[j] = Math.max(profits[i - 1] + memo[j - weights[i - 1]], memo[j]);
            }
        }
    }
    const result = memo[capacity];
    console.log(result);
};