/*

Problem

https://pepcoding.com/resources/online-java-foundation/linked-lists/is-linkedlist-palindromic-official/ojquestion

Approach
- Find the middle of the linked list.
- Reverse the second half of the nodes and check if the first and second halves are equal.

Time - O(n)
Space - O(1)

n - number of nodes

*/

const getMid = (head) => {
	let slow = head,
		fast = head;
	while (fast !== null && fast.next !== null) {
		slow = slow.next;
		fast = fast.next.next;
	}
	return slow;
};

const reverse = (head) => {
	let prev = null,
		curr = head;
	while (curr !== null) {
		const next = curr.next;
		curr.next = prev;
		prev = curr;
		curr = next;
	}
	return prev;
};

const isPalindrome = (head) => {
	if (head === null || head.next === null) {
		return true;
	}
	const mid = getMid(head);
	const revHead = reverse(mid);
	let left = head,
		right = revHead;
	while (left !== null && right !== null) {
		if (left.value !== right.value) {
			return false;
		}
		left = left.next;
		right = right.next;
	}
	return true;
};

const solve = (head) => {
	const result = isPalindrome(head);
	console.log(result);
};
