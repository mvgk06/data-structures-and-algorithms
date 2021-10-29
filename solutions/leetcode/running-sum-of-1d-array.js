/*

Problem

https://leetcode.com/problems/running-sum-of-1d-array/

Approach
- Create a result array and initialize the first element same as input.
- The result of current element is sum of the previous sum and current element.
- Return the result.

Time - O(n)
Space - O(n)

*/

const runningSum = function (nums) {
	const result = new Array(nums.length);
	result[0] = nums[0];
	for (let i = 1; i < nums.length; i++) {
		result[i] = result[i - 1] + nums[i];
	}
	return result;
};
