/*

Problem

https://leetcode.com/problems/two-sum/

Approach

1. Sorting + Two pointers
- Create an array of pairs that contains the elements along with their index.
- Sort the array in increasing order based on the element.
- Using two pointers at start and end compare the sum of the two elements with the target.
- If the sum is equal to the target, then return an array with the index of start and end.
- Else if the sum is less than the target, then move to the right.
- Else move to the left.
- Return an array of size two with -1.

Time - O(nlog(n))
Space - O(n)

2. Hashing
- Traverse the array and if the difference between the target and the current element exist in the map, then return an array with the index of the difference
and current index.
- Else set the current element along with the index.
- Return an array of size two with -1. 

Time - O(n)
Space - O(n)

n - number of elements

*/

/* Sorting + Two pointers */

const twoSum = function (nums, target) {
	const n = nums.length;
	const arr = new Array(n);
	for (let i = 0; i < n; i++) {
		arr[i] = [nums[i], i];
	}
	arr.sort((a, b) => {
		if (a[0] < b[0]) {
			return -1;
		}
		return 1;
	});
	let start = 0,
		end = n - 1;
	while (start < end) {
		const sum = arr[start][0] + arr[end][0];
		if (sum === target) {
			return [arr[start][1], arr[end][1]];
		} else if (sum < target) {
			start++;
		} else {
			end--;
		}
	}
	return [-1, -1];
};

/* Hashing */

const twoSum2 = function (nums, target) {
	const map = new Map();
	for (let i = 0; i < nums.length; i++) {
		const diff = target - nums[i];
		if (map.has(diff)) {
			return [map.get(diff), i];
		} else {
			map.set(nums[i], i);
		}
	}
	return [-1, -1];
};
