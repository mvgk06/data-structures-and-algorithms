/*

Problem

https://leetcode.com/problems/fruit-into-baskets/

Approach

1. Brute force
- Traverse all the subarrays where the types of elements is atmost 2 and compute the maximum number of elements.

Time - O(n^2)
Space - O(1)

2. Sliding window
- The window is valid when the types of elements in the window is at most 2.
- Use two pointers start, end to represent the start and the end of the window.
- Use a map to store the frequency of the elements in the window.
- Update the frequency of the current element.
- Shrink the window as long as the window is invalid and update the map.
- Update the result and expand the window.

Time - O(n)
Space - O(n)

n - number of elements

*/

/* Brute force */

const totalFruit = function (fruits) {
	let result = 0;
	const set = new Set();
	for (let i = 0; i < fruits.length; i++) {
		let count = 0;
		for (let j = i; j < fruits.length; j++) {
			set.add(fruits[j]);
			count += 1;
			if (set.size <= 2) {
				result = Math.max(result, count);
			}
		}
		set.clear();
	}
	return result;
};

/* Sliding window */

const totalFruit = function (fruits) {
	let start = 0,
		end = 0,
		result = 0;
	const map = new Map();
	while (end < fruits.length) {
		if (map.has(fruits[end])) {
			map.set(fruits[end], map.get(fruits[end]) + 1);
		} else {
			map.set(fruits[end], 1);
		}
		while (start < fruits.length && map.size > 2) {
			if (map.has(fruits[start])) {
				const count = map.get(fruits[start]);
				if (count === 1) {
					map.delete(fruits[start]);
				} else {
					map.set(fruits[start], count - 1);
				}
			}
			start++;
		}
		result = Math.max(result, end - start + 1);
		end++;
	}
	return result;
};
