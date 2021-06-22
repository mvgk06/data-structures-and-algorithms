/*

Problem
https://practice.geeksforgeeks.org/problems/minimum-sum-partition3317/1

Approach

1. Top down
- For each index, we have two choices either we pick or don't pick the current element.
- After making the choice, recursively solve the smaller sub-problems and store the solutions in an array.
- If the end of the array is reached then return the absolute difference between the two subsets.
- If the current subproblem is already computed return it instead of recomputing them.

Time - O(n*sum)
Space - O(n*sum)

2. Bottom up
- Create a memo array and initialize with base cases.
- Find whether a subset is possible with a sum ranging from 0 to the total sum.
- Traverse the last row in the memo and compute the minimum absolute difference.

Time - O(n*sum)
Space - O(n*sum)

n - number of elements
sum - total sum

*/

/* Top down */

class Solution {

    minDifferenceHelper(arr, index, sum, total, memo) {

        if (index === arr.length) {
            const sum2 = total - sum;
            return Math.abs(sum - sum2);
        }

        if (memo[index][sum] != -1) {
            return memo[index][sum];
        }

        if (arr[index] <= sum) {
            const pick = this.minDifferenceHelper(arr, index + 1, sum + arr[index], total, memo);
            const dontPick = this.minDifferenceHelper(arr, index + 1, sum, total, memo);
            memo[index][sum] = Math.min(pick, dontPick);
            return memo[index][sum];
        }

        const dontPick = this.minDifferenceHelper(arr, index + 1, sum, total, memo);
        memo[index][sum] = dontPick;
        return memo[index][sum];
    }

    minDifference(arr, n) {
        let sum = 0;
        for (let i = 0; i < n; i++) {
            sum += arr[i];
        }
        const memo = new Array(n);
        for (let i = 0; i < memo.length; i++) {
            memo[i] = new Array(sum + 1).fill(-1);
        }
        return this.minDifferenceHelper(arr, 0, 0, sum, memo);
    }
}

/* Bottom up */

class Solution2 {

    minDifference(arr, n) {
        let sum = 0;
        for (let i = 0; i < n; i++) {
            sum += arr[i];
        }

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

        let minDiff = Number.MAX_VALUE;
        const size = Math.floor(memo[n - 1].length / 2);
        for (let j = 0; j <= size; j++) {
            if (memo[n - 1][j] === 1) {
                minDiff = Math.min(minDiff, Math.abs(2 * j - sum));
            }
        }

        return minDiff;
    }
}