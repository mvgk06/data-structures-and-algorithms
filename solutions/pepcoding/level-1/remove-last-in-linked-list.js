/*

Problem

https://pepcoding.com/resources/online-java-foundation/linked-lists/remove-last-in-linked-list/ojquestion

Approach
- If the size is 0, then print list is empty.
- Else if the size is 1, then make the head and tail point to null and decrement the size.
- Else traverse the list, remove the tail and decrement the size.

Time - O(n)
Space - O(1)

n - number of nodes

*/

const solve = (head, tail, size) => {
	if (size === 0) {
		console.log('List is empty');
	} else if (size === 1) {
		head = null;
		tail = null;
		size--;
	} else {
		let curr = head;
		while (curr.next !== tail) {
			curr = curr.next;
		}
		curr.next = null;
		tail = curr;
		size--;
	}
};
