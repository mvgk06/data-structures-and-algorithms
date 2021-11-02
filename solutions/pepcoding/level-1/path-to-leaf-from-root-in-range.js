/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/binary-tree/binary-tree-path-to-leaves-from-root-official/ojquestion

Approach

1. DFS
- Perform dfs from the root and keep track of the path, path sum.
- If the leaf node is reached and if the path sum is in the given range, then push the path into the result.
- Print the result.

Time - O(n)
Space - O(n)

2. BFS
- Perform bfs from the root and keep track of the path, path sum.
- If the leaf node is reached and if the path sum is in the given range, then push the path into the result.
- Print the result.

Time - O(n)
Space - O(n)

n - number of nodes

*/

/* DFS */

const getPath = (root, left, right, path, pathSum, result) => {
	if (root === null) {
		return;
	}
	if (root.left === null && root.right === null) {
		const totalPathSum = pathSum + root.value;
		if (totalPathSum >= left && totalPathSum <= right) {
			result.push([...path, root.value]);
		}
		return;
	}
	path.push(root.value);
	getPath(root.left, left, right, path, pathSum + root.value, result);
	getPath(root.right, left, right, path, pathSum + root.value, result);
	path.pop();
};

const solve = (root, left, right) => {
	const path = [],
		result = [];
	getPath(root, left, right, path, 0, result);
	for (let i = 0; i < result.length; i++) {
		for (let j = 0; j < result[i].length; j++) {
			process.stdout.write(result[i][j] + ' ');
		}
		process.stdout.write('\n');
	}
};

/* BFS */

const Queue = require('../../../data-structures/queue');

const solve2 = (root, left, right) => {
	const queue = new Queue(),
		result = [];
	queue.enque([root, [], 0]);
	while (queue.getSize() > 0) {
		const [curr, path, pathSum] = queue.getFront();
		queue.deque();
		if (curr.left === null && curr.right === null) {
			const totalPathSum = pathSum + curr.value;
			if (totalPathSum >= left && totalPathSum <= right) {
				result.push([...path, curr.value]);
			}
		}
		if (curr.left != null) {
			queue.enque([curr.left, [...path, curr.value], pathSum + curr.value]);
		}
		if (curr.right != null) {
			queue.enque([curr.right, [...path, curr.value], pathSum + curr.value]);
		}
	}
	for (let i = 0; i < result.length; i++) {
		for (let j = 0; j < result[i].length; j++) {
			process.stdout.write(result[i][j] + ' ');
		}
		process.stdout.write('\n');
	}
};
