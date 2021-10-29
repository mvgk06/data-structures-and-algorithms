/*

Problem

https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/

Approach

1. Brute force
- Traverse all the subarrays that satisfies the condition and compute the longest subarray.

Time - O(n^2)
Space - O(1)

2. Sliding window
- The window is valid when the absolute difference between any two elements of the window is less than or equal to the given limit.
- Use two pointers start, end to represent the start and the end of the window.
- Use two deques to check if the window is valid or not.
- Update the deque based on the current element.
- Shrink the window as long as it is invalid and update the deque.
- Update the result and expand the window.

Time - O(n)
Space - O(n)

n - number of elements

*/

/* Brute force */

const longestSubarray = function (nums, limit) {
	let result = 0;
	for (let i = 0; i < nums.length; i++) {
		let max = 0,
			min = Number.MAX_VALUE;
		for (let j = i; j < nums.length; j++) {
			max = Math.max(max, nums[j]);
			min = Math.min(min, nums[j]);
			if (Math.abs(max - min) <= limit) {
				result = Math.max(result, j - i + 1);
			}
		}
	}
	return result;
};

/* Sliding window */

const Deque = require('../../data-structures/deque.js');

const longestSubarray2 = function (nums, limit) {
	let start = 0,
		end = 0,
		result = 0;
	const maxDeque = new Deque(),
		minDeque = new Deque();
	while (end < nums.length) {
		while (maxDeque.getSize() != 0 && nums[end] > nums[maxDeque.getRear()]) {
			maxDeque.pop();
		}
		maxDeque.push(end);
		while (minDeque.getSize() != 0 && nums[end] < nums[minDeque.getRear()]) {
			minDeque.pop();
		}
		minDeque.push(end);
		let max = nums[maxDeque.getFront()],
			min = nums[minDeque.getFront()];
		while (
			maxDeque.getSize() !== 0 &&
			minDeque.getSize() !== 0 &&
			Math.abs(max - min) > limit
		) {
			if (maxDeque.getFront() === start) {
				maxDeque.deque();
				max = nums[maxDeque.getFront()];
			}
			if (minDeque.getFront() === start) {
				minDeque.deque();
				min = nums[minDeque.getFront()];
			}
			start++;
		}
		result = Math.max(result, end - start + 1);
		end++;
	}
	return result;
};
