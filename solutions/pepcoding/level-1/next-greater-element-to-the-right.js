/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/stacks-and-queues/next-greater-element-official/ojquestion

Approach 
- Traverse the array from the right, while the stack is not empty and the top is smaller than the current element, pop the top of the stack.
- If the stack is empty, then the result for the current index is -1, else the result is top of the stack.
- Push the current element into the stack.
- Print the result array.

Time - O(n)
Space - O(n)

n - number of elements

*/

const nextGreater = (n, arr) => {
	const result = new Array(n);
	const stack = [];
	for (let i = n - 1; i >= 0; i--) {
		while (stack.length !== 0 && stack[stack.length - 1] < arr[i]) {
			stack.pop();
		}
		if (stack.length === 0) {
			result[i] = -1;
		} else {
			result[i] = stack[stack.length - 1];
		}
		stack.push(arr[i]);
	}
	return result;
};

const solve = (n, arr) => {
	const result = nextGreater(n, arr);
	for (let i = 0; i < result.length; i++) {
		console.log(result[i]);
	}
};
