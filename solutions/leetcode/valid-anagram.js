/*

Problem

https://leetcode.com/problems/valid-anagram/

Approach

1. Sorting
- Sort both the strings.
- If both the strings match, then return true.
- Else return false.

Time - O(n*log(n))
Space - O(1)

2. Hashing
- Store the occurences of the characters in first string and subtract them that occur in the second string.
- If the occurences of any one of the character is not 0, then return false.
- Else return true.

Time - O(n)
Space - O(n)

n - size of the string

*/

/* Sorting */

const sortInc = (a, b) => {
	if (a < b) {
		return -1;
	}
	return 1;
};

const isAnagram = function (s, t) {
	s = s.split('').sort(sortInc).join('');
	t = t.split('').sort(sortInc).join('');
	return s === t;
};

/* Hashing */

const isAnagram2 = function (s, t) {
	const map = new Map();
	for (let i = 0; i < s.length; i++) {
		if (map.has(s[i])) {
			map.set(s[i], map.get(s[i]) + 1);
		} else {
			map.set(s[i], 1);
		}
	}
	for (let i = 0; i < t.length; i++) {
		if (map.has(t[i])) {
			map.set(t[i], map.get(t[i]) - 1);
		} else {
			return false;
		}
	}
	for (let key of map.keys()) {
		if (map.get(key) != 0) {
			return false;
		}
	}
	return true;
};
