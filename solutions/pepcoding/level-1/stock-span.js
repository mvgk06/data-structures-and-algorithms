/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/stacks-and-queues/stock-span-official/ojquestion

Approach
- We have to compute the number of elements between the current and nearest greatest element on the left.
- While the stack is not empty and the top of stack is smaller than or equal to the current element, then pop the element.
- If the stack is empty, then the result is index+1.
- Else the result is index-top.
- Push the current index into the stack.
- Print the result.

Time - O(n)
Space - O(n)

n - number of elements

*/

const stockSpan = (n, arr) => {
	const stack = [];
	const result = new Array(n);
	for (let i = 0; i < n; i++) {
		while (stack.length !== 0 && arr[stack[stack.length - 1]] <= arr[i]) {
			stack.pop();
		}
		if (stack.length === 0) {
			result[i] = i + 1;
		} else {
			result[i] = i - stack[stack.length - 1];
		}
		stack.push(i);
	}
	return result;
};

const solve = (n, arr) => {
	const result = stockSpan(n, arr);
	for (let i = 0; i < result.length; i++) {
		console.log(result[i]);
	}
};
