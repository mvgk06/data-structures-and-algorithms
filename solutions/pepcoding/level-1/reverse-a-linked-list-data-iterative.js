/*

Problem

https://pepcoding.com/resources/online-java-foundation/linked-lists/reverse-di-official/ojquestion

Approach
- Traverse the list and copy the value of each node in an array.
- Traverse the list and set the value of each node in the reverse order of the array.

Time - O(n)
Space - O(n)

n - number of nodes

*/

const solve = (head) => {
	const arr = [];
	let curr = head,
		currIndex = 0;
	while (curr !== null) {
		arr.push(curr.value);
		curr = curr.next;
		currIndex++;
	}
	curr = head;
	currIndex--;
	while (curr !== null) {
		curr.value = arr[currIndex];
		currIndex--;
		curr = curr.next;
	}
};
