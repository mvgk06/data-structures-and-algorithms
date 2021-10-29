/*

Problem

https://leetcode.com/problems/is-subsequence/

Approach
- Use a pointer say i to keep track of the characters in string s exist in string t.
- Traverse the string t and if the ith character exist in t, then increment i by 1.
- If i reaches the end of the string, then return true.
- Else return false.

Time - O(m)
Space - O(1)

m - size of string t

*/

const isSubsequence = function (s, t) {
	let i = 0;
	for (let j = 0; j < t.length; j++) {
		if (s[i] === t[j]) {
			i++;
		}
	}
	if (i === s.length) {
		return true;
	}
	return false;
};
