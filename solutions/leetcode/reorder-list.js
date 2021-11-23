/*

Problem

https://leetcode.com/problems/reorder-list/

Approach
- Get the middle of the list.
- Reverse the second half of the list.
- Use two pointers left, right to merge the two halves of the list.
- Return the head of the updated list.

Time - O(n)
Space - O(1)

n - number of nodes

*/

const getMid = (head) => {
	if (head === null) {
		return;
	}
	let slow = head,
		fast = head.next;
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

const reorderList = function (head) {
	const mid = getMid(head);
	let left = head,
		right = reverse(mid);
	while (left !== null && right !== null && left !== right) {
		const nextLeft = left.next;
		left.next = right;
		left = nextLeft;
		if (left === right) {
			return head;
		}
		const nextRight = right.next;
		right.next = left;
		right = nextRight;
	}
	return head;
};
