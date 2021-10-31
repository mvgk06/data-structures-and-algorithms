/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/hashmap-and-heap/gce1-official/ojquestion

Approach
- Store all the elmenents from array 1 into a set.
- Traverse the array 2 if the current element exist in the set, print it and delete it from the set.

Time - O(n+m)
Space - O(n)

n - number of elements in array 1
m - number of elements in array 2

*/

const solve = (arr1, arr2) => {
	const s = new Set();
	for (let i = 0; i < arr1.length; i++) {
		s.add(arr1[i]);
	}
	for (let i = 0; i < arr2.length; i++) {
		if (s.has(arr2[i])) {
			console.log(arr2[i]);
			s.delete(arr2[i]);
		}
	}
};
