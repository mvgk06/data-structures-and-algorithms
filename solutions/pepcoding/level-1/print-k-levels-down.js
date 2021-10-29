/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/binary-tree/print-k-levels-down-official/ojquestion

Approach

1. BFS
- Perform bfs and push all the nodes in the kth level into the result.
- Print the result.

Time - O(n)
Space - O(n)

2. DFS
- Perform dfs and push all the nodes in the kth level into the result.
- Print the result.

Time - O(n)
Space - O(n)

n - number of nodes

*/

/* BFS */

const Queue = require('../../../data-structures/queue');

const solve = (root, k) => {
	const result = [];
	let level = 0;
	const queue = new Queue();
	queue.enque(root);
	while (queue.getSize() > 0) {
		const size = queue.getSize();
		for (let i = 1; i <= size; i++) {
			const curr = queue.getFront();
			queue.deque();
			if (level === k) {
				result.push(curr.value);
			}
			if (curr.left != null) {
				queue.enque(curr.left);
			}
			if (curr.right != null) {
				queue.enque(curr.right);
			}
		}
		level++;
	}
	for (let i = 0; i < result.length; i++) {
		console.log(result[i]);
	}
};

/* DFS */

const getKthLevel = (root, k, level, result) => {
	if (root === null) {
		return;
	}
	if (level === k) {
		result.push(root.value);
	}
	getKthLevel(root.left, k, level + 1, result);
	getKthLevel(root.right, k, level + 1, result);
	return;
};

const solve2 = (root, k) => {
	const result = [];
	getKthLevel(root, k, 0, result);
	for (let i = 0; i < result.length; i++) {
		console.log(result[i]);
	}
};
