/*

Approach
- If the current element is equal to the key then print it.
- Recursively solve the smaller sub problems.
- If the end of the array is reached then return.

Time - O(n)
Space - O(n)

*/

const allOccurrences = (arr, key, currIndex) => {
	if (currIndex === arr.length) {
		return;
	}

	if (arr[currIndex] === key) {
		console.log(currIndex);
	}

	allOccurrences(arr, key, currIndex + 1);
	return;
};