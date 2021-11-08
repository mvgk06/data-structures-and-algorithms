/*

Problem

https://pepcoding.com/resources/online-java-foundation/linked-lists/get-in-linked-list-official/ojquestion

Approach
- Traverse the list, if the current index is equal to the given index, then print the value of the node.
- If the node is not found, then print invalid arguments.

Time - O(n)
Space - O(1)

n - number of nodes

*/

const getAt = (head, index) => {
	let curr = head,
		currIndex = 0,
		isNodeFound = false;
	while (curr !== null) {
		if (currIndex === index) {
			console.log(curr.value);
			isNodeFound = true;
			break;
		}
		curr = curr.next;
		currIndex++;
	}
	if (!isNodeFound) {
		console.log('Invalid arguments');
	}
};

const solve = (head, index) => {
	getAt(head, index);
};
