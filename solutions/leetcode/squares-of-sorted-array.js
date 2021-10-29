/*

Problem

https://leetcode.com/problems/squares-of-a-sorted-array/

Approach
- Find the first positive index say i, assign the negative index as i-1.
- If no positive index is found, then assign positive index as length of array and negative index as length-1.
- Compare the square of both positive and negative index and push the elements into the result array in sorted order.
- Based on the conditions move the negative index backward and positive index forward.
- Return the result array.

Time - O(n)
Space - O(n)

n - number of elements

*/

const sortedSquares = function (nums) {
	let neg = -1,
		pos = -1;
	const result = [];
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] >= 0) {
			pos = i;
			neg = i - 1;
			break;
		}
	}
	if (pos === -1) {
		pos = nums.length;
		neg = nums.length - 1;
	}
	while (neg >= 0 && pos < nums.length) {
		const negSq = Math.pow(nums[neg], 2),
			posSq = Math.pow(nums[pos], 2);
		if (negSq < posSq) {
			result.push(negSq);
			neg--;
		} else {
			result.push(posSq);
			pos++;
		}
	}
	while (neg >= 0) {
		const negSq = Math.pow(nums[neg], 2);
		result.push(negSq);
		neg--;
	}
	while (pos < nums.length) {
		const posSq = Math.pow(nums[pos], 2);
		result.push(posSq);
		pos++;
	}
	return result;
};
