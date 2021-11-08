/*

Problem

https://pepcoding.com/resources/online-java-foundation/linked-lists/add-at-index-in-linked-list-official/ojquestion

Approach
- Create a new node with the given value.
- Traverse the list, if the current index is equal to the given index, add the current node at the index.
- If the node is not inserted, then print invalid arguments.

Time - O(n)
Space - O(1)

n - number of nodes

*/

const LinkedListNode = require('../../../data-structures/linked-list-node');

const solve = (head, tail, size, index, value) => {
	let curr = head,
		prev = null,
		currIndex = 0,
		isNodeInserted = false;
	const node = new LinkedListNode(value);
	while (curr !== null) {
		if (currIndex === index) {
			if (currIndex === 0) {
				if (head === null) {
					head = node;
					tail = node;
				} else {
					node.next = head;
					head = node;
				}
			} else {
				prev.next = node;
				node.next = curr;
			}
			size++;
			isNodeInserted = true;
			break;
		}
		prev = curr;
		curr = curr.next;
		currIndex++;
	}
	if (!isNodeInserted) {
		if (size === index) {
			if (head === null) {
				head = node;
				tail = node;
			} else {
				tail.next = node;
				tail = node;
			}
			size++;
		} else {
			console.log('Invalid arguments');
		}
	}
};
