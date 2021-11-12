/*

Problem

https://leetcode.com/problems/merge-two-sorted-lists/

Approach
- Use two pointers left, right.
- Make the left and right point to the head of the two sorted lists.
- Compare the values of the left and right pointer and merge the two lists.
- Return the head of the merged list.

Time - O(n)
Space - O(1)

n - number of nodes

*/

const mergeTwoLists = function (l1, l2) {
	if (l1 === null && l2 === null) {
		return null;
	}
	if (l1 === null) {
		return l2;
	}
	if (l2 === null) {
		return l1;
	}
	let left = l1,
		right = l2,
		dummy = new ListNode(0),
		curr = dummy;
	while (left !== null && right !== null) {
		if (left.val <= right.val) {
			curr.next = left;
			curr = left;
			left = left.next;
		} else {
			curr.next = right;
			curr = right;
			right = right.next;
		}
	}
	if (left !== null) {
		curr.next = left;
		curr = left;
	} else if (right !== null) {
		curr.next = right;
		curr = right;
	}
	return dummy.next;
};
