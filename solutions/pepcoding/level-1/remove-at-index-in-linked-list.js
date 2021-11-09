/*

Problem

https://pepcoding.com/resources/online-java-foundation/linked-lists/remove-at-linked-list-official/ojquestion

Approach
- If the size is 0, then print list is empty.
- Else traverse the list, remove the node at the given index and decrement the size.
- If the node is not removed, then print invalid arguments.

Time - O(n)
Space - O(1)

n - number of nodes

*/

const solve = (head, tail, size, index) => {
	if (size === 0) {
		console.log('List is empty');
	} else {
		let curr = head,
			prev = null,
			currIndex = 0,
			isNodeRemoved = false;
		while (curr !== null) {
			if (currIndex === index) {
				if (currIndex === 0) {
					if (size === 1) {
						head = null;
						tail = null;
					} else {
						head = head.next;
					}
				} else if (currIndex === size - 1) {
					prev.next = null;
					tail = prev;
				} else {
					prev.next = curr.next;
				}
				isNodeRemoved = true;
				size--;
				break;
			}
			prev = curr;
			curr = curr.next;
			currIndex++;
		}
		if (!isNodeRemoved) {
			console.log('Invalid arguments');
		}
	}
};
