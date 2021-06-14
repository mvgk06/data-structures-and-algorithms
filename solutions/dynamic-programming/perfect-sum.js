/*

Problem
https://practice.geeksforgeeks.org/problems/perfect-sum-problem5633/1

Approach

1. Top down
- For each index I have two choices either I can pick or don't pick the current element.
- Recursively solve the smaller sub problems and store the solution in an array.
- If the end of the array is reached, if the sum is 0 then return 1 to indicate that a possible solution is found.
- Else return 0 to indicate no possible solution is found.
- If the current sub problem is already solved then return it instead of recomputing them again.

Time - O(n*sum)
Space - O(n*sum)

2. Bottom up
- Create a memo array and initialize with base cases.
- For each index I have two choices either I can pick or don't pick the current element.
- Use the memo to get the solutions of smaller sub problems.
- Return the cell (n,sum) which contains the solution for the main problem.

Time - O(n*sum)
Space - O(n*sum)

*/

/* Top down */

class Solution {

    perfectSumHelper(arr, currIndex, sum, memo) {
        if (currIndex === arr.length) {
            if (sum === 0) {
                return 1;
            }
            return 0;
        }

        if (memo[currIndex][sum] != -1) {
            return memo[currIndex][sum];
        }

        if (arr[currIndex] <= sum) {
            const pickCurr = this.perfectSumHelper(arr, currIndex + 1, sum - arr[currIndex], memo);
            const dontPickCurr = this.perfectSumHelper(arr, currIndex + 1, sum, memo);
            memo[currIndex][sum] = (pickCurr + dontPickCurr) % (1e9 + 7);
            return memo[currIndex][sum];
        }

        const dontPickCurr = this.perfectSumHelper(arr, currIndex + 1, sum, memo);
        memo[currIndex][sum] = dontPickCurr;
        return memo[currIndex][sum];
    }

    perfectSum(arr, n, sum) {
        const memo = new Array(n + 1);
        for (let i = 0; i < memo.length; i++) {
            memo[i] = new Array(sum + 1).fill(-1);
        }
        return this.perfectSumHelper(arr, 0, sum, memo);
    }
}

/* Bottom up */

class Solution2 {

    perfectSum(arr, n, sum) {
        const memo = new Array(n + 1);
        for (let i = 0; i < memo.length; i++) {
            memo[i] = new Array(sum + 1).fill(-1);
        }

        for (let j = 0; j < memo[0].length; j++) {
            memo[0][j] = 0;
        }

        for (let i = 0; i < memo.length; i++) {
            memo[i][0] = 1;
        }

        for (let i = 1; i < memo.length; i++) {
            for (let j = 1; j < memo[i].length; j++) {
                if (arr[i - 1] <= j) {
                    memo[i][j] = (memo[i - 1][j - arr[i - 1]] + memo[i - 1][j]) % (1e9 + 7);
                }
                else {
                    memo[i][j] = memo[i - 1][j];
                }
            }
        }

        return memo[n][sum];

    }
}