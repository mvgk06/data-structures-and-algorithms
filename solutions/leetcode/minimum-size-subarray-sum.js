/*

Problem

https://leetcode.com/problems/minimum-size-subarray-sum/

Approach

1. Brute force
- Traverse all the subarrays that has a sum greater than or equal to the target and compute the minimum subarray.

Time - O(n^2)
Space - O(1)

2. Sliding window
- The window is valid when the sum of the elements in the window is greater than or equal to the target.
- Use two pointers start, end to represent the start and the end of the window.
- Use a variable sum to keep track of the sum of the elements in the window.
- Add the current element to the sum.
- Shrink the window as long as the window is valid, update the result and the sum.
- Expand the window.

Time - O(n)
Space - O(1)

n - number of elements

*/

/* Brute force */

const minSubArrayLen = function (target, nums) {
	let result = Number.MAX_VALUE;
	for (let i = 0; i < nums.length; i++) {
		let sum = 0;
		for (let j = i; j < nums.length; j++) {
			sum += nums[j];
			if (sum >= target) {
				result = Math.min(result, j - i + 1);
			}
		}
	}
	if (result === Number.MAX_VALUE) {
		return 0;
	}
	return result;
};

/* Sliding window */

const minSubArrayLen2 = function (target, nums) {
	let start = 0,
		end = 0,
		sum = 0,
		result = Number.MAX_VALUE;
	while (end < nums.length) {
		sum += nums[end];
		while (start < nums.length && sum >= target) {
			result = Math.min(result, end - start + 1);
			sum -= nums[start];
			start++;
		}
		end++;
	}
	if (result === Number.MAX_VALUE) {
		return 0;
	}
	return result;
};
