/*

Problem

https://leetcode.com/problems/roman-to-integer/

Approach
- Create a mapping of roman to integer.
- Traverse the string backwards and if the current number is smaller than the next, then subtract it from the result.
- Else add it to the result.
- Return the result.

Time - O(n)
Space - O(n)

n - size of the string

*/

const romanToInt = function (s) {
	const map = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};
	let result = map[s[s.length - 1]];
	for (let i = s.length - 2; i >= 0; i--) {
		const curr = map[s[i]],
			next = map[s[i + 1]];
		if (curr < next) {
			result -= curr;
		} else {
			result += curr;
		}
	}
	return result;
};
