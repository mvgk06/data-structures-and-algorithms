/*

Problem

https://leetcode.com/problems/add-two-numbers/

Approach
- Use two pointers left, right and traverse the list. 
- Keep track of sum, carry, add the nodes value and build the sum list.

Time - O(n+m)
Space - O(n+m)

n - number of nodes in list 1
m - number of nodes in list 2

*/

const addTwoNumbers = function (l1, l2) {
	let left = l1,
		right = l2,
		carry = 0,
		dummy = new ListNode(0),
		curr = dummy;
	while (left != null || right != null) {
		let sum = (left ? left.val : 0) + (right ? right.val : 0) + carry;
		if (sum > 9) {
			carry = Math.floor(sum / 10);
			sum = sum % 10;
		} else {
			carry = 0;
		}
		curr.next = new ListNode(sum);
		curr = curr.next;
		left = left?.next;
		right = right?.next;
	}
	if (carry != 0) {
		curr.next = new ListNode(carry);
		curr = curr.next;
	}
	return dummy.next;
};
