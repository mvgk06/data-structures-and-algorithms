/*

Problem
https://practice.geeksforgeeks.org/problems/perfect-sum-problem5633/1

Approach

1. Top down
- For each index, we have two choices either we can pick or don't pick the current element.
- After making the choice, recursively solve the smaller sub-problems and store the solution in an array.
- If the end of the array is reached if the sum is 0 then return 1 to indicate that a possible solution is found.
- Else return 0 to indicate no possible solution is found.
- If the current subproblem is already solved then return it instead of recomputing them again.

Time - O(n*sum)
Space - O(n*sum)

2. Bottom up
- Create a memo array and initialize with base cases.
- For each index, we have two choices either we can pick or don't pick the current element.
- Use the memo to get the solutions of smaller sub-problems.
- Return the cell (n-1, sum) which contains the solution for the main problem.

Time - O(n*sum)
Space - O(n*sum)

n - number of elements
sum - total sum

*/

/* Top down */

class Solution {

    perfectSumHelper(arr, index, sum, memo) {
        if (index === arr.length) {
            if (sum === 0) {
                return 1;
            }
            return 0;
        }

        if (memo[index][sum] != -1) {
            return memo[index][sum];
        }

        if (arr[index] <= sum) {
            const pick = this.perfectSumHelper(arr, index + 1, sum - arr[index], memo);
            const dontPick = this.perfectSumHelper(arr, index + 1, sum, memo);
            memo[index][sum] = (pick + dontPick) % (1e9 + 7);
            return memo[index][sum];
        }

        const dontPick = this.perfectSumHelper(arr, index + 1, sum, memo);
        memo[index][sum] = dontPick;
        return memo[index][sum];
    }

    perfectSum(arr, n, sum) {
        const memo = new Array(n);
        for (let i = 0; i < memo.length; i++) {
            memo[i] = new Array(sum + 1).fill(-1);
        }
        return this.perfectSumHelper(arr, 0, sum, memo);
    }
}

/* Bottom up */

class Solution2 {

    perfectSum(arr, n, sum) {
        const memo = new Array(n);
        for (let i = 0; i < memo.length; i++) {
            memo[i] = new Array(sum + 1).fill(-1);
        }

        for (let j = 0; j < memo[0].length; j++) {
            if (arr[0] === j) {
                memo[0][j] = 1;
            }
            else {
                memo[0][j] = 0;
            }
        }

        for (let i = 0; i < memo.length; i++) {
            memo[i][0] = 1;
        }

        for (let i = 1; i < memo.length; i++) {
            for (let j = 1; j < memo[i].length; j++) {
                if (arr[i] <= j) {
                    memo[i][j] = (memo[i - 1][j - arr[i]] + memo[i - 1][j]) % (1e9 + 7);
                }
                else {
                    memo[i][j] = memo[i - 1][j];
                }
            }
        }

        return memo[n - 1][sum];

    }
}