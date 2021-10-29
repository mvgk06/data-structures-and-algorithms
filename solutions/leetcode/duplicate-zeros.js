/*

Problem

https://leetcode.com/problems/duplicate-zeros/

Approach

1. Brute force
- If the current element is zero, then shift all the elements on the right by an index and duplicate the current element.

Time - O(n^2)
Space - O(1)

2. Two pointers
- Duplicate the zeros using two pointers and a temp array.

Time - O(n)
Space - O(n)

3. Count and duplicate
- Count the number of zeros.
- Traverse the array backwards, if the current element's position after shift is within the bounds, then place the element at that position.
- If the current element is zero, then decrement the count and place the current element at the correct position.

Time - O(n)
Space - O(1)

n - number of elements

*/

/* Brute force */

const duplicateZeros = function (arr) {
	const n = arr.length;
	let i = 0;
	while (i < n) {
		if (arr[i] === 0) {
			for (let j = n - 2; j >= i; j--) {
				arr[j + 1] = arr[j];
			}
			i += 2;
		} else {
			i++;
		}
	}
};

/* Two pointers */

const duplicateZeros2 = function (arr) {
	const n = arr.length,
		temp = new Array(n);
	let i = 0,
		j = 0;
	while (i < n && j < n) {
		temp[j] = arr[i];
		j++;
		if (arr[i] === 0 && j < n) {
			temp[j] = arr[i];
			j++;
		}
		i++;
	}
	for (let i = 0; i < n; i++) {
		arr[i] = temp[i];
	}
};

/* Count and duplicate */

const duplicateZeros3 = function (arr) {
	const n = arr.length;
	let count = 0;
	for (let i = 0; i < n; i++) {
		if (arr[i] === 0) {
			count++;
		}
	}
	for (let i = n - 1; i >= 0; i--) {
		if (i + count < n) {
			arr[i + count] = arr[i];
		}
		if (arr[i] === 0) {
			count -= 1;
			if (i + count < n) {
				arr[i + count] = arr[i];
			}
		}
	}
};
