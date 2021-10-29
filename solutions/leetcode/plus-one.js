/*

Problem

https://leetcode.com/problems/plus-one/

Approach
- Initialize the carry as 1.
- Traverse the array backwards and the current digit with the carry.
- Compute the current digit for the result based on the occurence of carry after summation.
- Return the reverse of the result.

Time - O(n)
Space - O(1)

n - number of elements

*/

const plusOne = function (digits) {
	const result = [];
	let carry = 1;
	for (let i = digits.length - 1; i >= 0; i--) {
		const sum = digits[i] + carry;
		if (sum > 9) {
			result.push(sum % 10);
			carry = Math.floor(sum / 10);
		} else {
			result.push(sum);
			carry = 0;
		}
	}
	if (carry != 0) {
		result.push(carry);
	}
	return result.reverse();
};
