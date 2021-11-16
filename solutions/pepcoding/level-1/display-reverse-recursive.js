/*

Problem

https://pepcoding.com/resources/online-java-foundation/linked-lists/display-reverse-linkedlist-official/ojquestion

Approach
- Recursively print the values of the rest of the nodes in the reverse order.
- Print the value of the current node.
- If the head is null, then return.

Time - O(n)
Space - O(n)

n - number of nodes

*/

const displayReverse = (head) => {
	if (head === null) {
		return;
	}
	displayReverse(head.next);
	process.stdout.write(`${head.value} `);
};

const solve = (head) => {
	displayReverse(head);
};
