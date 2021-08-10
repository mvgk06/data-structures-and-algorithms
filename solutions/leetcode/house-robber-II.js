/*

Problem

https://leetcode.com/problems/house-robber-ii/

Approach

1. Top down
- Skip the first or the last house inorder to break the cycle.
- Compute the maximum money that can robbed in both the configurations, the maximum of those two is the result.
- Each state in the memo[i] represents the maximum money that can be robbed if we rob till the ith house.
- For each index, we have two choices we can either rob or don't rob the current house.
- After making the choice, recursively solve the smaller sub-problems and store the solutions in the memo.
- If the index goes out of bounds then return 0 to indicate that no money can be robbed.
- If the current subproblem is already computed then return it instead of recomputing them. 

Time - O(n)
Space - O(n)

2. Bottom up
- Skip the first or the last house inorder to break the cycle.
- Compute the maximum money that can robbed in both the configurations, the maximum of those two is the result.
- Create a memo array and initialize with the base cases.
- Each state in the memo[i] represents the maximum money that can be robbed if the number of houses is i.
- For each index, we have two choices we can either rob or don't rob the current house.
- Use the memo to get the solutions of smaller sub-problems.
- Return the last element in the memo which contains the solution for the main problem. 

Time - O(n)
Space - O(n)

3. Bottom up (space optimized)
- To compute the current state, we only need the solution of previous two states.
- Use two variables prev, prev2 to keep track of the previous two states.
- Compute the solution for the current state and update the previous two states.
- Return the final state which contains the solution for the main problem.

Time - O(n)
Space - O(1)

4. Optimal Path
- Traverse the memo backwards from the final state to the base state.
- Based on the transitions compute the optimal path.

Time - O(n)
Space - O(1)

n - number of houses

*/

/* Top down */

const robHelper = (nums, start, i, memo) => {
    if (i < start) {
        return 0;
    }
    if (memo[i] != -1) {
        return memo[i];
    }
    const rob = nums[i] + robHelper(nums, start, i - 2, memo);
    const dontRob = robHelper(nums, start, i - 1, memo);
    memo[i] = Math.max(rob, dontRob);
    return memo[i];
};

const rob = function (nums) {
    if (nums.length === 1) {
        return nums[0];
    }
    const memo = new Array(nums.length).fill(-1);
    const skipFirstHouse = robHelper(nums, 1, nums.length - 1, memo);
    memo.fill(-1);
    const skipLastHouse = robHelper(nums, 0, nums.length - 2, memo);
    return Math.max(skipFirstHouse, skipLastHouse);
};

/* Bottom up */

const robHelper2 = (nums, memo, skipFirst) => {
    memo[1] = skipFirst ? 0 : nums[0];
    memo[2] = skipFirst ? nums[1] : Math.max(nums[0], nums[1]);
    for (let i = 3; i < memo.length; i++) {
        memo[i] = Math.max(nums[i - 1] + memo[i - 2], memo[i - 1]);
    }
    return skipFirst ? memo[nums.length] : memo[nums.length - 1];
};

const rob2 = function (nums) {
    if (nums.length === 1) {
        return nums[0];
    }
    const memo = new Array(nums.length + 1).fill(-1);
    const skipFirstHouse = robHelper2(nums, memo, true);
    const skipLastHouse = robHelper2(nums, memo, false);
    return Math.max(skipFirstHouse, skipLastHouse);
};

/* Bottom up (space optimized) */

const robHelper3 = (nums, skipFirst) => {
    let prev2 = skipFirst ? 0 : nums[0];
    let prev = skipFirst ? nums[1] : Math.max(nums[0], nums[1]);
    for (let i = 3; i <= nums.length; i++) {
        const curr = Math.max(nums[i - 1] + prev2, prev);
        prev2 = prev;
        prev = curr;
    }
    return skipFirst ? prev : prev2;
};

const rob3 = function (nums) {
    if (nums.length === 1) {
        return nums[0];
    }
    const skipFirstHouse = robHelper3(nums, true);
    const skipLastHouse = robHelper3(nums, false);
    return Math.max(skipFirstHouse, skipLastHouse);
};

/* Optimal path */

const optimalPath = (nums, memo) => {
    if (memo.length === 1) {
        return [0];
    }
    if (memo.length === 2) {
        if (nums[0] > nums[1]) {
            return [0];
        }
        return [1];
    }
    const path = [];
    let i = memo.length;
    while (i >= 3) {
        if (memo[i] === nums[i - 1] + memo[i - 2]) {
            path.push(i - 1);
            i -= 2;
        }
        else {
            i -= 1;
        }
    }
    path.push(i - 1);
    return path.reverse();
};