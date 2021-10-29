/*

Problem

https://leetcode.com/problems/minimum-window-substring/

Approach

1. Brute force
- Traverse all the substrings that satisfies the condition and compute the smallest substring.

Time - O(n^3)
Space - O(n+m)

2. Sliding window
- The window is valid when every character in string 2 is included in the window or in other words the frequency of the characters in the window should be greater than or equal to that of string 2.
- Use two pointers start, end to represent the start and the end of the window.
- Use two maps to check if the window is valid or not.
- Update the frequency of the current element.
- Shrink the window as long as it is valid, update the result and the map.
- Expand the window.

Time - O(n+m)
Space - O(n+m)

n - size of string 1
m - size of string 2

*/

/* Brute force */

const isValid = (sMap, tMap) => {
	for (const key of tMap.keys()) {
		if (!sMap.get(key) || sMap.get(key) < tMap.get(key)) {
			return false;
		}
	}
	return true;
};

const minWindow = function (s, t) {
	const tMap = new Map();
	for (let i = 0; i < t.length; i++) {
		if (tMap.has(t[i])) {
			tMap.set(t[i], tMap.get(t[i]) + 1);
		} else {
			tMap.set(t[i], 1);
		}
	}
	const sMap = new Map();
	let result = '',
		size = Number.MAX_VALUE;
	for (let i = 0; i < s.length; i++) {
		for (let j = i; j < s.length; j++) {
			if (sMap.has(s[j])) {
				sMap.set(s[j], sMap.get(s[j]) + 1);
			} else {
				sMap.set(s[j], 1);
			}
			if (j - i + 1 >= t.length && j - i + 1 <= size && isValid(sMap, tMap)) {
				size = j - i + 1;
				result = s.substring(i, j + 1);
			}
		}
		sMap.clear();
	}
	return result;
};

/* Sliding window */

const isValid2 = (sMap, tMap) => {
	for (const key of tMap.keys()) {
		if (!sMap.get(key) || sMap.get(key) < tMap.get(key)) {
			return false;
		}
	}
	return true;
};

const minWindow = function (s, t) {
	const tMap = new Map();
	for (let i = 0; i < t.length; i++) {
		if (tMap.has(t[i])) {
			tMap.set(t[i], tMap.get(t[i]) + 1);
		} else {
			tMap.set(t[i], 1);
		}
	}
	const sMap = new Map();
	let start = 0,
		end = 0,
		result = '',
		size = Number.MAX_VALUE;
	while (end < s.length) {
		if (sMap.has(s[end])) {
			sMap.set(s[end], sMap.get(s[end]) + 1);
		} else {
			sMap.set(s[end], 1);
		}
		while (start < s.length && end - start + 1 >= t.length && isValid2(sMap, tMap)) {
			if (end - start + 1 <= size) {
				size = end - start + 1;
				result = s.substring(start, end + 1);
			}
			if (sMap.has(s[start])) {
				const count = sMap.get(s[start]);
				if (count === 1) {
					sMap.delete(s[start]);
				} else {
					sMap.set(s[start], count - 1);
				}
			}
			start++;
		}
		end++;
	}
	return result;
};
