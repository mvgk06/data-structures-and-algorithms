/*

Recursion

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