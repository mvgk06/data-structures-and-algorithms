/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/dynamic-programming-and-greedy/fractional-knapsack-official/ojquestion

Approach
- Store the values and weights of the items as pairs in an array.
- Sort the array in decreasing order of (value/weight) ratio.
- For each item, based on the available capacity we can either pick the entire weight or partial weight.
- Update the result and capacity.
- Print the result.

Time - O(n*log(n))
Space - O(n)

n - number of items

*/

const solve = (n, values, weights, capacity) => {
	const arr = [];
	for (let i = 0; i < n; i++) {
		arr.push([values[i], weights[i]]);
	}
	arr.sort((a, b) => {
		if (a[0] / a[1] > b[0] / b[1]) {
			return -1;
		}
		return 1;
	});
	let result = 0;
	for (let i = 0; i < n; i++) {
		if (arr[i][1] <= capacity) {
			result += arr[i][0];
			capacity -= arr[i][1];
		} else {
			result += (arr[i][0] / arr[i][1]) * capacity;
			break;
		}
	}
	console.log(result);
};
