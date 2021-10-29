/*

Problem

https://leetcode.com/problems/max-consecutive-ones/

Approach
- Traverse the array.
- If the current element is equal to 1, then increment the count.
- Else reset the count to 0.
- Update the maximum result each time.
- Return the result.

Time - O(n)
Space - O(1)

n - number of elements

*/

const findMaxConsecutiveOnes = function (nums) {
	let count = 0,
		result = 0;
	for (let j = 0; j < nums.length; j++) {
		if (nums[j] === 1) {
			count++;
		} else {
			count = 0;
		}
		result = Math.max(result, count);
	}
	return result;
};
