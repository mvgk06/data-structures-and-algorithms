/*

Problem

https://leetcode.com/problems/binary-search/

Approach

1. Recursive
- Divide the array into two.
- If the mid is equal to the target return it.
- Else if the mid is smaller than the target then recursively search on the right subarray.
- Else recursively search on the left subarray.
- If the start is greater then end, then return -1.

Time - O(log(n))
Space - O(log(n))

2. Iterative
- Divide the array into two.
- If the mid is equal to the target return it.
- Else if the mid is smaller than the target then search on the right subarray.
- Else search on the left subarray.

Time - O(log(n))
Space - O(1)

n - number of elements

*/

/* Recursive */

const searchHelper = (nums, target, start, end) => {
	if (start > end) {
		return -1;
	}
	const mid = Math.floor(start + (end - start) / 2);
	if (nums[mid] === target) {
		return mid;
	} else if (nums[mid] < target) {
		return searchHelper(nums, target, mid + 1, end);
	}
	return searchHelper(nums, target, start, mid - 1);
};

const search = function (nums, target) {
	return searchHelper(nums, target, 0, nums.length - 1);
};

/* Iterative */

const search2 = function (nums, target) {
	let start = 0,
		end = nums.length - 1,
		mid;
	while (start <= end) {
		mid = Math.floor(start + (end - start) / 2);
		if (nums[mid] === target) {
			return mid;
		} else if (nums[mid] < target) {
			start = mid + 1;
		} else {
			end = mid - 1;
		}
	}
	return -1;
};
