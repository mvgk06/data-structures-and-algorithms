/*

Problem

https://leetcode.com/problems/sort-array-by-parity/

Approach
- Keep track of the first odd element.
- Traverse the array and if the current element is even, then swap it with the first odd element, and increment the first odd.
- Return the array.

Time - O(n)
Space - O(1)

n - number of elements

*/

const sortArrayByParity = function (nums) {
	let firstOdd = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] % 2 === 0) {
			const temp = nums[i];
			nums[i] = nums[firstOdd];
			nums[firstOdd] = temp;
			firstOdd++;
		}
	}
	return nums;
};
