/*

Problem

https://leetcode.com/problems/palindrome-linked-list/

Approach

1. Reverse first half
- Count the total number of nodes in the linked list.
- Reverse the first half nodes and check if the first and second halves are equal.

Time - O(n)
Space - O(1)

2. Reverse second half
- Find the middle of the linked list.
- Reverse the second half nodes and check if the first and second halves are equal.

Time - O(n)
Space - O(1)

n - size of the linked list

*/

/* Reverse first half */

const isPalindrome = function (head) {
	let count = 0,
		curr = head;
	while (curr != null) {
		count++;
		curr = curr.next;
	}
	const isOdd = count % 2 != 0;
	const limit = Math.floor(count / 2);
	let prev = null;
	curr = head;
	count = 0;
	while (count < limit) {
		count++;
		const next = curr.next;
		curr.next = prev;
		prev = curr;
		curr = next;
	}
	if (isOdd) {
		curr = curr.next;
	}
	while (prev != null && curr != null) {
		if (prev.val != curr.val) {
			return false;
		}
		prev = prev.next;
		curr = curr.next;
	}
	return true;
};

/* Reverse second half */

const isPalindrome2 = function (head) {
	let slow = head,
		fast = head;
	while (fast != null && fast.next != null) {
		slow = slow.next;
		fast = fast.next.next;
	}
	let curr = slow,
		prev = null;
	while (curr != null) {
		const next = curr.next;
		curr.next = prev;
		prev = curr;
		curr = next;
	}
	curr = head;
	while (prev != null && curr != null) {
		if (prev.val != curr.val) {
			return false;
		}
		prev = prev.next;
		curr = curr.next;
	}
	return true;
};
