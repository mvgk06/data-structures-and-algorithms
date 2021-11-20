/*

Problem

https://pepcoding.com/resources/online-java-foundation/linked-lists/reverse-linkedlist-pr-official/ojquestion

Approach
- Make the current's next point to prev.
- Recursive reverse the smaller linked list.
- If the current is null, then return previous.

Time - O(n)
Space - O(n)

n - number of elements

*/

const printList = (head) => {
	let curr = head;
	while (curr !== null) {
		process.stdout.write(`${curr.value} `);
		curr = curr.next;
	}
};

const reverse = (prev, curr) => {
	if (curr === null) {
		return prev;
	}
	const next = curr.next;
	curr.next = prev;
	return reverse(curr, next);
};

const solve = (head) => {
	const revHead = reverse(null, head);
	printList(revHead);
};
