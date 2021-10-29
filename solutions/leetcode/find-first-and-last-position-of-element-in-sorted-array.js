/*

Problem

https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

Approach
- Divide the array into two.
- If the current element is equal to the target mark it as potential result and go left or right based on first or last index.
- Else if the target is greater than the mid, then search on the right subarray.
- Else search on the left subarray.

Time - O(log(n))
Space - O(1)

n - number of elements

*/

const getPosition = (nums, target, firstIndex) => {
	let start = 0,
		end = nums.length - 1,
		mid,
		result = -1;
	while (start <= end) {
		mid = Math.floor(start + (end - start) / 2);
		if (nums[mid] === target) {
			result = mid;
			if (firstIndex) {
				end = mid - 1;
			} else {
				start = mid + 1;
			}
		} else if (target > nums[mid]) {
			start = mid + 1;
		} else {
			end = mid - 1;
		}
	}
	return result;
};

const searchRange = function (nums, target) {
	const output = [-1, -1];
	const first = getPosition(nums, target, true);
	if (first === -1) {
		return output;
	}
	output[0] = first;
	const second = getPosition(nums, target, false);
	output[1] = second;
	return output;
};
