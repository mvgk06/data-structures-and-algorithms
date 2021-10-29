/*

Problem

https://leetcode.com/problems/symmetric-tree/

Approach

1. DFS
- If left is equal to right and left's left subtree is equal to right's right subtree and left's right subtree is equal to right's left subtree, then the tree is 
symmetric.
- If the left and right both are null, then return true.
- If either of left and right is null, then return false.

Time - O(n)
Space - O(n)

2. BFS
- Create a queue and enque the left, right of the root into the queue.
- While the queue is not empty, deque the front node.
- If left and right both are null, then continue.
- If either of left and right is null, then return false.
- Else if left is not equal to right, then return false.
- Push the left's left along with right's right and left's right along with right's left.
- Once the queue is empty, return true.

Time - O(n)
Space - O(n)

*/

/* DFS */

const helper = (l, r) => {
	if (l === null && r === null) {
		return true;
	}
	if (l === null || r === null) {
		return false;
	}
	return l.val === r.val && helper(l.left, r.right) && helper(l.right, r.left);
};

const isSymmetric = function (root) {
	return helper(root.left, root.right);
};

/* BFS */

const Queue = require('../../data-structures/queue.js');

const isSymmetric2 = function (root) {
	const queue = new Queue();
	queue.enque([root.left, root.right]);
	while (queue.getSize() > 0) {
		const [l, r] = queue.getFront();
		queue.deque();
		if (l === null && r === null) {
			continue;
		}
		if (l === null || r === null) {
			return false;
		}
		if (l.val != r.val) {
			return false;
		}
		queue.enque([l.left, r.right]);
		queue.enque([l.right, r.left]);
	}
	return true;
};
