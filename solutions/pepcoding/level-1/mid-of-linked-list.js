/* 

Problem

https://pepcoding.com/resources/online-java-foundation/linked-lists/mid-linked-list-official/ojquestion

Approach

1. Count nodes
- Count the total number of nodes.
- Get the index of the middle node using the count of nodes.
- Print the value of the middle node.

Time - O(n)
Space - O(1)

2. Two pointers
- Use two pointers slow, fast.
- Make the slow point to head and fast point to the next of head.
- Move the slow pointer by 1 node and fast pointer by 2 nodes.
- Print the value of slow pointer which is the middle node.

Time - O(n)
Space - O(1)

n - number of nodes

*/

const solve = (head) => {
	if (head === null) {
		return;
	}
	let size = 0,
		curr = head;
	while (curr !== null) {
		curr = curr.next;
		size++;
	}
	let midIndex;
	if (size % 2 === 0) {
		midIndex = size / 2 - 1;
	} else {
		midIndex = Math.floor(size / 2);
	}
	let currIndex = 0;
	curr = head;
	while (curr !== null) {
		if (currIndex === midIndex) {
			console.log(curr.value);
			break;
		}
		curr = curr.next;
		currIndex++;
	}
};

const solve2 = (head) => {
	if (head === null) {
		return;
	}
	let slow = head,
		fast = head.next;
	while (fast !== null && fast.next !== null) {
		slow = slow.next;
		fast = fast.next.next;
	}
	console.log(slow.value);
};
