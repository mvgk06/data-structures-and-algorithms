/*

Problem

https://pepcoding.com/resources/online-java-foundation/linked-lists/odd-even-linked-list-official/ojquestion

Approach
- Create two dummy nodes to separate the odd and even nodes.
- Traverse the list, if the current node is even, then add it to the even list.
- Else add it to the odd list.
- Join the even list with the odd list.
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

const getOddEvenList = (head) => {
	let curr = head,
		dummyOdd = new LinkedList(0),
		currOdd = dummyOdd,
		dummyEven = new LinkedList(0),
		currEven = dummyEven;
	while (curr !== null) {
		if (curr.value % 2 === 0) {
			currEven.next = curr;
			currEven = curr;
		} else {
			currOdd.next = curr;
			currOdd = curr;
		}
		curr = curr.next;
	}
	currOdd.next = dummyEven.next;
	return dummyOdd.next;
};

const solve = (head) => {
	const updatedHead = getOddEvenList(head);
	printList(updatedHead);
};
