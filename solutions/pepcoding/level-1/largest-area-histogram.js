/*

Problem

https://pepcoding.com/resources/online-java-foundation/stacks-and-queues/lah-official/ojquestion

Approach
- Find the index of nearest smallest on left and right for all the elements in the array.
- Traverse the array, find the area for each element and update the result.
- Print the result.

Time - O(n)
Space - O(n)

n - number of elements

*/

const nearestSmallestOnLeft = (arr) => {
	const stack = [],
		result = new Array(arr.length);
	for (let i = 0; i < arr.length; i++) {
		while (stack.length !== 0 && arr[stack[stack.length - 1]] >= arr[i]) {
			stack.pop();
		}
		if (stack.length === 0) {
			result[i] = -1;
		} else {
			result[i] = stack[stack.length - 1];
		}
		stack.push(i);
	}
	return result;
};

const nearestSmallestOnRight = (arr) => {
	const stack = [],
		result = new Array(arr.length);
	for (let i = arr.length - 1; i >= 0; i--) {
		while (stack.length !== 0 && arr[stack[stack.length - 1]] >= arr[i]) {
			stack.pop();
		}
		if (stack.length === 0) {
			result[i] = arr.length;
		} else {
			result[i] = stack[stack.length - 1];
		}
		stack.push(i);
	}
	return result;
};

const solve = (arr) => {
	const left = nearestSmallestOnLeft(arr);
	const right = nearestSmallestOnRight(arr);
	let result = 0;
	for (let i = 0; i < arr.length; i++) {
		const area = arr[i] * (right[i] - left[i] - 1);
		result = Math.max(result, area);
	}
	console.log(result);
};
