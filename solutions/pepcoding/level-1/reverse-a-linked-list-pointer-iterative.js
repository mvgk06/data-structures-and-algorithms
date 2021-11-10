/*

Problem

https://pepcoding.com/resources/online-java-foundation/linked-lists/reverse-pi-official/ojquestion

Approach
- Keep track of the previous and current node.
- While the current is not null, store the reference of the next node.
- Set the next of the current node as previous node.
- Make the previous point to current and current point to the reference of next node.
- After the list is traversed, make the tail point to the head and the head point to previous node.

Time - O(n)
Space - O(1)

n - number of nodes

*/

const solve = (head, tail) => {
	let prev = null,
		curr = head;
	while (curr !== null) {
		const next = curr.next;
		curr.next = prev;
		prev = curr;
		curr = next;
	}
	tail = head;
	head = prev;
};
