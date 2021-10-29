/*

Problem

https://leetcode.com/problems/remove-linked-list-elements/

Approach

1. Iterative
- Place the head after removing the nodes with given value.
- Delete all the nodes with the given value.
- Return the head.

Time - O(n)
Space - O(1)

2. Recursive
- Recursively remove the nodes from the sublist and return the sublist's head.
- If the value of the head is equal to the given value, then the current head will be the sublist's head. 
- Else the current head's next will be the sublist's head.
- If the head is null, then return null.

Time - O(n)
Space - O(n)

n - number of nodes

*/

/* Iterative */

const removeElements = function (head, val) {
	while (head != null) {
		if (head.val === val) {
			head = head.next;
		} else {
			break;
		}
	}
	let prev = null,
		curr = head;
	while (curr != null) {
		if (curr.val === val) {
			prev.next = curr.next;
			curr = curr.next;
		} else {
			prev = curr;
			curr = curr.next;
		}
	}
	return head;
};

/* Recursive */

const removeHelper = (head, val) => {
	if (head === null) {
		return null;
	}
	const sublistHead = removeHelper(head.next, val);
	if (head.val === val) {
		head = sublistHead;
	} else {
		head.next = sublistHead;
	}
	return head;
};

const removeElements2 = function (head, val) {
	if (head === null) {
		return null;
	}
	return removeHelper(head, val);
};
