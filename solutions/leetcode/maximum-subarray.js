/*

Problem

https://leetcode.com/problems/maximum-subarray/

Approach

1. Brute force
- Compute the sum of all the subarrays and return the maximum of all the sums.

Time - O(n^2)
Space - O(1)

2. Top down
- Each state in memo[i] represents the maximum sum of the subarray that ends with the ith element.
- At each index we have two choices, either we can extend the subarray or we can start a new subarray.
- Recursively solve the smaller sub-problems and store the solutions in the memo.
- If the index is 0, then the maximum sum is the first element.
- If the current subproblem is already computed return it instead of recomputing them again.
- Return the maximum of all the elements in the memo array.

Time - O(n)
Space - O(n)

3. Bottom up
- Create a memo array and initialize with base cases.
- Each state in memo[i] represents the maximum sum of the subarray that ends with the ith element.
- At each index we have two choices, either we can extend the subarray or we can start a new subarray.
- Use the memo to get the solutions for smaller sub-problems.
- Return the maximum of all the elements in the memo array.

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

const maxSubArray = function (nums) {
	const n = nums.length;
	let result = -Number.MAX_VALUE;
	for (let i = 0; i < n; i++) {
		let sum = 0;
		for (let j = i; j < n; j++) {
			sum += nums[j];
			result = Math.max(result, sum);
		}
	}
	return result;
};

/* Top down */

const helper = (nums, i, memo) => {
	if (i === 0) {
		memo[i] = nums[i];
		return memo[i];
	}
	if (memo[i] != -1) {
		return memo[i];
	}
	const maxSoFar = helper(nums, i - 1, memo);
	memo[i] = Math.max(maxSoFar + nums[i], nums[i]);
	return memo[i];
};

const maxSubArray2 = function (nums) {
	const n = nums.length,
		memo = new Array(n).fill(-1);
	helper(nums, n - 1, memo);
	let result = -Number.MAX_VALUE;
	for (let i = 0; i < n; i++) {
		result = Math.max(result, memo[i]);
	}
	return result;
};

/* Bottom up */

const maxSubArray3 = function (nums) {
	const n = nums.length,
		memo = new Array(n).fill(-1);
	memo[0] = nums[0];
	let result = -Number.MAX_VALUE;
	for (let i = 1; i < n; i++) {
		memo[i] = Math.max(memo[i - 1] + nums[i], nums[i]);
		result = Math.max(result, memo[i]);
	}
	return result;
};

/* Bottom up (space optimized) */

const maxSubArray4 = function (nums) {
	const n = nums.length;
	let maxSoFar = nums[0],
		result = nums[0];
	for (let i = 1; i < n; i++) {
		const currMax = Math.max(maxSoFar + nums[i], nums[i]);
		result = Math.max(result, currMax);
		maxSoFar = currMax;
	}
	return result;
};
