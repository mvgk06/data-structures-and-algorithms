/*

Problem
https://practice.geeksforgeeks.org/problems/subset-sum-problem-1611555638/1

Approach

1. Top down
- For each index, I have two choices either I pick or don't pick the current element.
- Recursively solve the smaller sub problems and store the solutions in an array.
- If the end of the array is reached, if the sum is equal to 0 then return 1 to indicate that the sum is possible.
- Else return 0 to indicate that the sum is not possible.
- If the current sub problem is already computed return it instead of recomputing them.

Time - O(n*sum)
Space - O(n*sum)

2. Bottom up
- Create a memo array and initialize the base cases.
- For each index in the memo, I have two choices either I pick or don't pick the current element.
- Use the memo to get the solutions of smaller sub problems.
- Return the cell (n,sum) which contains the solution of the main problem.

Time - O(n*sum)
Space - O(n*sum)

*/

/* Top down */

class Solution {

    subsetSumHelper(arr, n, sum, currIndex, memo) {

        if (currIndex === n) {
            if (sum === 0) {
                return 1;
            }
            return 0;
        }

        if (memo[currIndex][sum] != -1) {
            return memo[currIndex][sum];
        }

        if (arr[currIndex] <= sum) {
            memo[currIndex][sum] = this.subsetSumHelper(arr, n, sum - arr[currIndex], currIndex + 1, memo);
        }

        if (memo[currIndex][sum] === 1) {
            return 1;
        }

        memo[currIndex][sum] = this.subsetSumHelper(arr, n, sum, currIndex + 1, memo);
        return memo[currIndex][sum];

    }

    isSubsetSum(arr, n, sum) {
        const memo = new Array(n + 1);
        for (let i = 0; i < memo.length; i++) {
            memo[i] = new Array(sum + 1).fill(-1);
        }
        const result = this.subsetSumHelper(arr, n, sum, 0, memo);
        if (result === 1) {
            return true;
        }
        return false;
    }

}

/* Bottom up */

class Solution2 {

    isSubsetSum(arr, n, sum) {
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
                    memo[i][j] = (memo[i - 1][j - arr[i - 1]] || memo[i - 1][j]);
                }
                else {
                    memo[i][j] = memo[i - 1][j];
                }
            }
        }

        if (memo[n][sum] === 1) {
            return true;
        }
        return false;
    }

}