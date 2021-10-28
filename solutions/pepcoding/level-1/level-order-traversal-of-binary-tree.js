/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/binary-tree/levelorder-binarytree-official/ojquestion

Approach

1. BFS
- Create a queue and enque the root.
- While the queue is not empty, get the size of the queue.
- For each size, deque a node, print it and enque it's children into the queue.

Time - O(n)
Space - O(n)

2. DFS
- Push the current node in the current level of the result.
- Recursively solve for the left and right subtree.
- If the root is null, then return.
- If the array for the current level does not exist in the result, then create it.
- Print the result.

Time - O(n)
Space - O(n)

n - number of nodes

*/

/* BFS */

const Queue = require('../../../data-structures/queue');

const solve = (root) => {
	if (root === null) {
		return;
	}
	const queue = new Queue();
	queue.enque(root);
	while (queue.getSize() > 0) {
		const size = queue.getSize();
		for (let i = 1; i <= size; i++) {
			const curr = queue.getFront();
			queue.deque();
			process.stdout.write(curr.value.toString() + ' ');
			if (curr.left != null) {
				queue.enque(curr.left);
			}
			if (curr.right != null) {
				queue.enque(curr.right);
			}
		}
		process.stdout.write('\n');
	}
};

/* DFS */

const getLevelOrder = (root, level, result) => {
	if (root === null) {
		return;
	}
	if (!result[level]) {
		result[level] = [];
	}
	result[level].push(root.value);
	getLevelOrder(root.left, level + 1, result);
	getLevelOrder(root.right, level + 1, result);
	return;
};

const solve2 = (root) => {
	const result = [];
	getLevelOrder(root, 0, result);
	for (let i = 0; i < result.length; i++) {
		for (let j = 0; j < result[i].length; j++) {
			process.stdout.write(result[i][j] + ' ');
		}
		process.stdout.write('\n');
	}
};
