/*

Approach
- Recursively solve the smaller sub problems.
- If the last occurrence is found then return it.
- If the current element is the last occurrence then return the current index.
- If the end of the array is reached then return -1 to indicate last occurrence is not found.

Time - O(n)
Space - O(n)

n - number of items

*/

const lastOccurrence = (arr, key, currIndex) => {
	if (currIndex === arr.length) {
		return -1;
	}

	const lastOccurrenceIndex = lastOccurrence(arr, key, currIndex + 1);

	if (lastOccurrenceIndex !== -1) {
		return lastOccurrenceIndex;
	}

	if (arr[currIndex] === key) {
		return currIndex;
	}

	return -1;
};