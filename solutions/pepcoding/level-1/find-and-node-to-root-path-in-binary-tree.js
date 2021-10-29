/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/binary-tree/find-nodetorootpath-binary-tree-official/ojquestion

Approach

1. DFS
- Perform dfs to find the given key and update the path during the traversal.
- If the key is found, then push the path into the result and return true.
- Else return false.

Time - O(n)
Space - O(n)

2. BFS
- Perform bfs to find the given key and update the path during the traversal.
- If the key is found, then push the path into the result and break the loop.

Time - O(n)
Space - O(n)

n - number of nodes

*/

/* DFS */

const findKeyAndPath = (root, key, path, result) => {
	if (root === null) {
		return false;
	}
	if (root.value === key) {
		result.push(...path, key);
		return true;
	}
	path.push(root.value);
	const isKeyFound =
		findKeyAndPath(root.left, key, path, result) ||
		findKeyAndPath(root.right, key, path, result);
	path.pop();
	return isKeyFound;
};

const solve = (root, key) => {
	const path = [],
		result = [];
	const isKeyFound = findKeyAndPath(root, key, path, result);
	console.log(isKeyFound);
	console.log(result.reverse());
};

/* BFS */

const Queue = require('../../../data-structures/queue');

const solve2 = (root, key) => {
	let isKeyFound = false;
	const result = [],
		queue = new Queue();
	queue.enque([root, []]);
	while (queue.getSize() > 0) {
		const [curr, path] = queue.getFront();
		queue.deque();
		if (curr.value === key) {
			isKeyFound = true;
			result.push(...path, key);
			break;
		}
		if (curr.left != null) {
			queue.enque([curr.left, [...path, curr.value]]);
		}
		if (curr.right != null) {
			queue.enque([curr.right, [...path, curr.value]]);
		}
	}
	console.log(isKeyFound);
	console.log(result.reverse());
};
