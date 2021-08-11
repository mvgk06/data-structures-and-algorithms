/*

Problem

https://leetcode.com/problems/partition-equal-subset-sum/

Approach

1. Top down
- If the sum of the array elements is odd then the partition is not possible.
- Each state in the memo[i][j] represents whether the subset is possible or not where the sum of the subset is j and elements till the ith index is allowed.
- For each index, we have two choices either we pick or don't pick the current element.
- After making the choice, recursively solve the smaller sub-problems and store the solution in the memo.
- If the index goes out of bounds and if the sum is 0 then return 1 to indicate that the partition is possible.
- Else return 0 to indicate that the partition is not possible.
- If the current subproblem is already computed then return it instead of recomputing them again.

Time - O(n*(sum/2))
Space - O(n*(sum/2))

2. Bottom up
- If the sum of the array elements is odd then the partition is not possible.
- Create a memo array and initialize with base cases.
- Each state in the memo[i][j] represents whether the subset is possible or not where the sum of the subset is j and the size of the input is i.
- For each index, we have two choices either we pick or don't pick the current element.
- Use the memo to get the solutions to the smaller sub-problems.
- Return the cell (n,sum/2) which contains the solution for the main problem.

Time - O(n*(sum/2))
Space - O(n*(sum/2))

3. Bottom up (space optimized)
- To compute the current row, we only need the previous row.
- Keep track of the previous row and compute the current row.
- Update the previous row.
- Return the cell (sum/2) which contains the solution for the main problem.

Time - O(n*(sum/2))
Space - O(sum/2)

4. Optimal path
- Traverse the memo backwards from the final state to the base state.
- Based on the transitions compute the optimal path.

Time - O(n)
Space - O(1)

n - number of elements
sum - total sum

*/

/* Top down */

const canPartitionHelper = (nums, i, sum, memo) => {
    if (i < 0) {
        if (sum === 0) {
            return 1;
        }
        return 0;
    }
    if (memo[i][sum] != -1) {
        return memo[i][sum];
    }
    if (nums[i] <= sum) {
        const pick = canPartitionHelper(nums, i - 1, sum - nums[i], memo);
        const dontPick = canPartitionHelper(nums, i - 1, sum, memo);
        memo[i][sum] = (pick || dontPick);
    }
    else {
        const dontPick = canPartitionHelper(nums, i - 1, sum, memo);
        memo[i][sum] = dontPick;
    }
    return memo[i][sum];
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
    const result = canPartitionHelper(nums, nums.length - 1, sum / 2, memo);
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
    const memo = new Array(nums.length + 1);
    for (let i = 0; i < memo.length; i++) {
        memo[i] = new Array((sum / 2) + 1).fill(-1);
    }
    for (let j = 0; j < memo[0].length; j++) {
        memo[0][j] = 0;
    }
    for (let i = 0; i < memo.length; i++) {
        memo[i][0] = 1;
    }
    for (let i = 1; i < memo.length; i++) {
        for (let j = 1; j < memo[i].length; j++) {
            if (nums[i - 1] <= j) {
                memo[i][j] = (memo[i - 1][j - nums[i - 1]] || memo[i - 1][j]);
            }
            else {
                memo[i][j] = memo[i - 1][j];
            }
        }
    }
    const result = memo[nums.length][sum / 2];
    if (result === 1) {
        return true;
    }
    return false;
};

/* Bottom up (space optimized) */

const canPartition3 = function (nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    if (sum % 2 != 0) {
        return false;
    }
    let prevMemo = new Array(nums.length + 1).fill(0);
    prevMemo[0] = 1;
    for (let i = 1; i <= nums.length; i++) {
        const currMemo = new Array(nums.length + 1);
        currMemo[0] = 0;
        for (let j = 1; j <= sum / 2; j++) {
            if (nums[i - 1] <= j) {
                currMemo[j] = (prevMemo[j - nums[i - 1]] || prevMemo[j]);
            }
            else {
                currMemo[j] = prevMemo[j];
            }
        }
        prevMemo = [...currMemo];
    }
    const result = prevMemo[sum / 2];
    if (result === 1) {
        return true;
    }
    return false;
};

/* Optimal path */

const optimalPath = (nums, sum, memo) => {
    const path = [];
    let i = nums.length, j = sum / 2;
    while (i > 0 && j > 0) {
        if (nums[i - 1] <= j && memo[i][j] === memo[i - 1][j - nums[i - 1]]) {
            path.push(i - 1);
            j -= nums[i - 1];
            i -= 1;
        }
        else {
            i -= 1;
        }
    }
    return path.reverse();
};