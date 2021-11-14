/*

Problem

https://pepcoding.com/resources/online-java-foundation/hashmap-and-heap/k-largest-elements-official/ojquestion

Approach

1. Sorting
- Sort the elements in decreasing order.
- Print the k largest elements in the increasing order.

Time - O(n*log(n))
Space - O(n)

2. Heap
- Create a min heap.
- Insert the elements into the heap and maintain its size as k by deleting the smaller elements.
- Print the k largest elements from the heap. 

Time - O(n*log(k))
Space - O(k)

n - number of elements
k - number

*/

/* Sorting */

const solve = (arr, k) => {
	arr.sort((first, second) => {
		if (first > second) {
			return -1;
		}
		return 1;
	});
	for (let i = k - 1; i >= 0; i--) {
		console.log(arr[i]);
	}
};

/* Heap */

const Heap = require('../../../data-structures/heap');

const solve2 = (arr, k) => {
	const minHeap = new Heap((curr, parent) => curr.value < parent.value);
	for (let i = 0; i < arr.length; i++) {
		minHeap.insert(arr[i]);
		if (minHeap.getSize() > k) {
			minHeap.delete();
		}
	}
	while (minHeap.getSize() > 0) {
		const top = minHeap.getTop();
		console.log(top.value);
		minHeap.delete();
	}
};
