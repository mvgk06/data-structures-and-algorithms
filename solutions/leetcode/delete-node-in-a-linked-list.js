/*

Problem

https://leetcode.com/problems/delete-node-in-a-linked-list/

Approach
- Make the current node's value as next node's value.
- Delete the next node.

Time - O(1)
Space - O(1)

*/

const deleteNode = function (node) {
	node.val = node.next.val;
	node.next = node.next.next;
};
