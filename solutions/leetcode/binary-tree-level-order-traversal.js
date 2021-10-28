/*

Problem

https://leetcode.com/problems/binary-tree-level-order-traversal/

Approach

1. BFS
- Create a queue and enque the root.
- While the queue is not empty, get the size of the queue.
- For each size, deque a node, push it into the current level of the result and enque it's children into the queue.
- Return the result.

Time - O(n)
Space - O(n)

2. DFS
- Push the current node in the current level of the result.
- Recursively solve for the left and right subtree.
- If the root is null, then return.
- If the array for the current level does not exist in the result, then create it.
- Return the result.

Time - O(n)
Space - O(n)

n - number of nodes

*/

/* BFS */

const Queue = require('../../data-structures/queue');

const levelOrder = function (root) {
	if (root === null) {
		return [];
	}
	const queue = new Queue(),
		result = [];
	queue.enque(root);
	while (queue.getSize() > 0) {
		const size = queue.getSize();
		const level = [];
		for (let i = 1; i <= size; i++) {
			const curr = queue.getFront();
			queue.deque();
			level.push(curr.val);
			if (curr.left != null) {
				queue.enque(curr.left);
			}
			if (curr.right != null) {
				queue.enque(curr.right);
			}
		}
		result.push(level);
	}
	return result;
};

/* DFS */

const levelOrderHelper = (root, level, result) => {
	if (root === null) {
		return;
	}
	if (!result[level]) {
		result[level] = [];
	}
	result[level].push(root.val);
	levelOrderHelper(root.left, level + 1, result);
	levelOrderHelper(root.right, level + 1, result);
	return;
};

const levelOrder2 = function (root) {
	if (root === null) {
		return [];
	}
	const result = [];
	levelOrderHelper(root, 0, result);
	return result;
};
