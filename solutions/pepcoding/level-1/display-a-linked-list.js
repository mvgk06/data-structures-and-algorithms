/*

Problem

https://pepcoding.com/resources/online-java-foundation/linked-lists/display-linked-list-official/ojquestion

Approach
- If the head is null, then return.
- Traverse the list and print the nodes.

Time - O(n)
Space - O(1)

n - number of nodes

*/

const solve = (head) => {
	if (head === null) {
		return;
	}
	let curr = head;
	while (curr !== null) {
		process.stdout.write(`${curr.value} `);
		curr = curr.next;
	}
	process.stdout.write('\n');
};
