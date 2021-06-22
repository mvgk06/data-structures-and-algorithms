/*

Problem
https://leetcode.com/problems/partition-equal-subset-sum/

Approach

1. Top down
- If the sum of the array elements is odd then the partition is not possible.
- For each index, we have two choices either we pick or don't pick the current element.
- After making the choice, recursively solve the smaller sub-problems and store the solution in an array.
- If the end of the array is reached if the sum is 0 then return 1 to indicate that the partition is possible.
- Else return 0 to indicate that the partition is not possible.
- If the current subproblem is already computed then return it instead of recomputing them again.

Time - O(n*(sum/2))
Space - O(n*(sum/2))

2. Bottom up
- If the sum of the array elements is odd then the partition is not possible.
- Create a memo array and initialize with base cases.
- For each index, we have two choices either we pick or don't pick the current element.
- Use the memo to get the solutions to the smaller sub-problems.
- Return the cell (n-1,sum/2) which contains the solution for the main problem.

Time - O(n*(sum/2))
Space - O(n*(sum/2))

n - number of elements
sum - total sum

*/

/* Top down */

const canPartitionHelper = (nums, index, sum, memo) => {

    if (index === nums.length) {
        if (sum === 0) {
            return 1;
        }
        return 0;
    }

    if (memo[index][sum] != -1) {
        return memo[index][sum];
    }

    if (nums[index] <= sum) {
        const pick = canPartitionHelper(nums, index + 1, sum - nums[index], memo);
        const dontPick = canPartitionHelper(nums, index + 1, sum, memo);
        memo[index][sum] = (pick || dontPick);
        return memo[index][sum];
    }

    const dontPick = canPartitionHelper(nums, index + 1, sum, memo);
    memo[index][sum] = dontPick;
    return memo[index][sum];
};

const canPartition = function (nums) {

    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }

    if (sum % 2 != 0) {
        return false;
    }

    const memo = new Array(nums.length);
    for (let i = 0; i < memo.length; i++) {
        memo[i] = new Array((sum / 2) + 1).fill(-1);
    }

    const result = canPartitionHelper(nums, 0, sum / 2, memo);

    if (result === 1) {
        return true;
    }

    return false;

};

/* Bottom up */

const canPartition2 = function (nums) {

    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }

    if (sum % 2 != 0) {
        return false;
    }

    const memo = new Array(nums.length);
    for (let i = 0; i < memo.length; i++) {
        memo[i] = new Array((sum / 2) + 1).fill(-1);
    }

    for (let j = 0; j < memo[0].length; j++) {
        if (nums[0] === j) {
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
            if (nums[i] <= j) {
                memo[i][j] = (memo[i - 1][j - nums[i]] || memo[i - 1][j]);
            }
            else {
                memo[i][j] = memo[i - 1][j];
            }
        }
    }

    const result = memo[nums.length - 1][sum / 2];

    if (result === 1) {
        return true;
    }

    return false;

};