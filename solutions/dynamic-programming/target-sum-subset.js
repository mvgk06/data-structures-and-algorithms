/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/dynamic-programming-and-greedy/target-sum-subsets-dp-official/ojquestion

Approach

1. Top down
- Each state in the memo[i][j] represents whether it is possible to form a subset of sum j if elements till the index i is used. 
- For each index, we have two choices either we pick or don't pick the current element.
- After making the choice, recursively solve the smaller sub-problems and store the solutions in the memo.
- If the index becomes 0, if the sum is 0, then return 1 to indicate that the sum is possible.
- Else return 0 to indicate that the sum is not possible.
- If the current subproblem is already computed return it instead of recomputing them.

Time - O(n*target)
Space - O(n*target)

2. Bottom up
- Each state in the memo[i][j] represents whether it is possible to form a subset of sum j if the size of the input is i. 
- Create a memo array and initialize the base cases.
- For each index in the memo, we have two choices either we pick or don't pick the current element.
- Use the memo to get the solutions of smaller sub-problems.
- Return the cell (n, target) which contains the solution of the main problem.

Time - O(n*target)
Space - O(n*target)

n - number of elements
target - total sum

*/

/* Top down */

const targetSum = (arr, index, target, memo) => {
    if (index === 0) {
        if (target === 0) {
            memo[index] = 1;
        }
        else {
            memo[index] = 0;
        }
        return memo[index];
    }
    if (memo[index][target] != -1) {
        return memo[index][target];
    }
    if (arr[index] <= target) {
        const pick = targetSum(arr, index - 1, target - arr[index], memo);
        const dontPick = targetSum(arr, index - 1, target, memo);
        memo[index][target] = (pick || dontPick);
    }
    else {
        const dontPick = targetSum(arr, index - 1, target, memo);
        memo[index][target] = dontPick;
    }
    return memo[index][target];
};

const solve = (n, arr, target) => {
    const memo = new Array(n);
    for (let i = 0; i < memo.length; i++) {
        memo[i] = new Array(target + 1).fill(-1);
    }
    const result = targetSum(arr, arr.length - 1, target, memo);
    if (result === 1) {
        console.log(true);
    }
    else {
        console.log(false);
    }
};

/* Bottom up */

const solve2 = (n, arr, target) => {
    const memo = new Array(n + 1);
    for (let i = 0; i < memo.length; i++) {
        memo[i] = new Array(target + 1).fill(-1);
    }

    for (let i = 0; i < memo.length; i++) {
        for (let j = 0; j < memo[i].length; j++) {
            if (i === 0 && j === 0) {
                memo[i][j] = 1;
            }
            else if (i === 0) {
                memo[i][j] = 0;
            }
            else if (j === 0) {
                memo[i][j] = 1;
            }
            else if (arr[i - 1] <= j) {
                memo[i][j] = (memo[i - 1][j - arr[i - 1]] || memo[i - 1][j]);
            }
            else {
                memo[i][j] = memo[i - 1][j];
            }
        }
    }

    const result = memo[n][target];
    if (result === 1) {
        console.log(true);
    }
    else {
        console.log(false);
    }
};