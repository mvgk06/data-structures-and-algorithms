/*

Problem

https://pepcoding.com/resources/online-java-foundation/linked-lists/remove-duplicates-official/ojquestion

Approach
- Keep track of the previous and the current node.
- Traverse the list, if the value of the previous node is equal to the current node, then delete the current node and move the current pointer to the next node.
- Else move the previous pointer to the current node and current pointer to the next node.
- Print the updated list.

Time - O(n)
Space - O(1)

n - number of nodes

*/

const printList = (head) => {
	let curr = head;
	while (curr !== null) {
		process.stdout.write(`${curr.value} `);
		curr = curr.next;
	}
	process.stdout.write('\n');
};

const removeDuplicates = (head) => {
	let curr = head,
		prev = null;
	while (curr !== null) {
		if (prev !== null && prev.value === curr.value) {
			prev.next = curr.next;
			curr = prev.next;
		} else {
			prev = curr;
			curr = curr.next;
		}
	}
};

const solve = (head) => {
	removeDuplicates(head);
	printList(head);
};
