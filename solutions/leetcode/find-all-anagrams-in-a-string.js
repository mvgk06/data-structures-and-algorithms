/*

Problem

https://leetcode.com/problems/find-all-anagrams-in-a-string/

Approach

1. Brute force
- Traverse all the substrings of length equal to string 2 which is an anagram and push it's starting index into the result.

Time - O(n^2)
Space - O(1)

2. Sliding window
- The window is valid if it's an anagram of the given string.
- Use two pointers start, end to represent the start and the end of the window.
- Use two frequency arrays to check if the window is valid or not. 
- Update the frequency of current element.
- If the window is valid, then update the result, frequency array and shrink the window.
- Expand the window.

Time - O(n+m)
Space - O(1)

n - size of string 1
m - size of string 2

*/

/* Brute force */

const isAnagram = (sCount, pCount) => {
	for (let i = 0; i < sCount.length; i++) {
		if (sCount[i] != pCount[i]) {
			return false;
		}
	}
	return true;
};

const findAnagrams = function (s, p) {
	const result = [],
		pCount = new Array(26).fill(0);
	for (let i = 0; i < p.length; i++) {
		const id = p.charCodeAt(i) - 97;
		pCount[id] += 1;
	}
	for (let i = 0; i < s.length; i++) {
		const sCount = new Array(26).fill(0);
		for (let j = i; j < s.length; j++) {
			const id = s.charCodeAt(j) - 97;
			sCount[id] += 1;
			if (j - i + 1 === p.length && isAnagram(sCount, pCount)) {
				result.push(i);
			}
		}
	}
	return result;
};

/* Sliding window */

const isAnagram2 = (sCount, pCount) => {
	for (let i = 0; i < sCount.length; i++) {
		if (sCount[i] != pCount[i]) {
			return false;
		}
	}
	return true;
};

const findAnagrams2 = function (s, p) {
	const result = [],
		pCount = new Array(26).fill(0),
		sCount = new Array(26).fill(0);
	for (let i = 0; i < p.length; i++) {
		const id = p.charCodeAt(i) - 97;
		pCount[id] += 1;
	}
	let start = 0,
		end = 0;
	while (end < s.length) {
		const id = s.charCodeAt(end) - 97;
		sCount[id] += 1;
		if (end - start + 1 === p.length) {
			if (isAnagram2(sCount, pCount)) {
				result.push(start);
			}
			const id = s.charCodeAt(start) - 97;
			if (sCount[id] > 0) {
				sCount[id] -= 1;
			}
			start++;
		}
		end++;
	}
	return result;
};
