/*

Problem
https://practice.geeksforgeeks.org/problems/subset-sum-problem-1611555638/1

Approach

1. Top down
- For each index, we have two choices either we pick or don't pick the current element.
- After making the choice, recursively solve the smaller sub-problems and store the solutions in an array.
- If the end of the array is reached if the sum is equal to 0 then return 1 to indicate that the sum is possible.
- Else return 0 to indicate that the sum is not possible.
- If the current subproblem is already computed return it instead of recomputing them.

Time - O(n*sum)
Space - O(n*sum)

2. Bottom up
- Create a memo array and initialize the base cases.
- For each index in the memo, we have two choices either we pick or don't pick the current element.
- Use the memo to get the solutions of smaller sub-problems.
- Return the cell (n-1, sum) which contains the solution of the main problem.

Time - O(n*sum)
Space - O(n*sum)

3. Bottom up (1 array)


Time - O(n*sum)
Space - O(sum)

n - number of elements
sum - total sum

*/

/* Top down */

class Solution {

    subsetSumHelper(arr, sum, index, memo) {

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
            const pick = this.subsetSumHelper(arr, sum - arr[index], index + 1, memo);
            const dontPick = this.subsetSumHelper(arr, sum, index + 1, memo);
            memo[index][sum] = (pick || dontPick);
            return memo[index][sum];
        }

        const dontPick = this.subsetSumHelper(arr, sum, index + 1, memo);
        memo[index][sum] = dontPick;
        return memo[index][sum];

    }

    isSubsetSum(arr, n, sum) {
        const memo = new Array(n);
        for (let i = 0; i < memo.length; i++) {
            memo[i] = new Array(sum + 1).fill(-1);
        }
        const result = this.subsetSumHelper(arr, sum, 0, memo);
        if (result === 1) {
            return true;
        }
        return false;
    }

}

/* Bottom up */

class Solution2 {

    isSubsetSum(arr, n, sum) {
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
                    memo[i][j] = (memo[i - 1][j - arr[i]] || memo[i - 1][j]);
                }
                else {
                    memo[i][j] = memo[i - 1][j];
                }
            }
        }

        if (memo[n - 1][sum] === 1) {
            return true;
        }
        return false;
    }

}