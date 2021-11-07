/*

Problem

https://pepcoding.com/resources/online-java-foundation/linked-lists/remove-first-linked-list-official/ojquestion

Approach
- If the size is 0, then print list is empty.
- Else if the size is 1, then make the head and tail point to null and decrement the size.
- Else make the head point to the next of head and decrement the size.

Time - O(1)
Space - O(1)

*/

const solve = (head, tail, size) => {
	if (size === 0) {
		console.log('List is empty');
	} else if (size === 1) {
		head = null;
		tail = null;
		size--;
	} else {
		head = head.next;
		size--;
	}
};
