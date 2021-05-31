/*

Recursion

Time - O(n)
Space - O(n)

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