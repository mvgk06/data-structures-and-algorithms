/*

Problem
https://practice.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1/

Approach

1. Top down
- For each index, we have two choices either we pick or don't pick the current element.
- After making the choice, recursively solve the smaller sub-problems and store the solution in an array.
- If the capacity becomes 0 or the end of the array is reached then return 0 which is the maximum profit.
- If the current subproblem is already computed then return it instead of recomputing them.

Time - O(n*capacity)
Space - O(n*capacity)

2. Bottom up
- Create a memo array and initialize with base cases.
- For each index, we have two choices either we pick or don't pick the current element.
- Use the memo to get the solutions of smaller sub-problems.
- Return the cell (n-1, capacity) which contains the solution of the main problem.

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
- Make sure to compute the current row in the reverse direction to avoid overriding the solution of the sub-problems that might be required later.
- Return the last element which contains the solution of the main problem.

Time - O(n*capacity)
Space - O(capacity)

n - number of elements
capacity - total capacity

*/

/* Top down */

const knapsackHelper = (weights, profits, capacity, index, memo) => {

    if (capacity === 0 || index === weights.length) {
        return 0;
    }


    if (memo[index][capacity] != -1) {
        return memo[index][capacity];
    }

    if (weights[index] <= capacity) {
        const pick = profits[index] + knapsackHelper(weights, profits, capacity - weights[index], index + 1, memo);
        const dontPick = knapsackHelper(weights, profits, capacity, index + 1, memo);
        memo[index][capacity] = Math.max(pick, dontPick);
        return memo[index][capacity];
    }

    const dontPick = knapsackHelper(weights, profits, capacity, index + 1, memo);
    memo[index][capacity] = dontPick;
    return memo[index][capacity];
};

const knapsack = (weights, profits, capacity) => {
    const memo = new Array(weights.length);
    for (let i = 0; i < memo.length; i++) {
        memo[i] = new Array(capacity + 1).fill(-1);
    }
    return knapsackHelper(weights, profits, capacity, 0, memo);
};

/* Bottom up */

const choicesMade = (weights, profits, capacity, memo) => {
    let i = weights.length - 1, j = capacity, currProfit = memo[i][j];
    const choices = [];
    while (i > 0 && j > 0) {
        if (memo[i][j] !== memo[i - 1][j]) {
            choices.push(i);
            currProfit -= profits[i];
            j = (j - weights[i]);
        }
        i = i - 1;
    }

    console.log(choices);
};

const knapsack2 = (weights, profits, capacity) => {
    const memo = new Array(weights.length);
    for (let i = 0; i < memo.length; i++) {
        memo[i] = new Array(capacity + 1).fill(-1);
    }

    for (let i = 0; i < memo.length; i++) {
        memo[i][0] = 0;
    }

    for (let j = 1; j < memo[0].length; j++) {
        if (weights[0] <= j) {
            memo[0][j] = profits[0];
        }
        else {
            memo[0][j] = 0;
        }
    }

    for (let i = 1; i < memo.length; i++) {
        for (let j = 1; j < memo[i].length; j++) {
            if (weights[i] <= j) {
                memo[i][j] = Math.max(profits[i] + memo[i - 1][j - weights[i]], memo[i - 1][j]);
            }
            else {
                memo[i][j] = memo[i - 1][j];
            }
        }
    }

    choicesMade(weights, profits, capacity, memo);

    return memo[weights.length - 1][capacity];
};

/* Bottom up (2 arrays) */

const knapsack3 = (weights, profits, capacity) => {
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

    for (let i = 1; i < weights.length; i++) {
        const currMemo = new Array(capacity + 1);
        currMemo[0] = 0;
        for (let j = 1; j < currMemo.length; j++) {
            if (weights[i] <= j) {
                currMemo[j] = Math.max(profits[i] + prevMemo[j - weights[i]], prevMemo[j]);
            }
            else {
                currMemo[j] = prevMemo[j];
            }
        }
        prevMemo = [...currMemo];
    }

    return prevMemo[capacity];

};


/* Bottom up (1 array) */

const knapsack4 = (weights, profits, capacity) => {
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

    for (let i = 1; i < weights.length; i++) {
        for (let j = memo.length - 1; j >= 0; j--) {
            if (weights[i] <= j) {
                memo[j] = Math.max(profits[i] + memo[j - weights[i]], memo[j]);
            }
        }
    }

    return memo[capacity];

};