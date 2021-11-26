/*

Problem

https://leetcode.com/problems/to-lower-case/

Approach
- Traverse the string.
- If the current character is uppercase, then convert it into lowercase using ascii and push it into the result.
- Else push the character into the result.
- Return the result as a string.

Time - O(n)
Space - O(n)

n - size of string

*/

const isUpperCase = (code) => {
	return code >= 65 && code <= 90;
};

const toLowerCase = function (s) {
	const result = [];
	for (let i = 0; i < s.length; i++) {
		const code = s.charCodeAt(i);
		if (isUpperCase(code)) {
			result.push(String.fromCharCode(code + 32));
		} else {
			result.push(s[i]);
		}
	}
	return result.join('');
};
