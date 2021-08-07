/*

Problem

https://leetcode.com/problems/maximum-product-subarray/

Approach

1. Brute force
- Compute the product of all the subarrays and return the maximum of all the products.

Time - O(n^2)
Space - O(1)

2. Top down
- Each state in memo[i] represents the maximum and the minimum product of the subarray that ends with the ith element.
- At each index we have three choices, either we can extend the subarray based on maximum or minimum product so far or we can start a new subarray.
- Recursively solve the smaller sub-problems and store the solutions in the memo.
- If the index is 0, then both the maximum and the minimum product is equal to the first element.
- If the current subproblem is already computed return it instead of recomputing them again.
- Return the maximum of all the maximum products so far in the memo array.

Time - O(n)
Space - O(n)

3. Bottom up
- Create a memo array and initialize with base cases.
- Each state in memo[i] represents the maximum and the minimum product of the subarray that ends with the ith element.
- At each index we have three choices, either we can extend the subarray based on maximum or minimum product so far or we can start a new subarray.
- Use the memo to get the solutions for smaller sub-problems.
- Return the maximum of all the maximum products so far in the memo array.

Time - O(n)
Space - O(n)

4. Bottom up (space optimized)
- To compute the current state we only need the previous state.
- Use a variable to keep track of the previous state.
- Compute the current state, update the result and the previous state.
- Return the result.

Time - O(n)
Space - O(1)

n - number of elements

*/

/* Brute force */

const maxProduct = function (nums) {
    const n = nums.length;
    let result = -Number.MAX_VALUE;
    for (let i = 0; i < n; i++) {
        let curr = 1;
        for (let j = i; j < n; j++) {
            curr *= nums[j];
            result = Math.max(result, curr);
        }
    }
    return result;
};

/* Top down */

const helper = (nums, i, memo) => {
    if (i === 0) {
        memo[i] = [nums[i], nums[i]];
        return memo[i];
    }
    if (memo[i]) {
        return memo[i];
    }
    const [maxSoFar, minSoFar] = helper(nums, i - 1, memo);
    const currMax = Math.max(maxSoFar * nums[i], minSoFar * nums[i], nums[i]);
    const currMin = Math.min(maxSoFar * nums[i], minSoFar * nums[i], nums[i]);
    memo[i] = [currMax, currMin];
    return memo[i];
};

const maxProduct2 = function (nums) {
    const n = nums.length, memo = new Array(n);
    helper(nums, n - 1, memo);
    let result = -Number.MAX_VALUE;
    for (let i = 0; i < n; i++) {
        result = Math.max(result, memo[i][0]);
    }
    return result;
};

/* Bottom up */

const maxProduct3 = function (nums) {
    const n = nums.length, memo = new Array(n);
    memo[0] = [nums[0], nums[0]];
    let result = -Number.MAX_VALUE;
    for (let i = 1; i < n; i++) {
        const currMax = Math.max(memo[i - 1][0] * nums[i], memo[i - 1][1] * nums[i], nums[i]);
        const currMin = Math.min(memo[i - 1][0] * nums[i], memo[i - 1][1] * nums[i], nums[i]);
        memo[i] = [currMax, currMin];
        result = Math.max(result, memo[i][0]);
    }
    return result;
};

/* Bottom up (space optimized) */

const maxProduct4 = function (nums) {
    const n = nums.length;
    let maxSoFar = nums[0], minSoFar = nums[0], result = nums[0];
    for (let i = 1; i < n; i++) {
        const currMax = Math.max(maxSoFar * nums[i], minSoFar * nums[i], nums[i]);
        const currMin = Math.min(maxSoFar * nums[i], minSoFar * nums[i], nums[i]);
        result = Math.max(result, currMax);
        maxSoFar = currMax;
        minSoFar = currMin;
    }
    return result;
};