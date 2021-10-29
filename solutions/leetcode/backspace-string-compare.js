/*

Problem

https://leetcode.com/problems/backspace-string-compare/

Approach

1. Stack
- Traverse the string and push the elements into the stack.
- If the current element is a "#", then pop an element from the stack.
- Build a string from the remaining elements of the stack.
- If the both the given strings after transformation are equal, then return true.
- Else return false.

Time - O(n)
Space - O(n)

2. Two pointers
- Use two pointers and traverse both the string backwards.
- Keep track of count of "#" in both the strings.
- If the count of "#" is zero, then the current element can be included and the position is valid.
- Find the next valid position for both the pointers.
- If the current valid element in both the strings are not equal, then return false.
- If one of the pointer is out of bounds, then return false.

Time - O(n)
Space - O(1)

n - size of the string

*/

/* Stack */

const backspaceCompareHelper = (s) => {
	const stack = [];
	for (let i = 0; i < s.length; i++) {
		if (s[i] === '#') {
			if (stack.length != 0) {
				stack.pop();
			}
		} else {
			stack.push(s[i]);
		}
	}
	let result = '';
	while (stack.length != 0) {
		result += stack.pop();
	}
	return result;
};

const backspaceCompare = function (s, t) {
	const resultS = backspaceCompareHelper(s);
	const resultT = backspaceCompareHelper(t);
	return resultS === resultT;
};

/* Two pointers */

const backspaceCompare2 = function (s, t) {
	let i = s.length - 1,
		sCount = 0,
		j = t.length - 1,
		tCount = 0;
	while (i >= 0 || j >= 0) {
		while (i >= 0) {
			if (s[i] === '#') {
				sCount++;
			} else {
				if (sCount > 0) {
					sCount--;
				} else {
					break;
				}
			}
			i--;
		}
		while (j >= 0) {
			if (t[j] === '#') {
				tCount++;
			} else {
				if (tCount > 0) {
					tCount--;
				} else {
					break;
				}
			}
			j--;
		}
		if (i >= 0 && j >= 0 && s[i] != t[j]) {
			return false;
		}
		if ((i < 0 && j >= 0) || (i >= 0 && j < 0)) {
			return false;
		}
		i--;
		j--;
	}
	return true;
};
